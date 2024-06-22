import React from "react";

import login from "../../assets/login.svg";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div class="bg-white rounded-xl shadow-cardbox relative overflow-hidden w-[900px] max-w-full min-h-[580px]">
        <div className="absolute top-0 h-full transition-all right-0 w-[50%] z-1 bg-white px-[50px]  ">
          <div className="my-[5rem] mx-auto ">
            <h2 className="font-medium text-[30px] mb-[20px] text-center text-orange-400">Sign in</h2>
            <form action="" className="flex flex-col">
              <input type="text" placeholder="Enter your email"  className="bg-[#eee] border-none p-[15px] my-[8px] w-full outline-none text-[15px] " />
              <input type="text" placeholder="Enter your password"  className="bg-[#eee] border-none p-[15px] my-[8px] w-full outline-none text-[15px] " />
              <Link className="mt-4 mb-[10px] px-[10px] text-[1rem] text-[rgb(30,68,194)] text-end">Forgot password</Link>
              <button className=" rounded-[20px] border-[1px] border-[#6c63ff] bg-[#6c63ff] text-white text-[14px] font-medium px-[45px] py-[12px] uppercase mt-4">Sign in</button>
            </form>
            <p className="ml-5 mt-2">
              create new account? <Link to='/signup' className="ml-2.5 text-[rgb(30,68,194)]">Register</Link>
            </p>

            <h5 className="text-center text-[18px] font-normal text-[rgb(148,141,141)] mt-4">or</h5>

            <button className="rounded-[20px] border-[1px] border-[#cfcfce] bg-white text-rose-500 text-sm font-medium py-2 px-11 mt-4 w-full flex items-center gap-3"><FaGoogle className="text-[20px] ml-[25px]" />Continue with Google</button>
          </div>
        </div>

        <div className="absolute top-0 left-[50%] w-[50%] h-full">
          <div class="bg-[#f5b66f] bg-no-repeat bg-cover text-white relative left-[-100%] h-full w-[200%]">
            <div class="absolute flex items-center justify-center px-[40px] text-center top-0 h-full  left-0 w-[50%]">
              <img src={login} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
