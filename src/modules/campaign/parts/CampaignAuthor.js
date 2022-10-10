import React from "react";
const defaultImage = `https://wallpaperaccess.com/full/508751.jpg`;

const CampaignAuthor = ({image = defaultImage, author = 'Anonymous'}) => {
  return (
    <div className="flex items-center gap-x-2">
      <img className="object-cover w-8 h-8 rounded-full" src={defaultImage} alt="" />
      <p className="text-xs text-text3">
        By <span className="font-semibold text-text2">{author}</span>
      </p>
    </div>
  );
};

export default CampaignAuthor;
