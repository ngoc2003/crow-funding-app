import React from "react";
import Sidebar from "../modules/dashboard/Sidebar";
import Topbar from "../modules/dashboard/Topbar";
import { Outlet } from "react-router-dom";

const LayoutDashboard = () => {
  return (
    <div className="min-h-screen p-10 bg-lite">
      <Topbar></Topbar>
      <div className="flex gap-x-10">
        <Sidebar></Sidebar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default LayoutDashboard;
