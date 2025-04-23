import ProductPage from '@components/dashboard/User/Products/ProductPage'
import { connect } from '@models/mongodb'
import Product from '@models/product.model'
import React from 'react'

const page = async ({params}) => {
  await connect()
  const product = await Product.findOne({_id:params?._id})

  return (
    <ProductPage _id={params?._id} product={product} />
  )
}

export default page