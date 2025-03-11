"use client"
import Image from 'next/image'
import React from 'react'
import Lottie from "lottie-react";
import error from "@/public/rina-error.json";

const Error = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      {/* <Image width={100} height={100} src={"/logo2.svg"} className='w-96 h-96' /> */}
      <Lottie className='w-96 h-96' animationData={error} loop={true} />
      <h1 className='arabic-font text-[#52795f] mt-8 text-2xl md:text-4xl'>An Error has happend</h1>
      <h1 className='arabic-font text-[#52795f]  text-sm md:text-lg mt-6'>try refresh the page</h1>
    </div>
  )
}

export default Error