"use client"

import { useState } from "react";
import Image from "next/image"
import { useRouter } from 'next/navigation';
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast"
import { createUser } from "@actions/user.action";
import JustText from "@components/just-text/JustText";



const Register = ({ type }) => {
    const router = useRouter();
    const [postloader, setPostloader] = useState(false);
    const [credentials, setCredentials] = useState(null);
    const [event, setEvent] = useState({ error: false, msg: "" });



    const handleRegister = async (e) => {
        e.preventDefault();
        setPostloader(true);
        try {
            const result = await createUser({ type, ...credentials })
            router.push("/login")
        } catch (e) {

            setPostloader(false);
        }

        setPostloader(false);

    }
    return (
        <div className="w-full min-h-screen flex flex-col bg-[#edf2f8]  justify-start items-center py-24 ">
            <div className="relative flex justify-center items-center">
                <Image src={"/logo.png"} width={400} height={400} className="z-10 w-32 h-20 md:w-[15vh] md:h-[10vh] transition ease-in-out duration-300" />
            </div>
            <form onSubmit={handleRegister} className='w-5/6 md:w-4/12 bg-[#f9fbfc] mt-8 py-8 border  rounded-3xl px-2 flex flex-col items-center'>
                <h1 className="text-2xl lg:text-4xl font-light text-[#436850] text-center"><JustText text={"create_account"} /></h1>
                <div className="w-5/6 md:w-4/5 mt-16">
                    <label htmlFor="fullname" className=""><JustText text={"fullname"} /></label>
                    <input id="fullname" type="text" name='fullname' onChange={(e) => { setCredentials({ ...credentials, fullname: e.target.value }) }} className='w-full mt-2 px-2 py-2 outline-none  border border-gray-300 hover:border-[#52795f]  rounded-xl transition ease-in-out duration-150' placeholder='fullname ' required />
                </div>
                <div className="w-5/6 md:w-4/5 mt-4">
                    <label htmlFor="phone" className=""><JustText text={"phone"} /></label>
                    <input id="phone" type="text" name='phone' onChange={(e) => { setCredentials({ ...credentials, phone: e.target.value }) }} className='w-full mt-2 px-2 py-2 outline-none  border border-gray-300 hover:border-[#52795f]  rounded-xl transition ease-in-out duration-150' placeholder='phone ' required />
                </div>
                <div className="w-5/6 md:w-4/5 mt-4">
                    <label htmlFor="email" className=""><JustText text={"email"} /></label>
                    <input id="email" type="email" name='email' onChange={(e) => { setCredentials({ ...credentials, email: e.target.value }) }} className='w-full mt-2 px-2 py-2 outline-none  border border-gray-300 hover:border-[#52795f]  rounded-xl transition ease-in-out duration-150' placeholder='email ' required />
                </div>
                <div className="w-5/6 md:w-4/5 mt-4 ">
                    <label htmlFor="password" className=""><JustText text={"password"} /></label>
                    <input id="password" type="password" name='password' onChange={(e) => { setCredentials({ ...credentials, password: e.target.value }) }} className='w-full mt-2 px-2 py-2 outline-none  border border-gray-300 hover:border-[#52795f] focus-within:border-[#52795f] rounded-xl transition ease-in-out duration-150' placeholder=' password' required />
                </div>
                <button type="submit" className="w-40 mt-4 rounded-xl shadow-md py-2  bg-[#436850] text-lg text-white">{postloader ? <div className='loading-circul'></div> : <JustText text={"sign_up"} />}</button>
                <a href="/login" className=" underline mt-4 text-[#436850]"> <JustText text={"login_label"} /></a>
            </form>
        </div>
    )
}

export default Register