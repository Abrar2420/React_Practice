import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="bg-lime-200">
        <nav className="container mx-auto">
          <div className="flex items-center justify-between py-4 text-[24px]">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold">Paxels</h1>
            </div>
            <div>
              <ul>
                <li className="flex items-center gap-8">
                  <NavLink
                    to="/"
                    className={({ isActive }) => {
                      return `hover:text-orange-700 duration-200 ${isActive ? "text-orange-700" : "text-black"}`;
                    }}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/about"
                    className={({ isActive }) => {
                      return `hover:text-orange-700 duration-200 ${isActive ? "text-orange-700" : "text-black"}`;
                    }}
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) => {
                      return `hover:text-orange-700 duration-200 ${isActive ? "text-orange-700" : "text-black"}`;
                    }}
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-6">
              <button className="py-2 px-6 border-2 rounded cursor-pointer hover:bg-black hover:text-white duration-200 hover:border-2">
                Login
              </button>
              <button className="py-2 px-6 border-2 rounded cursor-pointer hover:bg-black hover:text-white duration-200 hover:border-2">
                Register
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
