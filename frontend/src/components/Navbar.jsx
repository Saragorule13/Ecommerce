import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {assets} from "../assets/assets.js";

const Navbar = () => {

  const [visible, setVisible] = useState(false);
   


  return (
    <div className="flex items-center gap-[40px] justify-between py-2 border-red-600 bg-white">
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
        <img className="w-6" src={assets.cart_icon} alt="cart_icon" />
        <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">10</p>
        </Link>
        <img onClick={()=>setVisible(true)} className="w-5 cursor-pointer sm:hidden" src={assets.menu_icon} alt="menu_icon" />
      </div>

      <div className={`fixed top-0 left-0 w-full h-full bg-white z-50 ${visible ? 'block' : 'hidden'}`}>
        <div className="flex flex-col text-gray-600">
          <div className="flex items-center gap-3 p-3">
            <img onClick={()=>setVisible(false)} className="rotate-180 h-4" src={assets.dropdown_icon} alt="dropdown_icon" />
            <p>Back</p>
          </div>
          <hr />
          
          <NavLink className="p-3" onClick={()=>setVisible(false)} to={'/'}>HOME</NavLink>
          <hr />
          <NavLink className={'p-3'} onClick={()=>setVisible(false)} to={'/about'}>ABOUT</NavLink>
          <hr />
          <NavLink className={'p-3'} onClick={()=>setVisible(false)} to={'/collection'}>COLLECTION</NavLink>
          <hr />
          <NavLink className={'p-3'} onClick={()=>setVisible(false)} to={'/contact'}>CONTACT</NavLink>
          <hr />

        </div>
      </div>

    </div>
  );
};

export default Navbar;
