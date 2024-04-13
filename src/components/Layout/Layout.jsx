import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
