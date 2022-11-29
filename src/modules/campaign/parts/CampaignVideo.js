import React from "react";
import { Link } from "react-router-dom";

const CampaignVideo = ({ to = "/", className = '', src = "" }) => {
  let source = src.slice(-11);
  return (
    <Link to={to} className={` aspect-video w-full  `}>
      <iframe
      className={`object-fill w-full h-full ${className}  `}
        src={`https://www.youtube.com/embed/${source}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullscreen
      ></iframe>
    </Link>
  );
};



export default CampaignVideo;
