import React from "react";

const CampaignTitle = ({children, className}) => {
  return (
    <h3 className={`mb-1 font-semibold text-text1 dark:text-white ${className}`}>
      {children}
    </h3>
  );
};

export default CampaignTitle;
