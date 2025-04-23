"use client"

import { UpdateUser } from '@actions/user.action';
import CircleTextToggle from '@components/DesignHelpers/CircleTextToggle copy';
import JustText from '@components/just-text/JustText';
import { useSession } from '@node_modules/next-auth/react';
import React from 'react'
import { useState } from 'react';


const Profile = ({ user }) => {
    const { data: session, update } = useSession();
    function getFirstLetters(sentence) {
        // Split the sentence into words
        const words = sentence?.split(' ');

        // Extract the first letter of each word
        const firstLetters = words?.map(word => word?.charAt(0)?.toUpperCase());

        return firstLetters;
    }


    const [postloader, setPostloader] = useState(false);
    const [events, setEvents] = useState(null);


    const UpdateProfile = async (e) => {
        e.preventDefault();
        setPostloader(true);
        let body = {
            fullname: e.target.fullname.value,
            phone: e.target.phone.value,
            password: e.target.password.value,
            data: {
                address: e.target.address.value,
                facebook: e.target.facebook.value,
                instagram: e.target.instagram.value,
                tiktok: e.target.tiktok.value,
                twitter: e.target.twitter.value,
            }
        }
        try {
            const result = await UpdateUser({ _id: user?._id }, body);
            update(body)

            setEvents({ success: "operation success" })

        } catch (error) {
            console.error('Error updating branch:', error);
            setEvents({ error: "operation faild" })
        } finally {
            setPostloader(false);
        }
        setPostloader(false);
    }
    return (
        <div className='w-full flex flex-col lg:flex-row justify-between pt-20'>
            <div className='w-full lg:w-1/4 '>
                <div class="flex items-center gap-4">
                    {/* <img class="w-10 h-10 rounded-full" src="/images/image-1.png" alt="" /> */}
                    <div class="w-10 h-10 bg-[#436850]  border border-white rounded-full flex justify-center items-center text-white" alt="">{getFirstLetters(user?.fullname)}</div>
                    <div class="font-medium dark:text-white">
                        <div>{user?.fullname}</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">{user?.email}</div>
                    </div>
                </div>
                <div className='bg-primary-2 rounded-lg text-neutral-600 px-4 py-2 mt-6 flex gap-2 items-center'>
                    <i class="ri-user-3-line"></i>
                    <span className=' '><JustText text={"profile"} /></span>
                </div>
                <div className='rounded-lg text-neutral-600 px-4 py-2 mt-3 flex gap-2 items-center'>
                    <i class="ri-tools-line"></i>
                    <span className=' '><JustText text={"settings"} /></span>
                </div>


            </div>
            <form onSubmit={UpdateProfile} className='w-full lg:w-2/3  bg-primary-2 rounded p-4'>
                <div className='flex flex-col lg:flex-row w-full justify-between'>
                    <div className='flex flex-col'>
                        <span className='text-lg font-bold'>{user?.fullname}</span>
                        <span>{user?.phone}</span>
                    </div>
                    <div className='flex gap-2'>
                        <button type="button" className='w-24 h-10 rounded border border-neutral-500 '><JustText text={"cancel"} /></button>
                        <button type="submit" className='w-24 h-10 rounded border border-primary-1 bg-[#24420E] text-white '>
                            <CircleTextToggle postloader={postloader} text={<JustText text={"save"} />} color={"default"} size={"sm"} />
                        </button>
                    </div>
                </div>
                <div className='w-full flex flex-col items-center lg:px-32 mt-20'>
                    <div className='w-full text-sm'>
                        <div class="font-medium  dark:text-white">
                            <div><JustText text={"profile_picture"} /></div>
                            <div class="text-xs font-light text-gray-500 dark:text-gray-400"><JustText text={"recognition_hint"} /></div>
                        </div>
                        <div className='w-full h-40 flex justify-center items-center'>
                            <div class="relative">
                                {/* <img class="w-28 h-28 rounded-full" src="/images/image-1.png" alt="" /> */}
                                <div class="w-28 h-28 bg-[#436850] text-5xl  border border-white rounded-full flex justify-center items-center text-white" alt="">{getFirstLetters(user?.fullname)}</div>
                                <span class="bottom-0 left-20 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                            </div>
                        </div>
                        <div class="font-medium dark:text-white mt-16">
                            <div><JustText text={"personal_data"} /></div>
                            <div class="text-xs font-light text-gray-500 dark:text-gray-400"><JustText text={"personal_data_hint"} /></div>
                        </div>
                        <div className='mt-8'>
                            <div className='w-full flex gap-2'>
                                <div class="relative mb-2 bg-transparent  ">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <i class="ri-user-line text-md"></i>
                                    </div>
                                    <input type="text" name="fullname" id="input-group-1" class=" bg-transparent  border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="fullname" />
                                </div>
                                <div class="relative mb-2 bg-transparent  ">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <i class="ri-user-line"></i>
                                    </div>
                                    <input type="text" name="email" value={user?.email} disabled id="input-group-1" class=" bg-transparent  border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email" />
                                </div>
                            </div>
                            <div class="relative mb-2 bg-transparent  ">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <i class="ri-phone-line"></i>
                                </div>
                                <input type="text" name="phone" id="input-group-1" class=" bg-transparent  border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="phone" />
                            </div>
                            <div class="relative mb-2 bg-transparent  ">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <i class="ri-map-line"></i>
                                </div>
                                <input type="text" name="address" id="input-group-1" class=" bg-transparent  border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="address" />
                            </div>
                            <div class="relative mb-2 bg-transparent ">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <i class="ri-key-line"></i>
                                </div>
                                <input type="password" name="password" id="input-group-1" class=" bg-transparent  border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password" />
                            </div>
                            {
                                user?.type == "veterinarian" ?
                                    <div class="relative mb-2 bg-transparent  ">
                                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                            <i class="ri-key-line"></i>
                                        </div>
                                        <input type="password" name="password" id="input-group-1" class=" bg-transparent  border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password" />
                                    </div>
                                    :
                                    null
                            }

                        </div>
                        <div class="font-medium  dark:text-white mt-16">
                            <div><JustText text={"social_profiles"} /></div>
                            <div class="text-xs font-light text-gray-500 dark:text-gray-400"><JustText text={"social_profiles_hint"} /></div>
                        </div>
                        <div className='mt-8'>
                            <div className='w-full flex gap-2'>
                                <div class="relative mb-2 bg-transparent  ">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <i class="ri-facebook-line text-md"></i>
                                    </div>
                                    <input type="text" name="facebook" id="input-group-1" class=" bg-transparent  border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="facebook" />
                                </div>
                                <div class="relative mb-2 bg-transparent  ">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <i class="ri-twitter-x-line"></i>
                                    </div>
                                    <input type="text" name="twitter" id="input-group-1" class=" bg-transparent  border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="twitter" />
                                </div>
                            </div>
                            <div className='w-full flex gap-2'>
                                <div class="relative mb-2 bg-transparent  ">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <i class="ri-instagram-line text-md"></i>
                                    </div>
                                    <input type="text" name="instagram" id="input-group-1" class=" bg-transparent  border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="instagram" />
                                </div>
                                <div class="relative mb-2 bg-transparent  ">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <i class="ri-tiktok-line"></i>
                                    </div>
                                    <input type="text" name="tiktok" id="input-group-1" class=" bg-transparent  border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="tiktok" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Profile