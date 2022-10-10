import React from "react";
import Sidebar from "../modules/dashboard/Sidebar";
import Topbar from "../modules/dashboard/Topbar";
import { Outlet } from "react-router-dom";

const LayoutDashboard = () => {
  return (
    <div className="min-h-screen p-10 bg-lite flex gap-x-10 relative">
      <Sidebar></Sidebar>
      <div className="flex-1">
        <Topbar></Topbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default LayoutDashboard;
