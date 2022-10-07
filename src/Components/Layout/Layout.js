import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { login } from "../../Features/Auth/AuthSlice";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

function Layout() {
  const loggedIn = useSelector((state) => state.Auth.user);
  const dispatch = useDispatch();

  return (
    <div className="">
      <nav className="flex items-center sticky bg-black/50 text-white p-4 justify-between">
        <div className="text-2xl font-bold">
          <Link to="/">
            Loop<span className="text-purple">Kitchen</span>
          </Link>
        </div>
        <ul className="">
          <li className=" hover:text-purple text-lg">
            {!loggedIn ? (
              <Link to="/login">Login</Link>
            ) : (
              <button
                onClick={() => {
                  Cookies.remove("user");
                  window.location.reload();
                }}
              >
                Logout
              </button>
            )}
          </li>
        </ul>
      </nav>
      <div className="flex flex-row">
        <div className="basis-1/6  bg-black/20 shadow-2xl ">
          <ul className="h-full min-h-screen">
            <Link to="/">
              <li className=" text-lg border-b p-4 text-white cursor-pointer">
                Home
              </li>
            </Link>
            <Link to="/bookmarks">
              <li className=" text-lg border-b p-4 text-white cursor-pointer">
                Bookmarks
              </li>
            </Link>
          </ul>
        </div>
        <div className=" w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
