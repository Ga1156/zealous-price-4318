import React from 'react'
import "./styles.css";
import {Box } from '@chakra-ui/react'
import Sidebar from '../Admin/Slidebar'
import Content from '../Admin/Context'
const AdminPage = () => {
  return (
    <>
  
    <div className="App">
      
    <Sidebar />
    <Content />
  </div>
    </>
  
  )
}

export default AdminPage
