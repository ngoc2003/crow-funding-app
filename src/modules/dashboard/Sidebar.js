import React from "react";
import { NavLink } from "react-router-dom";
import IconCampaign from "../../components/common/icons/IconCampaign";
import IconDarkMode from "../../components/common/icons/IconDarkMode";
import IconDashBoard from "../../components/common/icons/IconDashBoard";
import IconLogout from "../../components/common/icons/IconLogout";
import IconPayment from "../../components/common/icons/IconPayment";
import IconProfile from "../../components/common/icons/IconProfile";
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
    icon: <IconProfile />,
    name: "Profile",
    url: "/profile",
  },
  {
    icon: <IconLogout />,
    name: "Logout",
  },
  {
    icon: <IconDarkMode />,
    name: "Light/ Dark",
  },
];
const Sidebar = () => {
  return (
    <div className="px-[14px] items-center w-full bg-white shadow-[10px_10px_20px_rgba(218, 213, 213, 0.15)] rounded-xl md:w-20 py-10 flex gap-y-7 flex-col h-screen">
      {sidebarLinks.map((item) => {
        return item.url ? (
          <NavLink
            to={`${item.url}`}
            key={item.name}
            className={({ isActive }) => ` md:rounded-3xl 
            ${isActive ? "bg-[#F1FBF7] text-primary  " : ""}
          `}
          >
            <span>{item.icon}</span>
            <span className="md:hidden ">{item.name}</span>
          </NavLink>
        ) : (
          <div key={item.name} className="cursor-pointer md:rounded-3xl">
            <span>{item.icon}</span>
            <span className="md:hidden ">{item.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
