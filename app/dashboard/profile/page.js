import { authOptions } from '@app/api/auth/[...nextauth]/route';
import Profile from '@components/dashboard/Profile/Profile'
import { getServerSession } from '@node_modules/next-auth';
import React from 'react'

const page = async() => {
  const session = await getServerSession(authOptions);
  return (
    <Profile user={session?.user} />
  )
}

export default page