import React from 'react';
import Heading from '../components/common/Heading';
import CampaignGrid from '../modules/campaign/CampaignGrid';
import CampaignItem from '../modules/campaign/CampaignItem';
import { v4 } from 'uuid';
import Gap from '../components/common/Gap';
import CampaignFeatures from '../modules/campaign/CampaignFeatures';

const DashboardPage = () => {
    return (
        <div >
            <Heading number={4}>Your campaign</Heading> 
            <CampaignFeatures></CampaignFeatures>
            <Gap></Gap>
            <Heading>Popular Campaign</Heading> 
            <CampaignGrid>
                {Array(4).fill(0).map( item => <CampaignItem key={v4()}></CampaignItem>)}
            </CampaignGrid>
            <Heading>recent campaign</Heading> 
        </div>
    );
};

export default DashboardPage;