"use server"

import { revalidatePath } from "next/cache";
import Consulting from "@models/consulting.model";
import { connect } from "@models/mongodb";

export const CreateConsulting = async (data) => {
    if (!data) {
        return { success: false, status: 400, msg: "Validation error. Check the provided data.", };
    }
    try {
        await connect()
        const result = await Consulting.create(data);
        console.log(result);
        revalidatePath("/dashboard/company/consultings/", 'page');
        revalidatePath("/dashboard/consultings/", 'page');

        return { success: true, status: 201, result, msg: "Consulting created successfully!", };
    } catch (error) {
        console.error("Error creating Consulting:", error);
        if (error.code === 11000) {
            return { success: false, status: 409, msg: "Consulting with this name already exists!", error: error.message, };
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

        return { imageUrl: process.env.NodeJs_Url + "/public/filaha-Consultings/" + filename, base64Placeholder: data?.base64Placeholder };
    } catch (error) {
        console.error('Error uploading the image:', error.message);
        throw error;
    }
}


