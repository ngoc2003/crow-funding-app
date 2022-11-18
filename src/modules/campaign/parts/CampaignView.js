import React from "react";
import { v4 } from "uuid";
import CampaignCategorize from "./CampaignCategorize";
import CampaignDesc from "./CampaignDesc";
import CampaignImage from "./CampaignImage";
import CampaignMeta from "./CampaignMeta";
import CampaignTitle from "./CampaignTitle";
import CampAuthorView from "./CampAuthorView";
import Button from "../../../components/common/Button";
import CampaignSupport from "./CampaignSupport";
import CampaignPerk from "./CampaignPerk";
const CampaignView = () => {
  return (
    <>
      <div
        className="h-[140px] mb-8 rounded-3xl bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ background: `url(https://source.unsplash.com/random)` }}
      >
        <h1 className="text-3xl font-bold text-white">Education</h1>
      </div>
      <div className="flex items-center gap-x-10 w-full max-w-[1066px]">
        <div className="flex-1">
          <CampaignImage className={`h-[398px] mb-8 `}></CampaignImage>
          <div className="flex items-center justify-center gap-x-5">
            {Array(4)
              .fill()
              .map((item) => (
                <img
                  src="https://source.unsplash.com/random"
                  alt=""
                  className="w-[90px] h-[70px] object-cover rounded-lg"
                  key={v4()}
                ></img>
              ))}
          </div>
        </div>
        <div className="flex-1 max-w-[435px] ">
          <CampaignCategorize
            text="Architecture"
            className="mb-4 text-sm"
          ></CampaignCategorize>
          <CampaignTitle className={`font-bold text-xl mb-4`}>
            Remake - We make architecture exhibition
          </CampaignTitle>
          <CampaignDesc className="mb-6 text-sm">
            Remake - We Make: an exhibition about architecture's social agency
            in the face of urbanisation
          </CampaignDesc>
          <CampAuthorView></CampAuthorView>
          <div className="w-full rounded-full bg-[#EFEFEF]  h-[5px] mb-6">
            <div className="w-2/4 h-full rounded-full bg-primary"></div>
          </div>
          <div className="flex items-start justify-between mb-5 gap-x-5">
            <CampaignMeta
              size="big"
              price={2500}
              text="Raised of $2500"
            ></CampaignMeta>
            <CampaignMeta
              size="big"
              amount={173}
              text="Total backers"
            ></CampaignMeta>
            <CampaignMeta
              size="big"
              amount={30}
              text="Days left"
            ></CampaignMeta>
          </div>
          <Button fluid primary>
            Back this project
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-[100px] bg-white p-5 shadow-sm mb-6">
        <div className="flex items-center font-semibold gap-x-14 text-text3">
          <span className="text-secondary">Campaign</span>
          <span>Risks</span>
          <span>FAQ</span>
          <span>Updates</span>
          <span>Comments</span>
        </div>
        <Button primary>Back this project</Button>
      </div>
      <div className="grid gap-x-10 grid-cols-[1.3fr,1fr]">
        <div>
          <h4 className="mb-5 font-semibold text-black">Story</h4>
          <div className="bg-white">
            {/* 
            
            Code here
            
             */}
          </div>
        </div>
        <div>
          <CampaignSupport></CampaignSupport>
          <div className="mb-14"></div>

          <div className="flex flex-col gap-y-8">
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
          </div>
        </div>
      </div>
    </>
  );
};

export default CampaignView;
