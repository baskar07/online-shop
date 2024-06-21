import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthLayout from './components/layout/AuthLayout';
import Login from './pages/user/Login/Login';
import AppLayout from './components/layout/AppLayout';
import Home from './pages/home/Home';
import Signup from './pages/user/Register/Register';
import Products from './pages/products/Products';




const App = () => {
    

  return (
    <Routes>
        <Route path='/' element={<AuthLayout />} >
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
        </Route>
        <Route path='/' element={<AppLayout />} >
            <Route index element={<Home />} />
            <Route path='/products' element={<Products />} />
        </Route>
    </Routes>
  )
}

export default App