import Profile from '@components/dashboard/Profile/Profile'
import PublicProfile from '@components/dashboard/Profile/PublicProfile'
import Consulting from '@models/consulting.model'
import { connect } from '@models/mongodb'
import Product from '@models/product.model'
import User from '@models/user.model'
import React from 'react'

const page = async({params}) => {
    await connect()
    const user = await User.findOne({_id:params?._id})
    const products = await Product.find({idCompany:user?._id});
    const consultings = await Consulting?.find({userId:user?._id})
  return (
    <PublicProfile user={user} products={products} consultings={consultings} />
  )
}

export default page