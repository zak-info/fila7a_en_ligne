"use client"

import Image from "next/image"
import { signOut } from 'next-auth/react'
import { useEffect, useContext } from "react"
import { GlobalContext } from '@context/GlobalContext'

// import { Dropdown } from "flowbite-react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Link from "next/link";



const Header = () => {
    const { user } = useContext(GlobalContext);



    function getFirstLetters(sentence) {
        // Split the sentence into words
        const words = sentence?.split(' ');

        // Extract the first letter of each word
        const firstLetters = words?.map(word => word?.charAt(0)?.toUpperCase());

        return firstLetters;
    }

    return (
        <div dir="ltr" className="absolute top-0 w-screen h-24 py-4 bg-gradient-to-b from-white via-white  to-white/5  z-10 flex justify-between items-center text-black">
            <a href="/" className=" md:ms-4 flex justify-center items-center">
                <Image width={80} height={80} src={"/logo.png"} className="w-32 h-16" />
            </a>
            <ul className="hidden md:flex  ms-[90px] gap-[55px]  justify-between md:justify-evenly items-center text-gray-600 text-xs md:text-base">
                <li className=" text-primary-1-hover hover:scale-125  transition ease-in-out duration-250"><a href="#home">Home</a></li>
                <li className="text-primary-1-hover hover:scale-125  transition ease-in-out duration-250"><a href="#wise">About</a></li>
                <li className="text-primary-1-hover hover:scale-125  transition ease-in-out duration-250"><a href="#services">Services</a></li>
                <li className="text-primary-1-hover hover:scale-125  transition ease-in-out duration-250"><a href="#comments">Contact Us</a></li>
                <li className="text-primary-1-hover hover:scale-125  transition ease-in-out duration-250"><a href="#comments">Pricing</a></li>
            </ul>
            <div className="w-2/12 md:w-1/3 flex items-center gap-4 justify-end ms-2 me-2 md:me-8">
                <a href="/login">Login</a>
                <a href="/login" className="bg-primary-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#DBCDAD] focus:ring-opacity-50 text-white md:text-md font-light px-4 py-1 md:px-4 md:py-1 rounded-3xl transition duration-300 ease-in-out">Get Started</a>
            </div>
        </div>
    )
}

export default Header










{/* <div className="cursor-pointer btn-gradient relative z-0 rounded-20 text-center px-8 text-white hover:-translate-y-1 transition-transform whitespace-nowrap group flex items-center justify-center w-max mobile-btn-shadow upload-to-enhance-btn h-15 [min-width:260px] flex flex-col items-center justify-center rounded-48px mx-auto max-w-full shadow-[0_10px_21px_0_rgba(176,204,255,1)]"><div className="rounded-20 absolute -z-[1] left-0 w-full h-full overflow-hidden"><div className="absolute w-full h-full -z-[1] group-hover:translate-x-full transition-transform"><div className="from-[#3babff] to-theme bg-gradient-to-r absolute top-0 left-0 -z-10 w-full h-full"></div><div className="from-[#3babff] to-theme bg-gradient-to-l absolute top-0 left-0 -translate-x-full -z-10 w-102% h-full"></div></div></div><!--[-->
                  <div className="relative flex items-center">
                    <svg className="inline-block mr-2 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.92 19.39" style="enable-background:new 0 0 19.92 19.39;" xml:space="preserve"><path d="M18.42 13.51v3.34c0 .58-.51 1.04-1.13 1.04H2.63c-.62 0-1.13-.47-1.13-1.04v-3.34M10.21 4.94v7.76" style="fill:none;stroke:currentColor;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"></path><path d="M5.18 5.41 9.57.29c.33-.39.94-.39 1.27 0l4.39 5.12c.47.55.08 1.39-.63 1.39H5.82a.841.841 0 0 1-.64-1.39z" style="fill:currentColor;"></path></svg>
                    <span className="text-xl font-bold">Upload Image</span>
                  </div>
                <!--]--></div> */}