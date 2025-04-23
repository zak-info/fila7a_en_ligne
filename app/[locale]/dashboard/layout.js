
import React, { useContext } from 'react'
import GlobalLayout2 from '@components/dashboard/GlobalLayout2';

const layout = async ({ children }) => {
    return (
        <GlobalLayout2>
            {children}
        </GlobalLayout2>
    )
}

export default layout