import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../styles/story.css";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const FeedHeader = (props) => {
  return (
    <div className="w-full flex items-center px-3">
      <div
        className={
          "story-item w-12 h-10 border border-secondary rounded-full " +
          (!props.seenStory ? "story-active" : "")
        }
      >
        <img src={props.avatar} className="w-full h-full rounded-full" />
      </div>
      <div className="w-full flex flex-col justify-center pl-2">
        <span className="text-sm font-semibold">{props.username}</span>
        {props.location !== null && <span className="text-xs">Yogyakarta</span>}
      </div>
      <div className="w-1/12">
        <FontAwesomeIcon icon={faEllipsis} size="lg" />
      </div>
    </div>
  );
};

export default FeedHeader;
