import React from 'react';
import { Navigate } from 'react-router-dom';


const ProtectedRoutes = ({ children, isAdmin }) => {

    const loading = false;
    const isAuth = true;
    const role = "admin";

  return (

    <React.Fragment>
        { loading === false && (
            isAuth === false ? <Navigate to='/login' /> : isAdmin ?  role !== "admin" ? <Navigate to='/login' /> : children : children
        )}

    </React.Fragment>

  )
}

export default ProtectedRoutes