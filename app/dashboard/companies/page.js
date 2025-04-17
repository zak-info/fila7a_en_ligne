import Companies from '@components/dashboard/User/Comp/Companies'
import { connect } from '@models/mongodb'
import User from '@models/user.model'
import React from 'react'

const page = async () => {
  await connect()
  const companies = await User.find({type:{$in:["company"]}})

  return (
    <Companies companies={companies} />
  )
}

export default page