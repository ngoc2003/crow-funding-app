import React, { useEffect, useState } from "react";
import Coming from "../../images/coming.png";
const ComingSoon = () => {
  return (
    <div className="flex items-center gap-8">
      <div className="flex-1">
        <img src={Coming} alt="" />
      </div>
      <div className="flex-1 font-semibold text-center text-secondary">
        This Page will Coming Soon 
      </div>
    </div>
  );
};

export default ComingSoon;
