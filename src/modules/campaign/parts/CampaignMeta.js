import React from "react";

const CampaignMeta = ({amount = '$2,000', text = 'Raised of $1,900'}) => {
  return (
    <div className="flex flex-col gap-y-1">
      <h4 className="text-sm font-semibold text-text2">$2,000</h4>
      <span className="text-xs text-text4">Raised of $1,900</span>
    </div>
  );
};

export default CampaignMeta;
