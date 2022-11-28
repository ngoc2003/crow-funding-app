import React from "react";
import Button from "../../../components/common/Button";
const defaultImage = `https://wallpaperaccess.com/full/508751.jpg`;

const CampaignPerk = ({ button = false }) => {
  return (
    <div>
      <div className="bg-white rounded-md shadow-md dark:bg-darkSecondary">
        <img
          src={defaultImage}
          className="h-[232px] object-cover rounded-md w-full"
          alt=""
        />
        <div className="p-5">
          <span className="inline-block px-3 py-1 text-xs text-white rounded-sm bg-secondary">
            Featured
          </span>
          <h4 className="pt-5 pb-1 text-xl font-semibold text-black dark:text-white">
            Special One Camera
          </h4>
          <div className="flex items-center gap-1 pb-4 text-sm text-error">
            <h4 className="text-xl font-semibold text-black dark:text-white">$2,724 USD</h4>
            <span className="line-through ">$1,504 USD</span>
            <span>(12% OFF)</span>
          </div>
          <div className="flex flex-col pb-4 ">
            <span className="font-semibold dark:text-text4">Estimated Shipping</span>
            <span className="text-sm text-text2 dark:text-text3">October 2022</span>
          </div>
          <span className="text-sm text-text2 dark:text-text3">
            <span className="font-semibold text-black dark:text-white">10</span> claimed
          </span>
          <p className="mt-5 text-sm text-text2 dark:text-text3">Ships worldwide</p>
        </div>
      </div>
      {button && (
        <div className="mt-6">
          <Button fluid secondary>
            Get this perk
          </Button>
        </div>
      )}
    </div>
  );
};

export default CampaignPerk;
