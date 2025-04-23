"use client"

import { useContext, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { getServerSession } from "next-auth";
import SideBarItems from '@components/dashboard/Header/SideBarItems';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { signOut } from 'next-auth/react'
import { GlobalContext } from '@context/GlobalContext'
import { usePathname, useRouter } from '@node_modules/next/navigation';
import JustText from '@components/just-text/JustText';
import { useLocale } from 'next-intl';



const GlobalLayout2 = ({ children }) => {
  const router = useRouter()
  const { data: session, update } = useSession()
  const { user, setUser } = useContext(GlobalContext);
  useEffect(() => {
    setUser(session?.user);
  }, [session])


  const logout = () => {
    signOut()
    router.push("/")
  }

  // const { user } = useContext(GlobalContext);

  function getFirstLetters(sentence) {
    // Split the sentence into words
    const words = sentence?.split(' ');

    // Extract the first letter of each word
    const firstLetters = words?.map(word => word?.charAt(0)?.toUpperCase());

    return firstLetters;
  }

  const pathname = usePathname();
  const parts = pathname.split("/");
  const locale = useLocale()

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
    <div className='relative w-full flex  '>
      <div className='w-1/5 bg-[#24420E] h-full fixed'>
        <SideBarItems user={user} />
      </div>
      <div className='w-full flex justify-end'>
        <div className='w-4/5 p-4'>
          <div className='w-full flex items-center justify-end'>
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
            <Dropdown >
              <DropdownTrigger>
                <div className="flex ms-2 me-2 md:me-8 hover:cursor-pointer">
                  <div class="relative ">
                    <div class="w-10 h-10 bg-[#436850]  border border-white rounded-full flex justify-center items-center text-white" alt="">{getFirstLetters(user?.fullname)}</div>
                    <span class="bottom-0 left-7 absolute border border-white  w-3 h-3 bg-[#2afa6a]  rounded-full"></span>
                  </div>
                  <div class="font-medium ms-4">
                    <div>{user?.fullname}</div>
                    <div class="text-sm text-gray-500">{user?.type}</div>
                  </div>
                </div>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions" className="bg-white rounded-lg py-4 px-2 border">
                <DropdownItem key="new">
                  <a href={"/dashboard/home"} className="flex items-center mt-2 hover:bg-gray-100 p-2 rounded-xl" >
                    <svg className='w-6 h-6  ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19H18V9.15745L12 3.7029L6 9.15745V19ZM19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM7.5 13H9.5C9.5 14.3807 10.6193 15.5 12 15.5C13.3807 15.5 14.5 14.3807 14.5 13H16.5C16.5 15.4853 14.4853 17.5 12 17.5C9.51472 17.5 7.5 15.4853 7.5 13Z"></path></svg>
                    <span className="ms-2 text-lg"><JustText text={"dashboard"} /></span>
                  </a>
                </DropdownItem>
                <DropdownItem key="new">
                  <a href={`/dashboard/profile?_id=${user?._id}`} className="flex items-center  hover:bg-gray-100 p-2 rounded-xl" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span className="ms-2  text-lg"><JustText text={"profile"} /></span>
                  </a>
                </DropdownItem>
                <DropdownItem key="new">
                  <div className="flex items-center  hover:bg-gray-100 p-2 rounded-xl" onClick={logout}>
                    <svg className="w-6 h-6 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" ><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" /></svg>
                    <span className="ms-2 text-lg text-red-500"><JustText text={"logout"} /></span>
                  </div>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default GlobalLayout2