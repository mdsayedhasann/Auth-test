import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const loggedOut = () => {
    logOut()
      .then(() => {
        console.log("Log Out Success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const links = (
    <>
      <li>
        <NavLink to="/"> Home </NavLink>
      </li>

      <li>
        <NavLink to="/register"> Register </NavLink>
      </li>

      {user ? (
        ""
      ) : (
        <>
          <li>
            <NavLink to="/login"> Login </NavLink>
          </li>
        </>
      )}

      {user && (
        <li>
          <NavLink to="/orders"> Orders </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <p className="btn btn-ghost normal-case text-xl">
          <NavLink to="/"> Auth Test </NavLink>
        </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <p>
          {user ? (
            <>
              <div className="flex gap-4 items-center">
                <p> {user.email} </p>
                <a onClick={loggedOut} className="btn">
                  Logout
                </a>
              </div>
            </>
          ) : (
            <NavLink to="/login" className="btn">
              Login
            </NavLink>
          )}
        </p>
      </div>
    </div>
  );
};

export default Header;
