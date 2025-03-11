import ProductPage from '@components/dashboard/Products/ProductPage'
import React from 'react'

const page = ({params}) => {
  return (
    <ProductPage _id={params?._id} />
  )
}

export default page