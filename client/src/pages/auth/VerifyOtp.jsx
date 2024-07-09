import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {  Reset, resendOTP, verifyOTP,  } from '../../redux/features/auth/authSlice';
import { useSnackbar } from 'notistack';


const VerifyOtp = () => {


  const [otp,setOtp] = useState('');
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { message, isError, isSuccess, user, expiredAt } = useSelector((state)=> state.auth);

  const email = new URLSearchParams(location.search).get('email');

  const [expire,setExpire] = useState(expiredAt);
  const [remainingTime,setRemainingTime] = useState(true);
  

  useEffect(()=>{
    if(expiredAt){
      const interval = setInterval(()=>{
        const now = new Date();
        const expirateionTime = new Date(expiredAt);
        const timeLeft = expirateionTime - now;
        if(timeLeft <= 0){
          clearInterval(interval);
          setRemainingTime(false)
        }else{
          const minutes = Math.floor(timeLeft / 1000 / 60);
          const seconds = Math.floor((timeLeft / 1000) % 60);
          setRemainingTime(`${minutes}:${seconds < 10 ? '0' : '' }${seconds}`);
        }

      }, 1000)
      return ()=> clearInterval(interval);
    }
  },[expiredAt,setRemainingTime])


  useEffect(()=>{
    if(isError){
      enqueueSnackbar(message, {variant:"error", autoHideDuration: 3000});
    }
    if(isSuccess){
      enqueueSnackbar(message, {autoHideDuration: 3000, variant: 'success'});
      navigate('/login')
    }
  },[isError, isSuccess, enqueueSnackbar])
  

  const handleSubmit = (e) =>{
    e.preventDefault();
    const userOtp = {
      email,
      otp
    }
    dispatch(verifyOTP(userOtp));
  }

  const resendOtp = (e) =>{
    e.preventDefault();
    dispatch(resendOTP(email));
  }

  


  return (
    <div className="flex min-h-full flex-1 mt-10 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="mx-auto h-10 w-auto"
        src={logo}
        alt="Your Company"
      />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        OTP Verification
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm relative">
   
      <form onSubmit={handleSubmit}   className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Enter OTP
          </label>
          
          <div className="mt-2">
            <input
              id="otp"
              value={otp}
              onChange={(e)=>setOtp(e.target.value)}
              name="otp"
              type="text"
              autoComplete='off'
              required
              className="px-4  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <button 
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
           Verify OTP
           
          </button>
        </div>
       
      </form>

      <div className="flex  my-10 mx-4 justify-between items-center">
      {remainingTime && <span className='text-red-500'>OTP Expires in:  {remainingTime}</span> }
      {!remainingTime && <button type='submit' onClick={resendOtp} className='right-0 absolute mr-2 text-indigo-600'>Resend OTP</button> }
      
      </div>
      
      
    </div>
  </div>
  )
}

export default VerifyOtp