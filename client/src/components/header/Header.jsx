import React from "react";
import { FaOpencart, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import avatar from "../../assets/placeholder.jpg";
import { FaUserCircle } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";


import { Transition, Dialog } from "@headlessui/react";

const Header = () => {

  return (
    
    <header className="top-0 left-0 w-full sticky transition bg-[#1f1d1b] text-white z-99">
        <nav className="h-14 max-w-screen-2xl mx-auto flex justify-between items-center">
            <Link className="flex items-center px-4 gap-4 mr-4" >
                <FaOpencart className="text-4xl text-[#f1e44b]" />
                <span className="text-2xl">TrolleyMart</span>
            </Link>

            <div className="flex flex-1 ">
                <form action="" className="w-full flex justify-between">
                    <input type="text" className="w-full border-none outline-none px-6 text-black py-2"/>
                    <button className="w-13 my-2 bg-amber-500 flex justify-center items-center text-xl"><FaSearch /></button>
                </form>
            </div>

            <div className="flex">
                <div className="flex items-center px-8 gap-2">
                    <FaUserCircle className="text-xl" />
                    <span>Login</span>
                </div>
                <div className="flex items-center px-8 gap-2">
                    <FaBoxOpen  className="text-xl" />
                    <span>Orders</span>
                </div>
                <div className="flex items-center px-8 gap-2">
                    <MdFavorite className="text-xl" />
                    <span>Favorites</span>
                </div>
                <div className="flex items-center px-8 gap-2">
                    <FaShoppingCart className="text-xl" />
                    <span>0</span>
                </div>
            </div>
        </nav>
    </header>
    
  );
};

export default Header;
