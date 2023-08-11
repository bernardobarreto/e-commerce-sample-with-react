import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import ProductList from './components/productList'
import ProductDetails from './components/productDetails'
import Cart from './components/cart'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProductList/>} path="/" exact />
        <Route element={<ProductDetails/>} path="/products/:id" />
        <Route element={<Cart/>} path='/cart'/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes