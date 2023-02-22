import React from 'react'
import {Routes ,Route} from 'react-router-dom'
import Bag from '../Pages/Bag'
import Gifts from '../Pages/Gifts'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Mens from '../Pages/Mens'
import NewIn from '../Pages/NewIn'
import Outwear from '../Pages/Outwear'
import Register from '../Pages/Register'
import Stories from '../Pages/Stories'
import Values from '../Pages/Values'
import Womens from '../Pages/Womens'
import Children from '../Pages/Children'
import Cart from '../Pages/Cart'
const AllRoutes = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/childrens" element={<Children/>}></Route>
        <Route path="/mens" element={<Mens/>}></Route>
        <Route path="/womens" element={<Womens/>}></Route>
        <Route path="/outwear" element={<Outwear/>}></Route>
        <Route path="/bag" element={<Bag/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/values" element={<Values/>}></Route>
        <Route path="/newin" element={<NewIn/>}></Route>
        <Route path="/stories" element={<Stories/>}></Route>
        <Route path="/gifts" element={<Gifts/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
   
  )
}

export default AllRoutes
