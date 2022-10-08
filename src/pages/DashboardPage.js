import React from 'react';
import Heading from '../components/common/Heading';
import CampaignGrid from '../modules/campaign/CampaignGrid';
import CampaignItem from '../modules/campaign/CampaignItem';
import { v4 } from 'uuid';

const DashboardPage = () => {
    return (
        <div >
            <Heading number={4}>Your campaign</Heading> 
            <Heading>Popular Campaign</Heading> 
            <CampaignGrid>
                {Array(4).fill(0).map( item => <CampaignItem key={v4()}></CampaignItem>)}
            </CampaignGrid>
            <Heading>recent campaign</Heading> 
        </div>
    );
};

export default DashboardPage;