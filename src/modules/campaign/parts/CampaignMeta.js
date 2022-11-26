import React from "react";

const CampaignMeta = ({
  size = "small",
  amount = 100,
  price = 100,
  text = "Raised of $1,900",
}) => {
  return (
    <div className="flex flex-col gap-y-1">
      <h4
        className={`font-semibold text-text2 ${
          size === "small" ? "text-sm" : "text-xl"
        }`}
      >
        {amount ? amount : `$${price}`}
      </h4>
      <span
        className={`text-text4 ${size === "small" ? "text-xs" : "text-base"}`}
      >
        {text}
      </span>
    </div>
  );
};

export default CampaignMeta;
