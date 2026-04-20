import React, { Children, useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

const ProtectedLayout = ({ userRef }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!Object.keys(userRef.current).length) {
      navigate("/login");
    }
  }, [navigate]);
  return <>{Object.keys(userRef.current).length ? <Outlet /> : null}</>;
};

export default ProtectedLayout;
