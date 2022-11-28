import React from "react";
import IconStar from "../../../components/icons/IconStar";
import { v4 } from "uuid";
const defaultImage = `https://wallpaperaccess.com/full/508751.jpg`;
const CampAuthorView = ({image = defaultImage, author=''}) => {
  return (
    <div className="flex items-center mb-5 gap-x-5">
      <img
        src={image}
        alt=""
        className="w-[60px] h-[60px] object-cover rounded-full"
      />
      <div className="flex items-center flex-1 gap-3">
        <div>
          <h3 className="dark:text-white">{author}</h3>
          <span className="text-sm text-primary">02 campaign</span>
        </div>
        <span className="w-1.5 h-1.5 rounded-full bg-text3 inline-block"></span>

        <div>
          <div className="flex">
            {Array(5)
              .fill()
              .map((item) => (
                <IconStar key={v4()} className="text-transparent"></IconStar>
              ))}
          </div>
          <span className="text-sm text-text3">Dhaka, Bangladesh</span>
        </div>
      </div>
    </div>
  );
};

export default CampAuthorView;
