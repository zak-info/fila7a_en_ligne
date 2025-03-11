import CompPage from '@components/dashboard/Comp/CompPage'
import React from 'react'

const page = ({params}) => {

   
    return (
        <CompPage _id={params?._id} />
    )
}

export default page