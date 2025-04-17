"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const BigSidebarItem = ({ href, icon, span, path }) => {
    const pathname = usePathname();
    const parts = pathname.split("/");
    const current_path = parts[2]
    console.log(current_path);
    return (
        <>
            <a href={href} className={`w-full ${path == current_path ? "bg-primary-2" : "bg-none"} flex flex-col lg:flex-row items-center px-[12px] py-[12px] gap-2 lg:rounded-r-full shadow-md shadow-inherit bg-primary-2-hover transition-all ease-in-out duration-150 `}>
                <span className='w-[30px] h-[30px] flex items-center justify-center rounded-[12px]'>
                    {icon}
                </span>
                <span className='text-white font-semibold text-[12px] lg:text-[12px] '>{span}</span>
            </a>
        </>
    )
}

export default BigSidebarItem