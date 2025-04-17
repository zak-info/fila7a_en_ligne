import React from 'react'

const ProductPage = ({_id,product}) => {

    const prods = [
        { _id: '1', name: "my product 1", description: "product description", address: "algerie - blida", phone: '+213 540 123 234' ,price: "25.00", image: "/images/bg-2.png",},
        { _id: '2', name: "my product 2", description: "product description", address: "algerie - bouira", phone: '+213 550 345 345' ,price: "25.00", image: "/images/bg-3.png",},
        { _id: '3', name: "my product 3", description: "product description", address: "algerie - anaba", phone: '+213 555 234 456' ,price: "25.00", image: "/images/bg-4.png",},
        { _id: '4', name: "my product 4", description: "product description", address: "algerie - stif", phone: '+213 770 123 234' ,price: "25.00", image: "/images/bg-8.png",},
    ]

    const currentProduct = prods?.find(item => item?._id == _id)
    return (
        <section class="relative ">
            <div class="w-full mx-auto px-4 sm:px-6 lg:px-0">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto max-md:px-2 ">
                    <div class="img">
                        <div class="img-box h-full max-lg:mx-auto ">
                            <img src={product?.imageUrl} alt="Yellow Tropical Printed Shirt image"
                                class="max-lg:mx-auto rounded-lg lg:ml-auto h-[80vh] object-cover" />
                        </div>
                    </div>
                    <div
                        class="data w-full lg:pr-8 pr-0 justify-start  flex flex-col items-start max-lg:pb-10 xl:my-2 lg:my-5 my-0">
                        <div class="data w-full max-w-xl">
                            <p class="text-lg font-medium leading-8 text-primary-1 mb-4">agri&nbsp; /&nbsp; products
                            </p>
                            <h2 class="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2 capitalize">{product?.name}</h2>
                            <div class="flex flex-col sm:flex-row sm:items-center mb-6">
                                <h6 class="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5"> {product?.price} DZD</h6>
                                <h6 class="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5"> {product?.type || "--"} </h6>
                                <div class="flex items-center gap-2">
                                    <div class="flex items-center gap-1">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_12029_1640)">
                                                <path
                                                    d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                                    fill="#FBBF24" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_12029_1640">
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_12029_1640)">
                                                <path
                                                    d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                                    fill="#FBBF24" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_12029_1640">
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_12029_1640)">
                                                <path
                                                    d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                                    fill="#FBBF24" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_12029_1640">
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_12029_1640)">
                                                <path
                                                    d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                                    fill="#FBBF24" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_12029_1640">
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_8480_66029)">
                                                <path
                                                    d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                                    fill="#F3F4F6" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_8480_66029">
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                    </div>
                                    <span class="pl-2 font-normal leading-7 text-gray-500 text-sm ">0 review</span>
                                </div>

                            </div>
                            <p class="text-gray-500 text-base font-normal mb-5">
                                {product?.description} <a href="#"
                                    class="text-primary-1">More....</a>
                            </p>
                            <ul class="grid gap-y-4 mb-8">
                                <li class="flex items-center gap-3">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="26" height="26" rx="13" fill="#52B660" />
                                        <path
                                            d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                                            stroke="white" stroke-width="1.6" stroke-linecap="round" />
                                    </svg>
                                    <span class="font-normal text-base text-gray-900 ">{product?.name}</span>
                                </li>
                                <li class="flex items-center gap-3">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="26" height="26" rx="13" fill="#52B660" />
                                        <path
                                            d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                                            stroke="white" stroke-width="1.6" stroke-linecap="round" />
                                    </svg>
                                    {/* <span class="font-normal text-base text-gray-900 ">spec 2</span> */}
                                </li>
                                <li class="flex items-center gap-3">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="26" height="26" rx="13" fill="#52B660" />
                                        <path
                                            d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                                            stroke="white" stroke-width="1.6" stroke-linecap="round" />
                                    </svg>
                                    <span class="font-normal text-base text-gray-900 ">{product?.price}
                                        40%</span>
                                </li>
                                <li class="flex items-center gap-3">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="26" height="26" rx="13" fill="#52B660" />
                                        <path
                                            d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                                            stroke="white" stroke-width="1.6" stroke-linecap="round" />
                                    </svg>
                                    {/* <span class="font-normal text-base text-gray-900 ">spec 4</span> */}
                                </li>
                            </ul>
                        </div>
                        <a href={"/dashboard/company/"+product?.idCompany} className='w-72 rounded-lg text-center mt-16 py-4 text-2xl font-bold bg-primary-1 text-white'>Order Now</a>

                    </div>
                </div>
            </div>
        </section>

    )
}

export default ProductPage