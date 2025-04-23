"use client"


import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, User, Input, Textarea } from "@node_modules/@nextui-org/react";

import { useEffect, useState } from "react";
import SuccessText from '@/components/DesignHelpers/SuccessText';
import ErrorText from '@/components/DesignHelpers/ErrorText';
import CircleTextToggle from "@/components/DesignHelpers/CircleTextToggle";
import { CreateProduct } from "@actions/products.action";
import JustText from "@components/just-text/JustText";


const AddProduct = ({ idCompany }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleOpen = () => {
        onOpen();
    }

    const [postloader, setPostloader] = useState(false);
    const [events, setEvents] = useState(null);

    const [credentials, setCredentials] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const handleImageChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileUrl = URL.createObjectURL(file);
            setImageFile(file);
            setImagePreview(fileUrl);
            // const blurData = await getBase64(fileUrl);
            // setImagePreviewDataBlur(blurData);
        }
    };


    const Add = async (e) => {
        e.preventDefault();
        setPostloader(true);
        try {
            const form = new FormData();
            form.append('name', credentials.name);
            form.append('description', credentials.description);
            form.append('price', credentials.price);
            form.append('type', credentials.type);
            form.append('idCompany', idCompany);
            form.append('image', imageFile);

            const result = await CreateProduct(form);
            setEvents({ success: "operation success" })


        } catch (error) {
            console.error('Error updating branch:', error);
            setEvents({ error: "operation faild" })
        } finally {
            setPostloader(false);
        }
        setPostloader(false);
    }

    return (
        <>


            <form onSubmit={Add} className='w-full mt-8 border rounded-2xl  overflow-y-scroll hide-scrollbar mb-4 p-6 '>
                <h1><JustText text={"add_product"} /></h1>
                {events?.success ? <p className="text-green-400">{events?.success} 👍</p> : null}
                {events?.error ? <p className="text-red-500">{events?.error} 👎</p> : null}
                <div className="w-full flex gap-4">
                    <div className='w-full   flex flex-col  mt-2 text-[14px] '>
                        <label htmlFor="name" className='text-md font-normal text-[#2D3748]  '><JustText text={"product_name"} /></label>
                        <input type="text" name="name" onChange={(e) => { setCredentials({ ...credentials, name: e.target.value }) }} className='w-full h-[50px]  mt-1 px-4 py-3 outline-none border border-[#E2E8F0] rounded-[15px] placeholder:font-light' id="fullname" placeholder='name' required />
                    </div>
                    <div className='w-full   flex flex-col  mt-2 text-[14px] '>
                        <label htmlFor="price" className='text-md font-normal text-[#2D3748]  '><JustText text={"product_price"} /></label>
                        <input type="text" name="price" onChange={(e) => { setCredentials({ ...credentials, price: Number(e.target.value) }) }} className='w-full h-[50px]  mt-1 px-4 py-3 outline-none border border-[#E2E8F0] rounded-[15px] placeholder:font-light' id="fullname" placeholder='price' required />
                    </div>
                </div>
                <div className='w-full   flex flex-col  mt-2 text-[14px] '>
                    <label htmlFor="type" className='text-md font-normal text-[#2D3748]  '><JustText text={"product_type"} /></label>
                    <select type="text" name="type" onChange={(e) => { setCredentials({ ...credentials, type: e.target.value }) }} className='w-full h-[50px]  mt-1 px-4 py-3 outline-none border border-[#E2E8F0] rounded-[15px] placeholder:font-light' id="type" placeholder='type' required >
                        <option value="">select type</option>
                        <option value="medication">medication</option>
                        <option value="material">material</option>
                        <option value="agri">agri</option>
                        <option value="other">other</option>
                    </select>
                </div>
                <div className='w-full   flex flex-col  mt-2 text-[14px] '>
                    <label htmlFor="description" className='text-md font-normal text-[#2D3748]  '><JustText text={"description"} /></label>
                    <textarea type="text" name="description" onChange={(e) => { setCredentials({ ...credentials, description: e.target.value }) }} className='w-full h-[150px]  mt-1 px-4 py-3 outline-none border border-[#E2E8F0] rounded-[15px] placeholder:font-light' id="phone" placeholder='description' required />
                </div>
                <div className='w-full   flex flex-col  mt-2 text-[14px] '>
                    <label class="block mb-2 text-sm  text-gray-900 darkk:text-white" for="file_input"><JustText text={"upload_product_image"} /></label>
                    <input onChange={handleImageChange} class="block mx-4 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 darkk:text-gray-400 focus:outline-none  darkk:bg-gray-700 darkk:border-gray-600 darkk:placeholder-gray-400" id="file_input" type="file" />
                </div>

                <div className='w-full flex-1 items-end flex justify-end gap-4 mt-8 '>
                    <button type="submit" className="px-4 py-2 rounded-lg bg-primary-1 text-white ">
                        <CircleTextToggle postloader={postloader} text={<JustText text={"profile_picture"} />} color={"default"} size={"sm"} />
                    </button>
                </div>
            </form>

        </>
    )
}

export default AddProduct