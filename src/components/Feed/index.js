import React from "react";
import FeedItem from "./FeedItem";

const Feeds = () => {
  return (
    <div className="w-full flex flex-col bg-primary text-white gap-3">
      <FeedItem
        username={"salimarizi"}
        avatar={"./images/salimarizi.jpeg"}
        seenStory={false}
        location={null}
        caption={"Caption from this feed"}
        likes={[]}
        comments={[]}
        time={"35 MINUTES AGO"}
      />
      <FeedItem
        username={"salimarizi"}
        avatar={"./images/salimarizi.jpeg"}
        seenStory={true}
        location={"Yogyakarta"}
        caption={"Another city in Indonsia"}
        likes={["salimarizi", "", ""]}
        comments={["", "", ""]}
        time={"17 HOURS AGO"}
      />
    </div>
  );
};

export default Feeds;
