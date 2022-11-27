import React from "react";

const CampaignMeta = ({
  size = "small",
  amount = '',
  price = '',
  text = "Raised of $1,900",
}) => {
  return (
    <div className="flex flex-col">
      <h4
        className={`font-semibold text-text2 dark:text-text4 ${
          size === "small" ? "text-sm" : "text-xl"
        }`}
      >
        {amount ? amount : `$${price}`}
      </h4>
      <span
        className={`text-text4 dark:text-text3 ${size === "small" ? "text-xs" : "text-base"}`}
      >
        {text}
      </span>
    </div>
  );
};

export default CampaignMeta;
