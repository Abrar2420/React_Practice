import React, { Children } from "react";
import { Outlet } from "react-router";

const ProtectedLayout = () => {
  const user = {};
  if (!Object.keys(user).length) {
    return <h1>Cant go there</h1>;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default ProtectedLayout;
