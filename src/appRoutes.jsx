import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import ProductList from './components/productList'
import ProductDetails from './components/productDetails'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProductList/>} path="/" exact />
        <Route element={<ProductDetails/>} path="/products/:id" />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes