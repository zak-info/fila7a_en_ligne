"use client"

import { useState } from "react";
import Image from "next/image"
import { useRouter } from 'next/navigation';
import JustText from "@components/just-text/JustText";


const Registeration = () => {
    const router = useRouter();
    const [postloader, setPostloader] = useState(false);
    const [event, setEvent] = useState({ error: false, msg: "" });


   
    return (
        <div className="w-full h-screen flex flex-col bg-[#edf2f8]  justify-start items-center py-24 ">
            <div className="relative flex justify-center items-center">
                <Image src={"/logo.png"} width={400} height={400} className="z-10 w-32 h-20 md:w-[15vh] md:h-[10vh] transition ease-in-out duration-300" />
            </div>
            <div className='w-5/6 md:w-4/12 bg-[#f9fbfc] mt-8 py-8 border  rounded-3xl px-2 flex flex-col items-center'>
                <h1 className="text-4xl font-light text-[#436850] "><JustText text={"create_account"} /></h1>
                <a href="/register/user"  className="w-60 mt-12 text-center rounded-xl shadow-md py-2  bg-[#436850] text-lg text-white"><JustText text={"user"} /></a>
                <a href="/register/scientist"  className="w-60 mt-4 text-center rounded-xl shadow-md py-2  bg-[#436850] text-lg text-white"><JustText text={"scientist"} /></a>
                <a href="/register/veterinarian"  className="w-60 mt-4 text-center rounded-xl shadow-md py-2  bg-[#436850] text-lg text-white"><JustText text={"veterinarian"} /></a>
                <a href="/register/veterinarian"  className="w-60 mt-4 text-center rounded-xl shadow-md py-2  bg-[#436850] text-lg text-white"><JustText text={"fitou_sanitaire"} /></a>
                <a href="/register/company"  className="w-60 mt-4 text-center rounded-xl shadow-md py-2  bg-[#436850] text-lg text-white"><JustText text={"company"} /></a>
            </div>
        </div>
    )
}

export default Registeration