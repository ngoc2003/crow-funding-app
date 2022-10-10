import React from 'react';
import { Link } from 'react-router-dom';
import IconFolder from '../../../components/icons/IconFolder';

const CampaignCategorize = ({children = 'education', className}) => {
    return (
        <Link
          to="/"
          className={`flex items-center mb-3 text-xs capitalize gap-x-3 text-text3 ${className}`}
        >
          <IconFolder></IconFolder>
          <span>{children}</span>
        </Link>
    );
};

export default CampaignCategorize;