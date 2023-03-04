import React from "react";
import FeedHeader from "./FeedComponent/Header";
import FeedBody from "./FeedComponent/Body";
import FeedActions from "./FeedComponent/Actions";
import FeedCaption from "./FeedComponent/Caption";

const StoryItem = () => {
  return (
    <div className="w-full flex flex-col py-2 gap-2">
      <FeedHeader />
      <FeedBody />
      <FeedActions />
      <FeedCaption />
    </div>
  );
};

export default StoryItem;
