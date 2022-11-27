import React from "react";
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
import { logOut } from "../../utils/auth";


const Sidebar = () => {
  const dispatch = useDispatch();
  const [darkMode, setDarkMode] = useDarkMode();
  console.log(darkMode)
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
        dispatch(logOut());
      },
    },
    {
      icon: darkMode ? <IconDarkMode /> : <IconLightMode/>,
      name: "Light/ Dark",
      onClick:() => {
        setDarkMode(!darkMode)
      }
    },
  ];
  return (
    //     <div>
    // <div className="w-[52px] inline-block"></div>
    <div className="flex flex-col items-center ">
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
