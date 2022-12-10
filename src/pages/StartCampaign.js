import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CampaignAddNew from "../modules/campaign/parts/CampaignAddNew";
import RequiredAuthPage from "../layouts/RequiredAuthPage";

const StartCampaign = () => {
  return (
    <RequiredAuthPage>
      <CampaignAddNew></CampaignAddNew>
    </RequiredAuthPage>
  );
};

export default StartCampaign;
