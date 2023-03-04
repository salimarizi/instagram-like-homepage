import React from "react";
import FeedItem from "./FeedItem";

const Feeds = () => {
  return (
    <div className="w-full md:w-8/12 md:m-auto flex flex-col bg-primary text-white gap-3">
      <FeedItem
        username={"salimarizi"}
        avatar={"./images/salimarizi.jpeg"}
        seenStory={false}
        location={null}
        contents={[
          {
            type: "image",
            url: "./images/carousel-1.webp"
          },
          {
            type: "image",
            url: "./images/carousel-2.webp",
          },
          {
            type: "video",
            url: "./videos/video.mp4",
          }
        ]}
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
        contents={[
          {
            type: "video",
            url: "./videos/video.mp4",
          }
        ]}
        caption={"Another city in Indonsia"}
        likes={["salimarizi", "", ""]}
        comments={["", "", ""]}
        time={"17 HOURS AGO"}
      />
    </div>
  );
};

export default Feeds;
