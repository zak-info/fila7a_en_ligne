import React from 'react'
import Notification from './Notification'
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs"
import Link from 'next/link';
import { Skeleton } from '@nextui-org/react'
import SideBarDrawer from './SideBarDrawer';

const Header = () => {
  return (
    <div className='w-full flex items-end md:items-center justify-between mb-8 '>
      <div>
        <div className='md:hidden'>
          <SideBarDrawer />
        </div>
        <div className='w-52 h-[39.5px] px-2 flex justify-start items-center gap-2 border border-[#E2E8F0] bg-white rounded-[15px]'>
          <i class="ri-search-line text-xs"></i>
          <input type="text" className='outline-none bg-none focus-within:bg-none border-none text-xs placeholder:text-xs placeholder:font-light' placeholder='Type here...' />
        </div>
      </div>
      <div className='flex justify-end items-center gap-4'>
        <Notification />
        {/* <Link href={"/panel/admin/profile"} ><i class="ri-user-fill text-xl text-primary-3"></i></Link> */}
        <Link href={"/panel/admin/profile"} ><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48" fill='#AD1842'>
          <path d="M24 4A10 10 0 1024 24 10 10 0 1024 4zM36.021 28H11.979C9.785 28 8 29.785 8 31.979V33.5c0 3.312 1.885 6.176 5.307 8.063C16.154 43.135 19.952 44 24 44c7.706 0 16-3.286 16-10.5v-1.521C40 29.785 38.215 28 36.021 28z"></path>
        </svg></Link>
        <ClerkLoading>
          <Skeleton className="flex rounded-full w-8 h-8" />
        </ClerkLoading>
        <ClerkLoaded >
          <UserButton />
        </ClerkLoaded>

      </div>
    </div>
  )
}

export default Header