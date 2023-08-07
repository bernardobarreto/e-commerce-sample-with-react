import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import ProductList from './components/productList'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProductList/>} path="/" exact />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes