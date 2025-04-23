import { authOptions } from '@app/api/auth/[...nextauth]/route';
import Consultings from '@components/dashboard/User/Consulting/Consulting';
import Consulting from '@models/consulting.model';
import { connect } from '@models/mongodb';

import { getServerSession } from '@node_modules/next-auth';
import React from 'react'

const page =async () => {
  const session = await getServerSession(authOptions);
  await connect()
  const consultings = await Consulting.find({userId:session?.user?._id})
  return (
    <Consultings user={session?.user} consultings={consultings} />
  )
}

export default page