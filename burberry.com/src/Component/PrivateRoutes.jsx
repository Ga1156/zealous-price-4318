import React from 'react'
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Authcontext } from '../Context/AuthContext';
const PrivateRoutes = ({children}) => {

  const {isAuth}=useContext(Authcontext)

  if(!isAuth){
    return <Navigate to="/register"/>
  }
  return children
  
}

export default PrivateRoutes
