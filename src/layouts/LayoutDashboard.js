import React from "react";
import Sidebar from "../modules/dashboard/Sidebar";
import Topbar from "../modules/dashboard/Topbar";
import { Outlet } from "react-router-dom";
import Overlay from "../components/common/Overlay";
import ReactModal from "react-modal";
import IconClose from "../components/icons/IconClose";
import Input from "../components/input/Input";
import Button from "../components/common/Button";
import CampaignPerk from '../modules/campaign/parts/CampaignPerk'
const LayoutDashboard = () => {
  return (
    <div className="flex min-h-screen p-10 bg-lite dark:bg-darkbg gap-x-10">
      
      <Sidebar></Sidebar>
      <div className="flex-1">
        <Topbar></Topbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default LayoutDashboard;
