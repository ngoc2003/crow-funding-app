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
      <ReactModal
        isOpen = {false}
        overlayClassName={
          "modal-overlay fixed inset-0 z-50 bg-black bg-opacity-20 flex items-center justify-center "
        }
        className="modal-content w-full max-w-[521px] bg-white rounded-2xl outline-none p-10 relative max-h-[90vh] overflow-y-scroll scroll-hidden"
      >
        <button className="float-right w-6 h-6 text-text1">
          <IconClose></IconClose>
        </button>
        <h2 className="clear-both mb-10 text-2xl font-bold text-center ">
          Back this project
        </h2>
        <p className="mb-3 text-sm">Enter the contribute amount</p>
        <Input placeholder="$10"></Input>
        <p className='my-3 text-sm text-text3'>Contribution are not asscociated with perks</p>
        <Button primary>Continue</Button>
        <div className="mt-14"></div>
        <>
          <CampaignPerk button></CampaignPerk>
        </>

      </ReactModal>
      <Sidebar></Sidebar>
      <div className="flex-1">
        <Topbar></Topbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default LayoutDashboard;
