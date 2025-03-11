"use client"

import { useContext, useEffect } from 'react'
import { GlobalContext } from '@context/GlobalContext'
import { useSession } from 'next-auth/react'


const GlobalLayout = ({children}) => {
    const { data: session, update } = useSession()
    const { user ,setUser } = useContext(GlobalContext);
    useEffect(() => {
        setUser(session?.user);
      }, [session])
      
  return (
    <>
        {children}
    </>
  )
}

export default GlobalLayout