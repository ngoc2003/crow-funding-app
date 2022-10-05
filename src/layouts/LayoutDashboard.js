import React from "react";
import Sidebar from "../modules/dashboard/Sidebar";
import Topbar from "../modules/dashboard/Topbar";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="p-10 bg-lite">
      <Topbar></Topbar>
      <div>
        <Sidebar></Sidebar>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
