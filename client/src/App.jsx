import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthLayout from './components/layout/AuthLayout';
import AppLayout from './components/layout/AppLayout';
import Singup from './pages/auth/Singup';
import Home from './pages/home/Home';
import Login from './pages/auth/Login';
import VerifyOtp from './pages/auth/VerifyOtp';
import Products from './pages/product/Products';
import ProductDetails from './pages/productDetails/ProductDetails';




const App = () => {
    

  return (
    <Routes>
        <Route path='/' element={<AuthLayout />} >
            <Route path='signup' element={<Singup />} />
            <Route path='login' element={<Login />} />
            <Route path='verify-otp' element={<VerifyOtp />} />
        </Route>
        <Route path='/' element={<AppLayout />} >
            <Route index element={<Home />} />
            <Route path='products' element={<Products />} />
            <Route path='products/:id' element={<ProductDetails />} />
            
        </Route>
        


    </Routes>
  )
}

export default App