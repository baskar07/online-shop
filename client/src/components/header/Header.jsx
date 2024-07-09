import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Bars3Icon } from "@heroicons/react/20/solid";
import {
  FaBoxOpen,
  FaSearch,
  FaShoppingCart,
  FaUserCircle,
} from "react-icons/fa";

import { MdFavorite } from "react-icons/md";
const Header = () => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white  drop-shadow-1">
      <nav className="w-full h-12  px-4 py-2 ">
        <div className="max-w-7xl mx-auto flex  items-center justify-between">
          <div className="">
            <Link className="flex items-center gap-2">
              <img src={logo} className="w-auto h-8" alt="" />
              <span className="text-2xl font-bold">
                Shopify
              </span>
            </Link>
          </div>
          <div className="relative flex-1   mx-4">
            <form action="" className="w-full">
              <input
                type="text"
                id="password"
                class="w-full pl-3 pr-10 py-1 border text-black border-stone-500 rounded-lg hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Search..."
              />
              <button class="block w-7 h-5 text-center text-xl leading-0 absolute top-2 right-2 text-stone-500 focus:outline-none hover:text-gray-900 transition-colors">
                <FaSearch />
              </button>
            </form>
          </div>

          <div className="flex gap-2 ml-4 ">
            

                <Link to="/login" className="border-[1px] rounded-md px-4 text-sm py-1 text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
                  Login
                </Link>

                

                <Link to="/login" className=" px-4 text-base py-1  hover:text-blue-600">
                  Orders
                </Link>

                <Link to="/login" className=" px-4 text-base py-1 hover:text-blue-600">
                  Favorites
                </Link>
            
               
            
                <Link className="flex items-center px-8 gap-2 hover:text-blue-600">
                  <FaShoppingCart className="text-xl" />
                  <span>0</span>
                </Link>
             
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
