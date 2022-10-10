import React from 'react';

const CampaignDesc = ({children, className}) => {
    return (
        <p className={`font-normal text-text3 mb-4 text-xs ${className}`}>
         {children}
        </p>
    );
};

export default CampaignDesc;