import React from "react";
import logo from '../assets/logo.jpg'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.webp'
import { NavLink, useNavigate } from "react-router";
const Navbar = () => {
let navigate =useNavigate();
    let handleLogin = ()=>{
        navigate('/login')
        
    }
    let handleRegister = () =>{
        navigate('register')
    }

  return (
    <div className="navbar bg-[#fcfbe8] shadow-sm px-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink to='/'>Home</NavLink>
           
              <NavLink to='/roommate'>Find Roommate</NavLink>
              
           
          
              <NavLink to='/browseListing'>Browse Listing</NavLink>
          
            
                <NavLink to='/myListing'>My Listing</NavLink>
           
          </ul>
        </div>
        <div>
            <img src={logo2} alt="" className="w-24 "/>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-4 items-center">
          <NavLink to='/'>Home</NavLink>
           
              <NavLink to='/roommate'>Find Roommate</NavLink>
              
           
          
              <NavLink to='/browseListing'>Browse Listing</NavLink>
          
            
                <NavLink to='/myListing'>My Listing</NavLink>
           
        </ul>
      </div>
      <div className="navbar-end flex gap-4">
        <button onClick={handleLogin} className="btn btn-outline text-[#ff6347] hover:bg-[#ff6347] hover:text-white ">Login</button>
        <button onClick={handleRegister} className="btn btn-outline text-[#ff6347] hover:bg-[#ff6347] hover:text-white">SignUP</button>
      </div>
    </div>
  );
};

export default Navbar;
