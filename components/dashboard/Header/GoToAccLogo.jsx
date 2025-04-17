import Image from 'next/image'
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["greek"] });

const GoToAccLogo = () => {
    return (
        <a href={"/"} className=' w-full  flex flex-col justify-center items-center py-4 '>
            <Image src={"/logo.png"} width={500} height={500} className=" w-32 h-20 md:w-40 md:h-24 lg:h-[50px] lg:w-[80px] " />
            <span className={`text-sm text-center lg:text-md text-white mt-6 uppercase font-semibold ${inter.className}`}>Fila7a online</span>
        </a>
    )
}

export default GoToAccLogo