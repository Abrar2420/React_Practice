import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

function AuthLayout({ userRef }) {
  const navigate = useNavigate();

  const isLoggedin = Object.keys(userRef.current).length > 0;

  useEffect(() => {
    if (isLoggedin) {
      console.log("ok");
      navigate("/");
    }
  }, [navigate, isLoggedin]);
  return <>{isLoggedin ? null : <Outlet />}</>;
}

export default AuthLayout;
