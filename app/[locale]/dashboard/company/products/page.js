import { authOptions } from '@app/api/auth/[...nextauth]/route';
import Products from '@components/dashboard/Company/Products/Products'
import { connect } from '@models/mongodb';
import Product from '@models/product.model';
import { getServerSession } from '@node_modules/next-auth';
import React from 'react'

const page = async() => {
  const session = await getServerSession(authOptions);
  await connect()
  const products = await Product.find({idCompany:session?.user?._id})
  console.log("session  :",session);
  console.log("products  :",products);

  return (
    <Products products={products} idCompany={session?.user?._id} />
  )
}

export default page