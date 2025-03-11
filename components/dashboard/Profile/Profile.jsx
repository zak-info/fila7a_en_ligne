import React from 'react'

const Profile = ({ user }) => {
    return (
        <div className='w-full flex justify-between pt-20'>
            <div className='w-1/4 '>
                <div class="flex items-center gap-4">
                    <img class="w-10 h-10 rounded-full" src="/images/image-1.png" alt="" />
                    <div class="font-medium dark:text-white">
                        <div>Zakaria benali</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
                    </div>
                </div>
                <div className='bg-primary-2 rounded-lg text-neutral-600 px-4 py-2 mt-6 flex gap-2 items-center'>
                    <i class="ri-user-3-line"></i>
                    <span className=' '>Profile</span>
                </div>
                <div className='rounded-lg text-neutral-600 px-4 py-2 mt-3 flex gap-2 items-center'>
                    <i class="ri-tools-line"></i>
                    <span className=' '>Settings</span>
                </div>


            </div>
            <div className='w-2/3  bg-primary-2 rounded p-4'>
                <div className='flex w-full justify-between'>
                    <div className='flex flex-col'>
                        <span className='text-lg font-bold'>Zakaria benali</span>
                        <span>+213 795 921 233</span>
                    </div>
                    <div className='flex gap-2'>
                        <button className='w-24 h-10 rounded border border-neutral-500 '>Cancle</button>
                        <button className='w-24 h-10 rounded border border-primary-1 bg-[#24420E] text-white '>Save</button>
                    </div>
                </div>

                <div className='w-full flex flex-col items-center px-32 mt-20'>
                    <div className='w-full text-sm'>
                        <div class="font-medium  dark:text-white">
                            <div>Profile picture</div>
                            <div class="text-xs font-light text-gray-500 dark:text-gray-400">This is how others will recognize you</div>
                        </div>
                        <div className='w-full h-40 flex justify-center items-center'>
                            <div class="relative">
                                <img class="w-28 h-28 rounded-full" src="/images/image-1.png" alt="" />
                                <span class="bottom-0 left-20 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                            </div>
                        </div>

                        <div class="font-medium dark:text-white mt-16">
                            <div>Personel Data</div>
                            <div class="text-xs font-light text-gray-500 dark:text-gray-400">Others diserve to know you more</div>
                        </div>
                        <div className='mt-8'>
                            <div className='w-full flex gap-2'>
                                <div class="relative mb-2 bg-transparent  ">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <i class="ri-user-line text-md"></i>
                                    </div>
                                    <input type="text" id="input-group-1" class=" bg-transparent  border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="firstname" />
                                </div>
                                <div class="relative mb-2 bg-transparent  ">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <i class="ri-user-line"></i>
                                    </div>
                                    <input type="text" id="input-group-1" class=" bg-transparent  border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="lastname" />
                                </div>
                            </div>
                            <div class="relative mb-2 bg-transparent  ">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <i class="ri-phone-line"></i>
                                </div>
                                <input type="text" id="input-group-1" class=" bg-transparent  border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="phone" />
                            </div>
                            <div class="relative mb-2 bg-transparent  ">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <i class="ri-map-line"></i>
                                </div>
                                <input type="text" id="input-group-1" class=" bg-transparent  border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="address" />
                            </div>

                        </div>
                        <div class="font-medium  dark:text-white mt-16">
                            <div>Social Profiles</div>
                            <div class="text-xs font-light text-gray-500 dark:text-gray-400">This can help others finding you on social media</div>
                        </div>
                        <div className='mt-8'>
                            <div className='w-full flex gap-2'>
                                <div class="relative mb-2 bg-transparent  ">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <i class="ri-facebook-line text-md"></i>
                                    </div>
                                    <input type="text" id="input-group-1" class=" bg-transparent  border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="facebook" />
                                </div>
                                <div class="relative mb-2 bg-transparent  ">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <i class="ri-twitter-x-line"></i>
                                    </div>
                                    <input type="text" id="input-group-1" class=" bg-transparent  border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="twitter" />
                                </div>
                            </div>
                            <div className='w-full flex gap-2'>
                                <div class="relative mb-2 bg-transparent  ">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <i class="ri-instagram-line text-md"></i>
                                    </div>
                                    <input type="text" id="input-group-1" class=" bg-transparent  border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="instagram" />
                                </div>
                                <div class="relative mb-2 bg-transparent  ">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <i class="ri-tiktok-line"></i>
                                    </div>
                                    <input type="text" id="input-group-1" class=" bg-transparent  border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="tiktok" />
                                </div>
                            </div>
                           

                        </div>

                    </div>

                </div>


            </div>

        </div>
    )
}

export default Profile