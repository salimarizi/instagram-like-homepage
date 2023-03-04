import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../styles/story.css";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const FeedHeader = () => {
  return (
    <div className="w-full flex items-center px-3">
      <div className="story-item w-12 h-10 border border-secondary rounded-full story-active">
        <img
          src="./images/salimarizi.jpeg"
          className="w-full h-full rounded-full"
        />
      </div>
      <div className="w-full flex flex-col justify-center pl-2">
        <span className="text-sm font-semibold">salimarizi</span>
        <span className="text-xs">Yogyakarta</span>
      </div>
      <div className="w-1/12">
        <FontAwesomeIcon icon={faEllipsis} size="md" />
      </div>
    </div>
  );
};

export default FeedHeader;
