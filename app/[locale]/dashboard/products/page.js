import Products from '@components/dashboard/User/Products/Products'
import { connect } from '@models/mongodb'
import Product from '@models/product.model'
import React from 'react'

const page = async() => {
  await connect()
  const products = await Product.find();
  return (
    <Products products={products} />
  )
}

export default page