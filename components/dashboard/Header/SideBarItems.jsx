"use client"

import Image from 'next/image'
import BigSidebarItem from './BigSidebarItem'
import Link from 'next/link';
import GoToAccLogo from './GoToAccLogo';
import { signOut } from 'next-auth/react'
import { useRouter } from '@node_modules/next/navigation';
import JustText from '@components/just-text/JustText';

const SideBarItems = ({ user }) => {

    const router = useRouter();
    const LogOut = () => {
        // setPostLoader(true);
        signOut();
        router.push("/login");
        // router.refresh();
    }

    console.log(user);

    return (
        <div className="w-full h-full flex flex-col items-center ">
            <GoToAccLogo />
            {/* <div className='h-[1px] w-3/4 bg-gradient-to-tr from-[#F8F9FA] via-gray-200 to-[#F8F9FA]'></div> */}
            <div className='w-full lg:p-4 ps-0 lg:ps-0 mt-6 flex flex-col lg:gap-2'>

                {
                    user?.type == "user" || user?.type == "scientist" ?
                        <>
                            <BigSidebarItem href={"/dashboard/home"} path={"home"} span={<JustText text={"home"} />} icon={<i class="ri-home-9-fill text-xl text-primary-1"></i>} />
                            <BigSidebarItem href={"/dashboard/products"} path={"products"} span={<JustText text={"products"} />} icon={<i class="ri-archive-fill text-xl text-primary-1"></i>} />
                            <BigSidebarItem href={"/dashboard/companies"} path={"companies"} span={<JustText text={"companies"} />} icon={<i class="ri-community-fill text-xl text-primary-1"></i>} />
                            <BigSidebarItem href={"/dashboard/veterinarian"} path={"vitirians"} span={<JustText text={"vitirians"} />} icon={<i class="ri-hand-heart-line text-xl text-primary-1"></i>} />
                            <BigSidebarItem href={"/dashboard/consulting"} path={"consulting"} span={<JustText text={"consulting"} />} icon={<i class="ri-shake-hands-fill text-xl text-primary-1"></i>} />
                        </>
                        : user?.type == "company" ?
                            <>
                                <BigSidebarItem href={"/dashboard/company/home"} path={"home"} span={<JustText text={"home"} />} icon={<i class="ri-home-9-fill text-xl text-primary-1"></i>} />
                                <BigSidebarItem href={"/dashboard/company/products"} path={"products"} span={<JustText text={"products"} />} icon={<i class="ri-archive-fill text-xl text-primary-1"></i>} />

                            </>
                            :user?.type == "veterinarian" ?
                            <>
                                <BigSidebarItem href={"/dashboard/home"} path={"home"} span={<JustText text={"home"} />} icon={<i class="ri-home-9-fill text-xl text-primary-1"></i>} />
                                <BigSidebarItem href={"/dashboard/veterinarian/consulting"} path={"consulting"} span={<JustText text={"consulting"} />} icon={<i class="ri-archive-fill text-xl text-primary-1"></i>} />

                            </>
                            :
                            null
                }

                <div>
                    <span className='text-neutral-400 lg:ms-2 text-[10px] lg:text-xs mt-12'>Managements</span>
                    <BigSidebarItem href={"/dashboard/settings"} path={"settings"} span={<JustText text={"settings"} />} icon={<i class="ri-tools-fill text-xl text-primary-1"></i>} />
                    <BigSidebarItem href={"/dashboard/profile"} path={"profile"} span={<JustText text={"profile"} />} icon={<i class="ri-profile-line text-xl text-primary-1"></i>} />
                    <button onClick={LogOut} className={`w-full  flex items-center px-[12px] py-[12px] gap-2 rounded-r-full shadow-md shadow-inherit bg-primary-2-hover transition-all ease-in-out duration-150 `}>
                        <span className='w-[30px] h-[30px] flex items-center justify-center rounded-[12px]'>
                            {/* {icon} */}
                            {/* <svg className='w-6 h-6 md:me-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 22C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V6H18V4H6V20H18V18H20V21C20 21.5523 19.5523 22 19 22H5ZM18 16V13H11V11H18V8L23 12L18 16Z"></path></svg> */}
                            <i class="ri-logout-box-line text-xl text-primary-1"></i>
                        </span>
                        <span className='text-white font-semibold text-[12px] lg:text-[12px] '><JustText text={"logout"} /></span>
                    </button>
                    {/* <button className={` bg-[#436850] text-white text-xs md:text-base  rounded-xl p-4 me-2 md:me-8 mt-2 hover:cursor-pointer hover:bg-white hover:text-[#436850] transition ease-in-out duration-200 flex justify-start items-center`}> {postLoader ? <div className='loading-circul '></div> : <><svg className='w-6 h-6 md:me-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 22C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V6H18V4H6V20H18V18H20V21C20 21.5523 19.5523 22 19 22H5ZM18 16V13H11V11H18V8L23 12L18 16Z"></path></svg> <span className='ms-2'> الخروج</span></>}  </button> */}


                </div>


            </div>
        </div>
    )
}

export default SideBarItems