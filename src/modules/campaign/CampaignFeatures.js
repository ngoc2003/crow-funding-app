import React from "react";
import CampaignCategorize from "./parts/CampaignCategorize";
import CampaignDesc from "./parts/CampaignDesc";
import CampaignImage from "./parts/CampaignImage";
import CampaignMeta from "./parts/CampaignMeta";
import CampaignTitle from "./parts/CampaignTitle";

const CampaignFeatures = () => {
  return (
    <div className="flex items-center gap-x-[30px] w-full max-w-[1048px]">
      <CampaignImage className={`h-[266px] flex-1`}></CampaignImage>
      <div className="flex-1 max-w-[435px]">
        <CampaignCategorize
          text="Architecture"
          className="mb-4 text-sm"
        ></CampaignCategorize>
        <CampaignTitle className={`font-bold text-xl mb-4`}>
          Remake - We make architecture exhibition
        </CampaignTitle>
        <CampaignDesc className="text-sm mb-6">
          Remake - We Make: an exhibition about architecture's social agency in
          the face of urbanisation
        </CampaignDesc>
        <div className="w-full rounded-full bg-[#EFEFEF]  h-[5px] mb-6">
          <div className="h-full w-2/4 rounded-full bg-primary"></div>
        </div>
        <div className="flex items-start justify-between gap-x-5">
          <CampaignMeta size='big' price={2500} text='Raised of $2500' ></CampaignMeta>
          <CampaignMeta size='big' amount={173} text='Total backers'></CampaignMeta>
          <CampaignMeta size='big' amount={30} text='Days left'></CampaignMeta>
        </div>
      </div>
    </div>
  );
};

export default CampaignFeatures;
