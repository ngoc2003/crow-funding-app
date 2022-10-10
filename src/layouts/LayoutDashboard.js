import React from "react";
import Sidebar from "../modules/dashboard/Sidebar";
import Topbar from "../modules/dashboard/Topbar";
import { Outlet } from "react-router-dom";

const LayoutDashboard = () => {
  return (
    <div className="min-h-screen p-10 bg-lite flex gap-x-10 relative">
    <div className="overlay fixed inset-0 z-40 bg-black opacity-20"></div>
      <Sidebar></Sidebar>
      <div className="flex-1">
        <Topbar></Topbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default LayoutDashboard;
