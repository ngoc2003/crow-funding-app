import React from "react";

const CampaignGrid = ({children, row = false}) => {
  return <div className={`grid ${!row ? 'grid-cols-4' : 'grid-cols-1 gap-y-10'} gap-x-7`}>{children}</div>;
};

export default CampaignGrid;
