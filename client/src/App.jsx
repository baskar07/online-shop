import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthLayout from './components/layout/AuthLayout';
import Login from './pages/user/Login';
import AppLayout from './components/layout/AppLayout';
import Home from './pages/home/Home';
import Signup from './pages/user/Register';
import Products from './pages/products/Products';
import ProtectedRoutes from './routes/ProtectedRoutes';
import Dashboard from './pages/admin/Dashboard';
import Main from './pages/admin/pages/Main';
import Calendar from './pages/admin/pages/Calendar';


import AddProduct from './pages/admin/pages/Product/AddProduct';




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
        <Route path='/admin/dashboard' element={
          <ProtectedRoutes isAdmin={true} >
            <Dashboard>
              <Main />
            </Dashboard>
          </ProtectedRoutes>
          }>
        </Route>
        <Route path='/admin/calendar' element={
          <ProtectedRoutes isAdmin={true} >
            <Dashboard>
              <Calendar />
            </Dashboard>
          </ProtectedRoutes>
          }>
        </Route>
        <Route path='/admin/product/add-product' element={
          <ProtectedRoutes isAdmin={true} >
            <Dashboard>
              <AddProduct />
            </Dashboard>
          </ProtectedRoutes>
          }>
        </Route>
        <Route path='/admin/forms/form-layout' element={
          <ProtectedRoutes isAdmin={true} >
            <Dashboard>
              
            </Dashboard>
          </ProtectedRoutes>
          }>
        </Route>



    </Routes>
  )
}

export default App