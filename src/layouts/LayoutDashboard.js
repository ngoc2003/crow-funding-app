import React from "react";
import Sidebar from "../modules/dashboard/Sidebar";
import Topbar from "../modules/dashboard/Topbar";
import { Outlet } from "react-router-dom";
import Overlay from "../components/common/Overlay";

const LayoutDashboard = () => {
  return (
    <div className="relative flex min-h-screen p-10 bg-lite gap-x-10">
    {/* <div className="fixed inset-0 z-40 bg-black overlay opacity-20"></div> */}
    <Overlay></Overlay>
      <Sidebar></Sidebar>
      <div className="flex-1">
        <Topbar></Topbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default LayoutDashboard;
