import React from "react";

import avatar from "../../images/avatarPreview.png";
import Search from "./Search";
import Fund from "./Fund";
import Button from "../../components/common/Button";

const Topbar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center flex-1 gap-x-10">
        <Search></Search>
      </div>
      <div className="flex items-center justify-end flex-1 gap-x-10">
        <Fund></Fund>
        <Button to="/start-campaign"  secondary >
          Start a campaign
        </Button>
        <img src={avatar} alt="" className="rounded-full w-13 h-13" />
      </div>
    </div>
  );
};

export default Topbar;
