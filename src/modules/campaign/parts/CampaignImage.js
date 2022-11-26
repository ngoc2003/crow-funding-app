import React from "react";
import { Link } from "react-router-dom";
const defaultImage = `https://wallpaperaccess.com/full/508751.jpg`;
const CampaignImage = ({ image = defaultImage, to='/', className = "h-[150px]" }) => {
  return (
    <Link to={to} className={className}>
      <img
        className="object-cover w-full h-full rounded-2xl"
        src={image }
        alt=""
      />
    </Link>
  );
};

export default CampaignImage;
