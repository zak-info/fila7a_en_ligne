"use server"

import { revalidatePath } from "next/cache";
import Product from "@models/product.model";
import { connect } from "@models/mongodb";

export const CreateProduct = async (formData) => {
    if (!formData) {
        return { success: false, status: 400, msg: "Validation error. Check the provided data.", };
    }
    try {
        await connect()
        const name = formData.get('name');
        const description = formData.get('description');
        const price = formData.get('price');
        const type = formData.get('type');
        const idCompany = formData.get('idCompany');

        if (!name) {
            throw new Error('Name is required.');
        }

        // const url = await AddImageToPinata(formData, 2592000)
        const { imageUrl, base64Placeholder } = await uploadImageToNodejs(formData, "/filaha/products")
        
        const result = await Product.create({ idCompany,name, type, price:Number(price), imageUrl, base64Placeholder, status: "active" });
        console.log(result);
        revalidatePath("/dashboard/company/products/", 'page');
        revalidatePath("/dashboard/products/", 'page');

        return { success: true, status: 201, result, msg: "Product created successfully!", };
    } catch (error) {
        console.error("Error creating Product:", error);
        if (error.code === 11000) {
            return { success: false, status: 409, msg: "Product with this name already exists!", error: error.message, };
        }
        if (error.name === "ValidationError") {
            return { success: false, status: 400, msg: "Validation error. Check the provided data.", error: error.message, };
        }
        return {
            success: false, status: 500, msg: "Server error. Please try again later.", error: error.message,
        };
    }
};




export async function uploadImageToNodejs(formData, url) {
    try {

        // const formData = new FormData();
        // formData.append('image', imageFile);

        const response = await fetch(process.env.NodeJs_Url + url, {
            method: 'POST',
            body: formData, // Send FormData directly
        });

        const data = await response.json();
        const filename = data?.file?.filename;

        if (!filename) {
            throw new Error('Filename not found in the response');
        }

        return { imageUrl: process.env.NodeJs_Url + "/public/filaha-products/" + filename, base64Placeholder: data?.base64Placeholder };
    } catch (error) {
        console.error('Error uploading the image:', error.message);
        throw error;
    }
}


