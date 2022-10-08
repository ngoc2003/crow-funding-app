import React from "react";
import Button from "../../components/button/Button";
import logo from "../../images/Logo.png";
import avatar from "../../images/avatarPreview.png";
import Search from "./Search";
import Fund from "./Fund";

const Topbar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center flex-1 gap-x-10">
        <img src={logo} alt="logo" />
        <Search></Search>
      </div>
      <div className="flex items-center justify-end flex-1 gap-x-10">
        <Fund></Fund>
        <Button secondary className="px-7" type='button'>
          Start a campaign
        </Button>
        <img src={avatar} alt="" className="rounded-full w-13 h-13" />
      </div>
    </div>
  );
};

export default Topbar;
