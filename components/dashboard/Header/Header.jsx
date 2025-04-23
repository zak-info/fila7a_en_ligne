"use client"

import { ClerkLoaded, ClerkLoading, UserButton } from '@clerk/nextjs';
import { Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, useDisclosure } from '@nextui-org/react'
import { Skeleton } from 'antd';
import Image from 'next/image'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import SideBarDrawer from './SideBarDrawer';
import { useState } from 'react';
import { useLocale } from 'next-intl/dist/types/src/react-client';
import { useLocale } from 'next-intl';


const Header = ({ user }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const pathname = usePathname();
    const parts = pathname.split("/");
    const locale = useLocale()
    const last_path = parts[parts.length - 1]

    const [currentUser, setCurrentUser] = useState(JSON.parse(user))

    const router = useRouter();

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

    return (
        <div className="w-full flex justify-between px-4 md:px-0  items-center ">
            <div className="">
                <div className='md:hidden'>
                    <SideBarDrawer user={currentUser} />
                </div>
            </div>

            <div className="flex gap-4 items-center ">
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

                {/* <Dropdown className='mt-6' >
                    <DropdownTrigger>
                        <div className="flex items-center cursor-pointer ms-4">
                            <img className="w-6 h-4  " src={`/images/${locale}.svg`} alt="user photo" />
                            <span className="ms-3 text-xs md:text-sm hidden md:flex items-center">
                                {CurrentLang[locale]}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 ms-1"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                            </span>
                        </div>

                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions" className='w-full px-2 py-3 bg-white rounded-xl '>
                        <DropdownItem key="new" onClickCapture={() => { router.push("/en") }}>
                            <a href={"/en"} className="flex mt-2 items-center text-gray-500  hover:bg-gray-100 rounded-lg px-3 py-1">
                                <img className="w-6 h-4   " src="/images/en.svg" alt="user photo" />
                                <span className="ms-3 text-sm md:text-lg   flex items-center">ِEnglish</span>
                            </a>
                        </DropdownItem>
                        <DropdownItem key="new2" onClickCapture={() => { router.push("/fr") }}>
                            <a href={"fr"} className="flex mt-2 items-center text-gray-500  hover:bg-gray-100 rounded-lg px-3 py-1">
                                <img className="w-6 h-4  " src="/images/fr.svg" />
                                <span className="ms-3 text-sm md:text-lg flex items-center">French</span>
                            </a>
                        </DropdownItem>
                        <DropdownItem key="new3" onClickCapture={() => { router.push("/ar") }}>
                            <a href={"ar"} className="flex mt-2 items-center text-gray-500  hover:bg-gray-100 rounded-lg px-3 py-1">
                                <img className="w-6 h-4  " src="/images/ar.svg" />
                                <span className="ms-3 text-sm md:text-lg flex items-center">عربي</span>
                            </a>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown> */}
                <div className='flex justify-end items-center gap-4'>
                    <Link href={"/dashboard/profile"} >
                        {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48" fill='#AD1842'>
                            <path d="M24 4A10 10 0 1024 24 10 10 0 1024 4zM36.021 28H11.979C9.785 28 8 29.785 8 31.979V33.5c0 3.312 1.885 6.176 5.307 8.063C16.154 43.135 19.952 44 24 44c7.706 0 16-3.286 16-10.5v-1.521C40 29.785 38.215 28 36.021 28z"></path>
                        </svg> */}
                        <i class="ri-shield-user-fill text-2xl text-primary-1"></i>
                    </Link>
                    <ClerkLoading>
                        <Skeleton className="flex rounded-full w-8 h-8" />
                    </ClerkLoading>
                    <ClerkLoaded >
                        <UserButton />
                    </ClerkLoaded>

                </div>
            </div>

        </div>
    )
}

export default Header