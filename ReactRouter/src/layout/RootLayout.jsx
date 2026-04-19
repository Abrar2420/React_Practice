import React from "react";
import { Link, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <Link to="faq">FAQs</Link>
      <Link to="newsletter">News Letter</Link>
      <Outlet />
    </>
  );
}

export default RootLayout;
