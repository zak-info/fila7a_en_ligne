"use client"


import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, User, Input, Textarea } from "@node_modules/@nextui-org/react";

import { useEffect, useState } from "react";
import SuccessText from '@/components/DesignHelpers/SuccessText';
import ErrorText from '@/components/DesignHelpers/ErrorText';
import CircleTextToggle from "@/components/DesignHelpers/CircleTextToggle";


const AddConsulting = ({ }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleOpen = () => {
        onOpen();
    }

    const [postloader, setPostloader] = useState(false);
    const [credentials, setCredentials] = useState(null);



    const Add = async () => {
        setPostloader(true);
        try {

        } catch (error) {
            console.error('Error updating branch:', error);
        } finally {
            setPostloader(false);
        }
        setPostloader(false);
    }

    return (
        <>


            <form onSubmit={Add} className='w-full  overflow-y-scroll hide-scrollbar mb-4'>
                <div className='w-full   flex flex-col  mt-2 text-[14px] '>
                    <label htmlFor="title" className='text-md font-normal text-[#2D3748]  '>Title</label>
                    <input type="text" name="title" onChange={(e) => { setCredentials({ ...credentials, fullname: e.target.value }) }} className='w-full h-[50px]  mt-1 px-4 py-3 outline-none border border-[#E2E8F0] rounded-[15px] placeholder:font-light' id="fullname" placeholder='title' required />
                </div>
                <div className='w-full   flex flex-col  mt-2 text-[14px] '>
                    <label htmlFor="description" className='text-md font-normal text-[#2D3748]  '>Description</label>
                    <input type="text" name="description" onChange={(e) => { setCredentials({ ...credentials, phone: e.target.value }) }} className='w-full h-[50px]  mt-1 px-4 py-3 outline-none border border-[#E2E8F0] rounded-[15px] placeholder:font-light' id="phone" placeholder='description' required />
                </div>

            </form>
            <div className='w-full flex-1 items-end flex justify-end gap-4 mt-8 '>
                <button className="px-4 py-2 rounded-lg bg-primary-1 text-white ">
                    <CircleTextToggle postloader={postloader} text={"Submit"} color={"default"} size={"sm"} />
                </button>
            </div>

        </>
    )
}

export default AddConsulting