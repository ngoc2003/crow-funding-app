import React from "react";
import Button from "../../../components/common/Button";

const CampaignPerk = ({ button = false }) => {
  return (
    <div>
      <div className="bg-white rounded-md shadow-md">
        <img
          src="https://source.unsplash.com/random"
          className="h-[232px] object-cover rounded-md w-full"
          alt=""
        />
        <div className="p-5">
          <span className="inline-block px-3 py-1 text-xs text-white rounded-sm bg-secondary">
            Featured
          </span>
          <h4 className="pt-5 pb-1 text-xl font-semibold text-black">
            Special One Camera
          </h4>
          <div className="flex items-center gap-1 pb-4 text-sm text-error">
            <h4 className="text-xl font-semibold text-black">$2,724 USD</h4>
            <span className="line-through">$1,504 USD</span>
            <span>(12% OFF)</span>
          </div>
          <div className="flex flex-col pb-4 ">
            <span className="font-semibold">Estimated Shipping</span>
            <span className="text-sm text-text2">October 2022</span>
          </div>
          <span className="text-sm text-text2">
            <span className="font-semibold text-black">10</span> claimed
          </span>
          <p className="mt-5 text-sm text-text2">Ships worldwide</p>
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
