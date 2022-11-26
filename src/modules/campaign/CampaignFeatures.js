import React from "react";
import CampaignCategorize from "./parts/CampaignCategorize";
import CampaignDesc from "./parts/CampaignDesc";
import CampaignImage from "./parts/CampaignImage";
import CampaignMeta from "./parts/CampaignMeta";
import CampaignTitle from "./parts/CampaignTitle";
const CampaignFeatures = ({ data = "" }) => {
  return (
    <div className="flex items-center gap-x-[30px] w-full max-w-[1048px]">
      <CampaignImage
        image={data?.image}
        className={`h-[266px] flex-1`}
      ></CampaignImage>
      <div className="flex-1 max-w-[435px]">
        <CampaignCategorize
          text={data?.category}
          className="mb-4 text-sm"
        ></CampaignCategorize>
        <CampaignTitle className={`font-bold text-xl mb-4`}>
          {data?.title}
        </CampaignTitle>
        <CampaignDesc className="mb-6 text-sm">
          {data?.description}
        </CampaignDesc>
        <div className="w-full rounded-full bg-[#EFEFEF]  h-[5px] mb-6">
          <div className="w-2/4 h-full rounded-full bg-primary"></div>
        </div>
        <div className="flex items-start justify-between gap-x-5">
          <CampaignMeta
            size="big"
            price={data?.amountPrefilled}
            text={`Raised of ${data?.goal}`}
          ></CampaignMeta>
          <CampaignMeta
            size="big"
            amount={data?.raisedAmount}
            text="Total backers"
          ></CampaignMeta>
          <CampaignMeta size="big" amount={30} text="Days left"></CampaignMeta>
        </div>
      </div>
    </div>
  );
};

export default CampaignFeatures;
