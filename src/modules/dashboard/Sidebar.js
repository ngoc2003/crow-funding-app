import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Gap from "../../components/common/Gap";
import IconCampaign from "../../components/icons/IconCampaign";
import IconDarkMode from "../../components/icons/IconDarkMode";
import IconDashBoard from "../../components/icons/IconDashBoard";
import IconLightMode from "../../components/icons/IconLightMode";
import IconLogout from "../../components/icons/IconLogout";
import IconPayment from "../../components/icons/IconPayment";
import IconProfile from "../../components/icons/IconProfile";
import IconWithdraw from "../../components/icons/IconWithdraw";
import useDarkMode from "../../hooks/useDarkMode";
import logo from "../../images/Logo.png";
import ReactModal from "react-modal";
import Button from "../../components/common/Button";
import IconClose from "../../components/icons/IconClose";

import { logOut } from "../../utils/auth";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [darkMode, setDarkMode] = useDarkMode();
  const [openModal, setOpenModal] = useState(false);
  function handleLogOut() {
    dispatch(logOut());
  }
  const sidebarLinks = [
    {
      icon: <IconDashBoard />,
      name: "Dashboard",
      url: "/",
    },
    {
      icon: <IconCampaign />,
      name: "Campaign",
      url: "/campaign",
    },
    {
      icon: <IconPayment />,
      name: "Payment",
      url: "/payment",
    },
    {
      icon: <IconWithdraw></IconWithdraw>,
      name: "Withdraw",
      url: "/withdraw",
    },
    {
      icon: <IconProfile />,
      name: "Profile",
      url: "/profile",
    },
    {
      icon: <IconLogout />,
      name: "Logout",
      onClick: () => {
        setOpenModal(true);
      },
    },
    {
      icon: darkMode ? <IconDarkMode /> : <IconLightMode />,
      name: "Light/ Dark",
      onClick: () => {
        setDarkMode(!darkMode);
      },
    },
  ];
  return (
    <div className="flex flex-col items-center ">
      <ReactModal
        isOpen={openModal}
        overlayClassName={
          "modal-overlay fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center "
        }
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setOpenModal(false)}
        className="modal-content w-full max-w-[521px] dark:bg-darkbg bg-white rounded-2xl outline-none p-10 relative max-h-[90vh] overflow-y-scroll scroll-hidden"
      >
        <button
          onClick={() => setOpenModal(false)}
          className="float-right w-6 h-6 duration-300 dark:hover:text-white text-text1"
        >
          <IconClose></IconClose>
        </button>
        <h2 className="clear-both mb-10 text-2xl font-bold text-center dark:text-white ">
          Are you sure to log out?
        </h2>
        <div className="flex gap-x-3">
          <Button primary fluid onClick={() => handleLogOut()}>
            Log out
          </Button>
          <Button transparent fluid onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </div>
      </ReactModal>
      <img src={logo} alt="logo" className="" />
      <Gap></Gap>
      <div className="px-[14px] items-center w-full bg-white dark:bg-darkSecondary shadow-[10px_10px_20px_rgba(218, 213, 213, 0.15)] rounded-xl md:w-20 py-10 flex gap-y-7 flex-col ">
        {sidebarLinks.map((item) => {
          return item.url ? (
            <NavLink
              to={`${item.url}`}
              key={item.name}
              className={({ isActive }) => `duration-300 md:rounded-3xl 
            ${
              isActive
                ? "bg-active text-primary iconNav--active p-3 dark:bg-darkStroke"
                : " p-0 "
            }
          `}
            >
              <span>{item.icon}</span>
              <span className="md:hidden ">{item.name}</span>
            </NavLink>
          ) : (
            <div
              key={item.name}
              onClick={item.onClick}
              className="duration-300 cursor-pointer md:rounded-3xl"
            >
              <span>{item.icon}</span>
              <span className="md:hidden ">{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
    // </div>
  );
};

export default Sidebar;
