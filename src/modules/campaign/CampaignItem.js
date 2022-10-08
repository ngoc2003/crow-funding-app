import React from "react";
import IconFolder from "../../components/icons/IconFolder";
import { Link } from "react-router-dom";
import CampaignCategorize from "./parts/CampaignCategorize";
const CampaignItem = () => {
  return (
    <div>
      <div className="h-[150px]">
        <img
          className="object-cover w-full h-full rounded-2xl"
          src="https://wallpaperaccess.com/full/508751.jpg"
          alt=""
        />
      </div>
      <div className="px-4 py-3">
        <CampaignCategorize></CampaignCategorize>
        <h3 className="mb-1 font-semibold text-text1">
          Powered Kits Learning Boxes
        </h3>
        <p className="mb-3 text-sm text-text3">
          Fun durable and reuseable boxes with eco friendly options
        </p>
        <div className="flex items-start justify-between mb-3 gap-x-5">
          {/* <div className="flex flex-col gap-y-1">
            <h4 className="text-sm font-semibold text-text2">$2,000</h4>
            <span className="text-xs text-text4">Raised of $1,900</span>
          </div>
          <div className="flex flex-col gap-y-1">
            <h4 className="text-sm font-semibold text-text2">173</h4>
            <span className="text-xs text-text4">Total backers</span>
          </div> */}
        </div>
        <div className="flex items-center gap-x-2">
          <img
            className="object-cover w-8 h-8 rounded-full"
            src="https://wallpaperaccess.com/full/508751.jpg"
            alt=""
          />
          <p className="text-xs text-text3">
            By{' '}
            <span className="font-semibold text-text2">Ngoc</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampaignItem;
