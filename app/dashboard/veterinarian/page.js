import Vitirians from '@components/dashboard/User/Vitirians/Vitirians'
import { connect } from '@models/mongodb'
import User from '@models/user.model'
import React from 'react'

const page =async () => {
  await connect()
  const vitirians = await User.find({type:{$in:["veterinarian"]}})

  return (
    <Vitirians vitirians={vitirians} />
  )
}

export default page