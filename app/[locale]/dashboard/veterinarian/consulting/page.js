import Consultings from '@components/dashboard/Vitirians/Consultings'
import Consulting from '@models/consulting.model'
import { connect } from '@models/mongodb'
import React from 'react'

const page = async() => {

  await connect()
  const consultings = await Consulting.find().populate("userId")


  return (
    <Consultings consultings={consultings} />
  )
}

export default page