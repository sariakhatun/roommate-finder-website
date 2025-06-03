import React, { use } from "react";
import logo2 from "../assets/logo2.webp";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "./AuthContext";
import { toast, ToastContainer } from "react-toastify";
const Navbar = () => {
  let navigate = useNavigate();
  let { user, logOut } = use(AuthContext);

  let handleLogin = () => {
    navigate("/login");
  };
  let handleRegister = () => {
    navigate("/register");
  };

  //console.log(user)
  let handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully!");
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`);
      });
  };

  return (
    <div className="navbar  shadow-sm pl-0 lg:pl-6 pr-9 lg:pr-6 w-11/12 mx-auto">
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
            <NavLink to="/">Home</NavLink>

            <NavLink to="/roommate">Find Roommate</NavLink>

            <NavLink to="/browseListing">Browse Listing</NavLink>

            <NavLink to="/myListing">My Listing</NavLink>
          </ul>
        </div>
        <div>
          <img src={logo2} alt="" className="w-16 lg:w-24 " />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-4 items-center">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/roommate">Find Roommate</NavLink>

          <NavLink to="/browseListing">Browse Listing</NavLink>

          <NavLink to="/myListing">My Listing</NavLink>
        </ul>
      </div>
      <div className="navbar-end flex gap-4">
        {user ? (
          <div className="flex gap-1  lg:gap-3 items-center">
            <label className="flex cursor-pointer  lg:gap-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                type="checkbox"
                value="dark"
                className="toggle theme-controller w-9 "
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
            <img
              src={`${user && user.photoURL}`}
              alt=""
              className="w-8 h-8 lg:w-12 lg:h-12 rounded-full "
              title={user ? user.displayName : ""}
            />
            <button
              onClick={handleLogOut}
              className="btn btn-xs lg:btn-sm btn-outline text-[#ff6347] hover:bg-[#ff6347] hover:text-white"
            >
              LogOut
            </button>
          </div>
        ) : (
          <div className="navbar-end flex gap-2 lg:gap-4">
            <label className="flex cursor-pointer gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                type="checkbox"
                value="dark"
                className="toggle theme-controller"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
            <button
              onClick={handleLogin}
              className="btn btn-xs lg:btn-sm btn-outline text-[#ff6347] hover:bg-[#ff6347] hover:text-white "
            >
              Login
            </button>
            <button
              onClick={handleRegister}
              className="btn btn-xs lg:btn-sm  btn-outline text-[#ff6347] hover:bg-[#ff6347] hover:text-white"
            >
              SignUP
            </button>
          </div>
        )}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Navbar;
