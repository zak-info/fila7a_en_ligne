import Image from '@node_modules/next/image'
import React from 'react'

const Section1 = () => {
    return (
        <div className="relative w-full pt-40 lg:px-40 flex flex-col items-start h-screen bg-[url('/images/bg-111.png')] bg-cover bg-center bg-no-repeat">
            <Image src={"/images/bg-1111.png"} width={1980} height={1080} className=' w-60 h-52 absolute top-0 right-0 mt-52 m-12' />
            <p className="lg:w-2/5 text-sm mt-6 font-light">Caring for the Earth, Nourishing the World </p>
            <h1 className="lg:w-3/5 text-6xl mt-12 font-extrabold text-black text-start">ABOUT US! </h1>
        </div>
    )
}

export default Section1