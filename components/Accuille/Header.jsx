"use client"

import Image from "next/image"
import { signOut } from 'next-auth/react'
import { useEffect, useContext } from "react"
import { GlobalContext } from '@context/GlobalContext'

// import { Dropdown } from "flowbite-react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Link from "next/link";
import JustText from "@components/just-text/JustText"

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from "next/navigation"


const Header = () => {
    const { user } = useContext(GlobalContext);
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const changeLang = (locale) => {
        let updatedPath;
        if (pathname === "/") {
            updatedPath = `/${locale}`;
        } else if (pathname.startsWith("/" + locale)) {
            // Already on the desired locale
            updatedPath = pathname;
        } else {
            updatedPath = pathname.replace(/^\/[^/]+/, `/${locale}`);
        }

        console.log("Updated path:", updatedPath);
        router.push(updatedPath);
    };

    const Redrct = (locale) => {
        return pathname.replace(/\/([^/]+)\//, `/${locale}/`);
    };



    return (
        <div className="absolute top-0 w-screen h-24 py-4 bg-gradient-to-b from-white via-white  to-white/5  z-10 flex justify-between items-center text-black">
            <a href="/" className=" md:ms-4 flex justify-center items-center">
                <Image width={80} height={80} src={"/logo.png"} className="w-32 h-16" />
            </a>
            <ul className="hidden md:flex  ms-[80px] gap-[55px]  justify-between md:justify-evenly items-center text-gray-600 text-xs md:text-base">
                <li className=" text-primary-1-hover hover:scale-125  transition ease-in-out duration-250"><a href="#home"><JustText text={"home"} /></a></li>
                <li className="text-primary-1-hover hover:scale-125  transition ease-in-out duration-250"><a href="#wise"><JustText text={"about"} /></a></li>
                <li className="text-primary-1-hover hover:scale-125  transition ease-in-out duration-250"><a href="#services"><JustText text={"services"} /></a></li>
                <li className="text-primary-1-hover hover:scale-125  transition ease-in-out duration-250"><a href="#comments"><JustText text={"contact_us"} /> </a></li>
                <li className="text-primary-1-hover hover:scale-125  transition ease-in-out duration-250"><a href="#comments"><JustText text={"pricing"} /></a></li>
            </ul>
            <div className="w-2/12 md:w-1/3 flex items-center gap-4 justify-end ms-2 me-2 md:me-8">
                <Dropdown >
                    <DropdownTrigger>
                        <div className="flex  items-center gap-3 px-3  h-12  hover:cursor-pointer border-b border-black  cursor-pointer">
                            <img className="w-6 h-8  " src={`/images/${locale}.svg`} alt="user photo" />
                            <span className="ms-1 text-xs md:text-sm text-primary-3 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 ms-1"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                            </span>
                        </div>

                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions" className='w-full px-2 py-3 bg-white rounded-xl border-none'>
                        <DropdownItem key="new" onPress={() => changeLang("en")} className="hover:bg-gray-100 p-0">
                            <div className="flex m-0 items-center text-gray-500  hover:bg-gray-100 rounded-lg px-3 py-1">
                                <img className="w-6 h-4   " src="/images/en.svg" alt="user photo" />
                                <span className="ms-3 text-sm md:text-lg   flex items-center">ِEnglish</span>
                            </div>
                        </DropdownItem>
                        <DropdownItem key="new2" onPress={() => changeLang("fr")} className="p-0 mt-2">
                            <div className="flex  items-center text-gray-500  hover:bg-gray-100 rounded-lg px-3 py-1">
                                <img className="w-6 h-4  " src="/images/fr.svg" />
                                <span className="ms-3 text-sm md:text-lg flex items-center">French</span>
                            </div>
                        </DropdownItem>
                        <DropdownItem key="new3" onPress={() => changeLang("ar")} className="p-0 mt-2">
                            <div className="flex  items-center text-gray-500  hover:bg-gray-100 rounded-lg px-3 py-1">
                                <img className="w-6 h-4  " src="/images/ar.svg" />
                                <span className="ms-3 text-sm md:text-lg flex items-center">عربي</span>
                            </div>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <a href="/login"><JustText text={"login"} /></a>
                <a href="/login" className="bg-primary-1 hidden md:block  hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#DBCDAD] focus:ring-opacity-50 text-white md:text-md font-light px-4 py-1 md:px-4 md:py-1 rounded-3xl transition duration-300 ease-in-out"><JustText text={"get_started"} /></a>

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