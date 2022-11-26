import React, { useEffect, useState } from "react";
import Heading from "../components/common/Heading";
import CampaignGrid from "../modules/campaign/CampaignGrid";
import CampaignItem from "../modules/campaign/CampaignItem";
import { v4 } from "uuid";
import Gap from "../components/common/Gap";
import CampaignFeatures from "../modules/campaign/CampaignFeatures";
import axios from "axios";
import { apiURL } from "../config/config";

export default function DashboardPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${apiURL}/campaigns`);
      setData(response.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Heading number={4}>Your campaign</Heading>
      <CampaignFeatures data={data[data.length -1]}></CampaignFeatures>
      <Gap></Gap>
      <Heading>Popular Campaign</Heading>
      <CampaignGrid>
        {data.map((item) => (
          <CampaignItem key={v4()} data={item}></CampaignItem>
        ))}
      </CampaignGrid>
      <Gap></Gap>
      <Heading>recent campaign</Heading>
      <CampaignGrid>
        {data.map((item) => (
          <CampaignItem key={v4()} data={item}></CampaignItem>
        ))}
      </CampaignGrid>
    </div>
  );
}
