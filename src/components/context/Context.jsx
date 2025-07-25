import React, {createContext, useState, useEffect} from 'react'

export const Mycontext = createContext()

const MyProvider = (props)=>{


    
    const value = {}
    return (
        <Mycontext.Provider value={value}>
            {props.children}
        </Mycontext.Provider>
    );
}

export default MyProvider;