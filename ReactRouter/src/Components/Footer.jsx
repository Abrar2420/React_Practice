import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-slate-900 text-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-around py-8">
            <div className="flex flex-col justify-start gap-3">
              <h1 className="font-bold">Copyright @Paxels.com</h1>
              <p className="w-1/2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, saepe, quam quos non necessitatibus veniam odio amet
                facere soluta totam eaque commodi?
              </p>
            </div>
            <div>
              <ul>
                <li className="flex flex-col justify-center gap-6">
                  <NavLink
                    to="/"
                    className={({ isActive }) => {
                      return `hover:text-orange-700 duration-200 ${isActive ? "text-orange-700" : "text-white"}`;
                    }}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/about"
                    className={({ isActive }) => {
                      return `hover:text-orange-700 duration-200 ${isActive ? "text-orange-700" : "text-white"}`;
                    }}
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="contact"
                    className={({ isActive }) => {
                      return `hover:text-orange-700 duration-200 ${isActive ? "text-orange-700" : "text-white"}`;
                    }}
                  >
                    Contact us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
