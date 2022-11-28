import React, { useEffect, useReducer, useState } from "react";
import Heading from "../components/common/Heading";
import CampaignGrid from "../modules/campaign/CampaignGrid";
import CampaignFeatures from "../modules/campaign/CampaignFeatures";
import IconAdd from "../components/icons/IconAdd";
import Button from "../components/common/Button";
import axios from 'axios'
import {apiURL} from '../config/config'
import useDarkMode from '../hooks/useDarkMode'
import {useSelector} from 'react-redux'
import {v4} from 'uuid'
export default function CampaignPage (){
  const {user} = useSelector(state => state.auth)
  const [data,setData] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${apiURL}/search/campaigns`, {params: {author: user.email}})
      console.log(response.data)
      setData(response.data)
    }
    fetchData()
  },[])
  return (
    <div>
    
      <div className="flex items-center justify-between px-10 mb-10 bg-white dark:bg-darkSecondary rounded-3xl py-7">
        <div className="flex items-start gap-x-6">
          <div className="flex items-center justify-center w-12 h-12 text-white duration-300 rounded-full cursor-pointer bg-secondary bg-opacity-40 hover:bg-opacity-90">
            <IconAdd></IconAdd>
          </div>
          <div className="flex-1">
            <h1 className="text-[22px] font-semibold dark:text-white">
              Create Your Campaign
            </h1>
            <p className="pb-1 text-sm text-text3">
              Jump right into our editor and create your first Virtue campaign!
            </p>
            <a href="/" className="text-sm text-primary">Need any help? Learn more . . .</a>
          </div>
        </div>
        <Button  className={'dark:bg-secondary dark:text-white '}>Create campaign</Button>
      </div>
      <Heading number={data?.length}>Your campaign</Heading>
      <CampaignGrid row>
        {data && data.length && data
          .map((item) => (
            <CampaignFeatures key={v4()} data={item}></CampaignFeatures>
          ))}
      </CampaignGrid>
    </div>
  );
};

