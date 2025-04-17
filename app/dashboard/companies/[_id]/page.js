import CompPage from '@components/dashboard/User/Comp/CompPage'
import React from 'react'

const page = ({params}) => {

   
    return (
        <CompPage _id={params?._id} />
    )
}

export default page