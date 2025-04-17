import Image from '@node_modules/next/image'
import React from 'react'

const ProductsCard = ({product}) => {
    return (
        <div class=" w-72 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <Image class="h-48 w-full object-cover object-center" src={product?.imageUrl}  width={1980} height={1080} alt="Product Image" />
            <div class="p-4">
                <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">{product?.name}</h2>
                <p class="mb-2 text-base dark:text-gray-300 text-gray-700">{product?.description}</p>
                <div class="flex items-center">
                    <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">{product?.price} DZD</p>
                    {/* <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">25.00 DZD</p> */}
                    <a href={'/dashboard/products/'+product?._id} class="ml-auto text-base font-medium text-green-500">visit</a>
                </div>
            </div>
        </div>
    )
}

export default ProductsCard