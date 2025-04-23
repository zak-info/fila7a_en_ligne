import JustText from '@components/just-text/JustText'
import Image from '@node_modules/next/image'
import React from 'react'

const Section3 = ({}) => {
    return (
        <div className="relative w-full flex justify-evenly  p-20">
            <div className="lg:w-2/5">
                <span className="text-[#24420E] text-lg font-semibold"><JustText text={"why_choose"} /></span>
                <h1 className="text-4xl font-semibold  mt-4 "><JustText text={"crops_nurtured"} /></h1>
                <p className=" font-light mt-8"><JustText text={"why_paragraph"} /></p>
                <a href="/login" className="flex text-white justify-between px-6 p-4 mt-12 rounded-full w-60 bg-primary-1   text-sm items-center font-light g">
                <JustText text={"more_why_choose"} />
                    <svg width="25" height="25" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="22" cy="22" r="22" fill="white" />
                        <g clip-path="url(#clip0_0_1)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.7436 20.8813C25.9077 21.0454 25.9998 21.2679 25.9998 21.4999C25.9998 21.7319 25.9077 21.9545 25.7436 22.1185L20.7938 27.0684C20.713 27.152 20.6165 27.2186 20.5097 27.2645C20.403 27.3104 20.2882 27.3345 20.172 27.3355C20.0558 27.3365 19.9406 27.3144 19.833 27.2704C19.7255 27.2264 19.6278 27.1614 19.5457 27.0793C19.4635 26.9971 19.3985 26.8994 19.3545 26.7919C19.3105 26.6843 19.2884 26.5691 19.2894 26.4529C19.2904 26.3368 19.3146 26.2219 19.3604 26.1152C19.4063 26.0084 19.4729 25.9119 19.5565 25.8312L23.8878 21.4999L19.5565 17.1687C19.3971 17.0036 19.3089 16.7826 19.3109 16.5532C19.3129 16.3238 19.4049 16.1043 19.5672 15.9421C19.7294 15.7798 19.9489 15.6878 20.1783 15.6858C20.4077 15.6838 20.6287 15.772 20.7938 15.9314L25.7436 20.8813Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_0_1">
                                <rect width="21" height="21" fill="white" transform="translate(12 11)" />
                            </clipPath>
                        </defs>
                    </svg>
                </a>
            </div>
            <div className="w-2/5">
                <Image src={"/images/bg-4.png"} width={100} height={500} className="w-[40vw] h-[80vh]" />
            </div>
            <div className=" absolute bottom-0 left-0 z-20 bg-['brown'] mt ">
            </div>
        </div>
    )
}

export default Section3