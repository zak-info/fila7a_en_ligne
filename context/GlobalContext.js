"use client"
import React, { createContext, useState } from 'react';

// Create a context with an initial value
export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [user,setUser] = useState({});

    const [globalOrders, setGlobalOrders] = useState([]);
    const [globalEmployees, setGlobalEmployees] = useState([]);
    const [routesTransition, setRoutesTransition] = useState(false);
    const [sideBar, setSideBar] = useState(false);

    return (
        <GlobalContext.Provider
            value={{
                user,
                setUser,
                globalOrders,
                setGlobalOrders,
                globalEmployees,
                setGlobalEmployees,
                routesTransition,
                setRoutesTransition,
                sideBar,setSideBar,
            }}
        >

            {children}

        </GlobalContext.Provider>
    );
};
