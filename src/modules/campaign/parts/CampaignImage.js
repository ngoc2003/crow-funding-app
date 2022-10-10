import React from "react";
const defaultImage = `https://wallpaperaccess.com/full/508751.jpg`
const CampaignImage = ({image = defaultImage, className}) => {
  return (
    <div className={`h-[150px] ${className}`}>
      <img
        className="object-cover w-full h-full rounded-2xl"
        src= {image}
        alt=""
      />
    </div>
  );
};

export default CampaignImage;
