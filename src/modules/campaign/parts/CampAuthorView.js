import React from "react";
import IconStar from "../../../components/icons/IconStar";
import { v4 } from "uuid";
const defaultImage = `https://wallpaperaccess.com/full/508751.jpg`;
const CampAuthorView = () => {
  return (
    <div className="flex items-center mb-5 gap-x-5">
      <img
        src={defaultImage}
        alt=""
        className="w-[60px] h-[60px] object-cover rounded-full"
      />
      <div className="flex flex-1">
        <div>
          <h3>Saiful Islam</h3>
          <span className="text-sm text-primary">02 campaign</span>
          <span className="w-1.5 h-1.5 rounded-full bg-text3 inline-block mx-1.5"></span>
        </div>
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
