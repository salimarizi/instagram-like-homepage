import React from "react";
import "./story.css";

const StoryItem = (props) => {
  return (
    <div className="w-16 flex flex-col items-center gap-1">
      <div
        className={
          "story-item w-16 h-16 border border-secondary rounded-full " +
          (!props.seen ? "story-active" : "")
        }
      >
        <img src={props.avatar} className="w-full h-full rounded-full" />
      </div>
      <span className="text-xs text-gray-400">{props.name}</span>
    </div>
  );
};

export default StoryItem;
