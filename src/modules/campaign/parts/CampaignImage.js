import React from "react";
const defaultImage = `https://wallpaperaccess.com/full/508751.jpg`
const CampaignImage = ({image = defaultImage, className = 'h-[150px]'}) => {
  return (
    <div className={className}>
      <img
        className="object-cover w-full h-full rounded-2xl"
        src= {image}
        alt=""
      />
    </div>
  );
};

export default CampaignImage;
