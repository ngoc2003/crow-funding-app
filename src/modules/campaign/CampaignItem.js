import React from "react";
import IconFolder from "../../components/icons/IconFolder";
import { Link } from "react-router-dom";
import CampaignCategorize from "./parts/CampaignCategorize";
import CampaignMeta from "./parts/CampaignMeta";
import CampaignDesc from "./parts/CampaignDesc";
import CampaignTitle from "./parts/CampaignTitle";
import CampaignAuthor from "./parts/CampaignAuthor";
import CampaignImage from "./parts/CampaignImage";
const CampaignItem = () => {
  return (
    <div>
      <CampaignImage></CampaignImage>
      <div className="px-4 py-3">
        <CampaignCategorize></CampaignCategorize>
        <CampaignTitle>Powered Kits Learning Boxes</CampaignTitle>
        <CampaignDesc>
          Fun durable and reuseable boxes with eco friendly options
        </CampaignDesc>
        <div className="flex items-start justify-between mb-3 gap-x-5">
          <CampaignMeta text="Raised of $1,900" price="2000"></CampaignMeta>
          <CampaignMeta text="Total backers" amount="173"></CampaignMeta>
        </div>
        <CampaignAuthor></CampaignAuthor>
      </div>
    </div>
  );
};

export default CampaignItem;
