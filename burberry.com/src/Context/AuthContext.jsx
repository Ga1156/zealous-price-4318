import React from 'react'
import {useState} from "react"
import { createContext } from 'react'

export const Authcontext = createContext()


export default function AuthContextProvider({children}) {

  const[state,setstate]=useState({
    isAuth:true
})

  const login1=()=>{
   setstate({...state,isAuth:true})
}
  const logout1=()=>{
    setstate({...state,isAuth:false})
  }

  return(
    <Authcontext.Provider  value={{authState:state,login1,logout1}}>
    {children}
  </Authcontext.Provider>
  )

    
   
  
}
