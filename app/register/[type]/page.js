import Register from '@components/Login/Register'
import React from 'react'

const page = ({params}) => {
    return (
        <Register type={params?.type} />
    )
}

export default page