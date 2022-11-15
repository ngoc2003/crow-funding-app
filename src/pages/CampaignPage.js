import React from "react";
import Heading from "../components/common/Heading";
import CampaignGrid from "../modules/campaign/CampaignGrid";
import CampaignFeatures from "../modules/campaign/CampaignFeatures";
import IconAdd from "../components/icons/IconAdd";
import { Button, Dropdown} from "antd";

export default function CampaignPage (){
  return (
    <div>
      <div className="flex items-center justify-between px-10 mb-10 bg-white rounded-3xl py-7">
        <div className="flex items-start gap-x-6">
          <div className="flex items-center justify-center w-12 h-12 text-white duration-300 rounded-full cursor-pointer bg-secondary bg-opacity-40 hover:bg-opacity-90">
            <IconAdd></IconAdd>
          </div>
          <div className="flex-1">
            <h1 className="text-[22px] font-semibold">
              Create Your Campaign
            </h1>
            <p className="pb-1 text-sm text-text3">
              Jump right into our editor and create your first Virtue campaign!
            </p>
            <a href="/" className="text-sm text-primary">Need any help? Learn more . . .</a>
          </div>
        </div>
        <Button className="third">Create campaign</Button>
      </div>
      <Heading number={4}>Your campaign</Heading>
      <CampaignGrid row>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignFeatures key={item}></CampaignFeatures>
          ))}
      </CampaignGrid>
    </div>
  );
};

