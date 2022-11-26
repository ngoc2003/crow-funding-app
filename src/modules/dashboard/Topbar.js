import React, { useState } from "react";

import avatar from "../../images/avatarPreview.png";
import Search from "./Search";
import Fund from "./Fund";
import Button from "../../components/common/Button";
import { useSelector } from "react-redux";
import { Menu } from "antd";

const Topbar = () => {
  const { user } = useSelector((state) => state.auth);
  const [showMenu, setShowMenu] = useState(false);
  console.log(user);
  const handleMenuClick = (e) => {
    setShowMenu(!showMenu);
  };
  const Info = () => {
    if (!user)
      return (
        <div className="flex items-center justify-center p-3 text-sm border rounded-md shadow-inner whitespace-nowrap">
          You need to{" "}
          <a href="/sign-in" className="mx-1 text-primary">
            Sign in
          </a>{" "}
          first
        </div>
      );
    return (
      <>
        <div className="flex items-center justify-center p-3 text-sm border rounded-md shadow-inner whitespace-nowrap">
          Hello <span className="ml-1 text-primary">{user.name}</span>
        </div>
        <Menu items={menu} onClick={() => setShowMenu(false)}></Menu>
      </>
    );
  };
  const menu = [
    {
      label: "1sr member",
      key: "1st",
    },
    {
      label: "2nd member",
      key: "2nd",
    },
    {
      label: "3rd member",
      key: "3rd",
    },
  ];

  return (
    <div className="flex items-center justify-between mb-8 ">
      <div className="flex items-center flex-1 gap-x-10">
        <Search></Search>
      </div>
      <div className="flex items-center justify-end flex-1 gap-x-10">
        <Fund></Fund>
        <Button to="/new-campaign" secondary>
          Start a campaign
        </Button>
        <div className="relative">
          <div
            className="overflow-hidden rounded-full cursor-pointer w-13 h-13"
            onClick={handleMenuClick}
          >
            <img src={avatar} alt="" className="object-cover w-full" />
          </div>
          {showMenu && (
            <div className="absolute right-0 z-10 p-3 mt-3 bg-white shadow-md top-full">
              <Info></Info>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
