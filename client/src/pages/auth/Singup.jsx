import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { Reset, clearErrors, signup } from '../../redux/features/auth/authSlice';
import { useSnackbar } from 'notistack';



const Singup = () => {

  const dispatch = useDispatch();
  const { isSuccess, user, message,isError, isLoading } = useSelector((state)=> state.auth);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

 
  const handleSubmit = (e) =>{
    e.preventDefault();
    const userData = {
      name,email,password
    }
    dispatch(signup(userData));
   
  }



  useEffect(()=>{
    if(isSuccess){
      enqueueSnackbar(message, { autoHideDuration: 2000, variant:"success"});
      navigate(`/verify-otp?email=${encodeURIComponent(email)}`);
    }

   if(isError){
    enqueueSnackbar(message, { autoHideDuration:3000, variant: "error"});
    dispatch(Reset());
   }

  return ()=>{
    dispatch(clearErrors());
  }

  },[isError,isSuccess,dispatch])
 

  return (
    <div className="flex min-h-full flex-1 mt-10 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="mx-auto h-10 w-auto"
        src={logo}
        alt="Your Company"
      />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign up to create your account
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
   
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Name
          </label>
          <div className="mt-2">
            <input
            value={name}
            onChange={(e)=>setName(e.target.value)}
              id="name"
              name="name"
              type="text"
              autoComplete="off"
              required
              className="px-4  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email 
          </label>
          <div className="mt-2">
            <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
              id="email"
              name="email"
              type="email"
              autoComplete="off"
              required
              className="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
           
          </div>
          <div className="mt-2">
            <input
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
          {isLoading ? 'loading' : "Send OTP"}
           
          </button>
        </div>
      
      </form>
      
        

      <p className="mt-10 text-center text-sm text-gray-500">
        Already account?{' '}
        <Link to='/login' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
         signin
        </Link>
      </p>
    </div>
  </div>
  )
}

export default Singup