import React from "react";
import { Link, NavLink } from "react-router-dom";
import {assets} from "../assets/assets.js";

const Navbar = () => {
  return (
    // <div classname="flex items-center justify-between py-5 font-medium">
    //     <p className='text-black text-[32px] font-bebas font-bold not-italic leading-[1] py-5'>SHOP.CO</p>

    //     <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
    //     <NavLink className={"flex flex-col items-center gap-1"}>
    //         <p>Home</p>
    //         <hr classname="w-2/4 border-none h-[1.5px] bg-gray-700" />
    //     </NavLink>
    //   </ul>
    // </div>

    <div className="flex items-center gap-[40px] justify-between py-5">
      <p className="text-black text-[42px] font-bebas font-bold not-italic leading-[1] py-5">
        SHOP.CO
      </p>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700 cursor-pointer">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img src={assets.search_icon} alt="search-icon" className="w-5 cursor-pointer" />

        <div className="group relative">
            <img src={assets.profile_icon} alt="profile_icon" className="w-6 cursor-pointer" />
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 rounded-md">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded-md">
                    <p className="cursor-pointer hover:text-black">My Profile</p>
                    <p className="cursor-pointer hover:text-black">Orders</p>
                    <p className="cursor-pointer hover:text-black">Logout</p>
                </div>
            </div>
        </div>

        <Link to='/cart' className="relative">
        <img src={assets.cart_icon} alt="cart_icon" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
