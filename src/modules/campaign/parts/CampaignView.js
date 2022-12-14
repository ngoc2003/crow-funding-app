import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { apiURL } from "../../../config/config";
import { useParams } from "react-router-dom";
import { Interweave } from "interweave";
import CampaignVideo from "./CampaignVideo";
const defaultImage = `https://wallpaperaccess.com/full/508751.jpg`;

const CampaignView = ({setShowModal = () => {}}) => {
  const { slug } = useParams();
  const [data, setData] = useState({});
  const [imgURL, setImgURL] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${apiURL}/campaigns/${slug}`);
      setData(response.data);
    };
    fetchData();
  }, []);
  function getIMG() {
    const list = document.querySelectorAll(".content-view img");
    const imgURLTemp = Array.from(list).map((item) => item.getAttribute("src"));
    setImgURL(imgURLTemp);
  }
  setTimeout(() => {
    getIMG();
  }, 200);
  return (
    <>
      <div
        className="h-[140px] mb-8 rounded-3xl bg-cover bg-center bg-no-repeat flex items-center justify-center bg-opacity-70"
        style={{ background: `url(${defaultImage})` }}
      >
        <h1 className="text-3xl font-bold text-white">{data?.category}</h1>
      </div>
      <div className="flex items-center gap-x-10 w-full max-w-[1066px]">
        <div className="flex flex-col flex-1">
          <div className="flex-1">
            <CampaignVideo
              className="h-[300px]"
              src={data?.video}
            ></CampaignVideo>
          </div>
          <div className="flex items-center justify-center mt-5 gap-x-5">
            {imgURL &&
              imgURL.map((item) => (
                <img
                  src={item}
                  key={v4()}
                  alt=""
                  className="w-[90px] h-[70px] object-cover rounded-lg"
                />
              ))}
          </div>
        </div>
        <div className="flex-1 max-w-[435px] ">
          <CampaignCategorize
            text="Architecture"
            className="mb-4 text-sm"
          ></CampaignCategorize>
          <CampaignTitle className={`font-bold text-xl mb-4`}>
            {data?.title}
          </CampaignTitle>
          <CampaignDesc className="mb-6 text-sm">
            {data?.description}
          </CampaignDesc>
          <CampAuthorView
            image={data?.image}
            author={data?.author}
          ></CampAuthorView>
          <div className="w-full rounded-full bg-[#EFEFEF] dark:bg-darkStroke  h-[5px] mb-6">
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
          <Button fluid primary onClick={() => setShowModal(true)}>
            Back this project
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between rounded-md mt-[100px] bg-white p-5 shadow-sm mb-6 dark:bg-darkSecondary">
        <div className="flex items-center font-semibold gap-x-14 text-text3">
          <span className="text-secondary">Campaign</span>
          <span>Risks</span>
          <span>FAQ</span>
          <span>Updates</span>
          <span>Comments</span>
        </div>
        <Button primary onClick={() => setShowModal(true)}>Back this project</Button>
      </div>
      <div className="grid gap-x-10 grid-cols-[1.3fr,1fr]">
        <div className="">
          <h4 className="mb-5 font-semibold text-black dark:text-white">
            Story
          </h4>
          <div className="p-5 bg-white rounded-md dark:bg-darkSecondary">
            <Interweave
              className="content-view dark:text-text4 "
              content={data?.story}
            ></Interweave>
          </div>
        </div>
        <div>
          <CampaignSupport onClick={setShowModal}></CampaignSupport>
          <div className="mb-14"></div>

          <div className="flex flex-col gap-y-8">
          {
            imgURL.length && imgURL.map(item => (
              
            <CampaignPerk img={item} key={v4()}></CampaignPerk>
            ))
          }
          </div>
        </div>
      </div>
    </>
  );
};

export default CampaignView;
