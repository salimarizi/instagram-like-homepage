import React from "react";
import FeedCaption from "../Feed/FeedComponent/Caption";

const Comment = () => {
  return (
    <div className="text-white">
      <div className="w-full flex p-3 gap-3 bg-secondary mb-3">
        <div
          className={
            "story-item w-12 h-10 border border-secondary rounded-full story-active"
          }
        >
          <img
            src={"./images/salimarizi.jpeg"}
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="w-full">
          <div className="w-full flex bg-primary py-2 px-4 rounded-full">
            <input
              name="search"
              className="w-full border-0 bg-primary focus:outline-0"
              autoComplete="off"
              placeholder="Add a comment..."
            />
            <button className="w-2/12 text-sm text-blue-200 font-bold">Post</button>
          </div>
        </div>
      </div>
      <FeedCaption
        isDetail={true}
        username={"salimarizi"}
        caption="Another city in Indonesia"
        comments={[
          {
            username: "salimarizi",
            content: "this is good",
            time: "5 MINUTES AGO",
            seenStory: true,
            avatar: "./images/salimarizi.jpeg",
          },
          {
            username: "salimarizi",
            content: "Wonderful!",
            time: "5 MINUTES AGO",
            seenStory: false,
            avatar: "./images/salimarizi.jpeg",
          },
          {
            username: "salimarizi",
            content: "Great!",
            time: "5 MINUTES AGO",
            seenStory: true,
            avatar: "./images/salimarizi.jpeg",
          },
        ]}
        time="7 HOURS AGO"
      />
    </div>
  );
};

export default Comment;
