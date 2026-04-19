import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <div className="h-100 flex flex-col gap-6 bg-green-500 text-black w-full font-bold items-center justify-center">
            <h1>Click Here to Mail us</h1>
            <h1>OUR Phone no. 01XXXXXXXXX</h1>
            <h1>
              OUR Address dummy road, dummy street, dummy house, Dhaka,
              Bangladesh
            </h1>
            <h1>
              OUR Phone no. dummy road, dummy street, dummy house, Dhaka,
              Bangladesh
            </h1>
            <Link to="/contact/faq">Faq</Link>
            <Link to="/contact/newsletter">News letter</Link>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
