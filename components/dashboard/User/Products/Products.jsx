import React from 'react'
import ProductsCard from './ProductsCard'
import JustText from '@components/just-text/JustText'

const Products = ({ products }) => {

    const prods = [
        { _id: '1', name: "my product 1", description: "product description", address: "algerie - blida", phone: '+213 540 123 234', price: "25.00", image: "/images/bg-2.png", },
        { _id: '2', name: "my product 2", description: "product description", address: "algerie - bouira", phone: '+213 550 345 345', price: "25.00", image: "/images/bg-3.png", },
        { _id: '3', name: "my product 3", description: "product description", address: "algerie - anaba", phone: '+213 555 234 456', price: "25.00", image: "/images/bg-4.png", },
        { _id: '4', name: "my product 4", description: "product description", address: "algerie - stif", phone: '+213 770 123 234', price: "25.00", image: "/images/bg-8.png", },
    ]

    return (
        <div className='w-full '>
            <h1 className=' font-bold text-xl'><JustText text={"products_page"} /></h1>

            <div className='w-full mt-16 flex justify-start flex-wrap gap-4'>
                {
                    [...products]?.map((prod, index) => (
                        <ProductsCard key={index} product={prod} />
                    ))
                }
                {/* <ProductsCard  product={{_id:"2",name:'my product 2',description:"product description",price:"26.00",image:"/images/bg-3.png",}} />
                <ProductsCard  product={{_id:"3",name:'my product 3',description:"product description",price:"22.00",image:"/images/bg-4.png",}} />
                <ProductsCard  product={{_id:"4",name:'my product 4',description:"product description",price:"32.00",image:"/images/bg-8.png",}} /> */}
            </div>

        </div>
    )
}

export default Products