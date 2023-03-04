import React from "react";

const FeedCaption = () => {
  return (
    <div className="w-full flex flex-col gap-2 px-4 text-sm">
      <div>
        <span className="font-bold">salimarizi</span> Caption from this feed
      </div>
      <div className="text-gray-400 text-xs font-bold">
        View all 3 comments
      </div>
      <div className="text-gray-400 text-xs">
        17 HOURS AGO
      </div>
    </div>
  );
};

export default FeedCaption;
