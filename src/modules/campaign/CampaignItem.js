import React from "react";
import CampaignCategorize from "./parts/CampaignCategorize";
import CampaignMeta from "./parts/CampaignMeta";
import CampaignDesc from "./parts/CampaignDesc";
import CampaignTitle from "./parts/CampaignTitle";
import CampaignAuthor from "./parts/CampaignAuthor";
import CampaignImage from "./parts/CampaignImage";
import { Link } from "react-router-dom";
import CampaignVideo from "./parts/CampaignVideo";
const CampaignItem = ({ data = "" }) => {
  return (
    <div className="flex flex-col dark:bg-darkSecondary rounded-2xl">
      <CampaignImage
        to={`/campaign/${data._id}`}
        image={data?.image}
      ></CampaignImage>
      {/* <CampaignVideo src={data?.video}></CampaignVideo> */}
      <div className="flex flex-col flex-1 px-4 py-3 ">
        <CampaignCategorize>{data?.category}</CampaignCategorize>
        <Link to={`/campaign/${data._id}`}>
          <CampaignTitle>{data?.title || "Title"}</CampaignTitle>
          <CampaignDesc>{data?.description || "Description"}</CampaignDesc>
        </Link>
        <div className="flex flex-col justify-end flex-1">
          <div className="flex items-start justify-between mb-3 gap-x-5">
            <CampaignMeta
              text={`Raised of ${data?.goal}`}
              price={data?.amountPrefilled}
            ></CampaignMeta>
            <CampaignMeta
              text="Total backers"
              amount={data?.raisedAmount}
            ></CampaignMeta>
          </div>
          <CampaignAuthor author={data?.author}></CampaignAuthor>
        </div>
      </div>
    </div>
  );
};

export default CampaignItem;
