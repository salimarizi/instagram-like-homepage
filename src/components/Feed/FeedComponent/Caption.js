import React from "react";

const FeedCaption = (props) => {
  return (
    <div className="w-full flex flex-col gap-2 px-4 text-sm">
      {props.caption !== null && (
        <div>
          <span className="font-bold">{props.username}</span> {props.caption}
        </div>
      )}
      {props.comments.length > 0 && (
        <div className="text-gray-400 text-xs font-bold">
          View all {props.comments.length} comments
        </div>
      )}
      <div className="text-gray-400 text-xs">{props.time}</div>
    </div>
  );
};

export default FeedCaption;
