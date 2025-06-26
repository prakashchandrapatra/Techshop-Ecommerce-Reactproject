import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductsDetails from '../components/ProductsDetails'
// import Searching from '../components/Searching'

import Cart from '../components/Cart'
import AllProducts from '../components/AllProducts'
import Home from '../components/Home'
import Advantages from '../components/Advantages'
// import Home from '../components/Home'

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path="/productsDetails/:id" element={<ProductsDetails />} />
      {/* <Route path="/searching" element={<Searching />} /> */}
      <Route path='/allProducts' element={<AllProducts/>} />
      
    </Routes>
  )
}

export default Routing
