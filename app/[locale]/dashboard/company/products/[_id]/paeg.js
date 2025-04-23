import ProductPage from '@components/dashboard/User/Products/ProductPage'
import { connect } from '@models/mongodb'
import Product from '@models/product.model'
import React from 'react'

const paeg = async({params}) => {
    await connect()
    const product = await Product.findOne({_id:params?._id})
  return (
    <ProductPage product={product} />
  )
}

export default paeg