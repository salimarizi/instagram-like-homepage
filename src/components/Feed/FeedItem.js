import React from "react";
import FeedHeader from "./FeedComponent/Header";
import FeedBody from "./FeedComponent/Body";
import FeedActions from "./FeedComponent/Actions";
import FeedCaption from "./FeedComponent/Caption";

const StoryItem = (props) => {
  return (
    <div className="w-full flex flex-col py-2 gap-2">
      <FeedHeader
        username={props.username}
        avatar={props.avatar}
        seenStory={props.seenStory}
        location={props.location}
      />
      <FeedBody contents={props.contents} />
      <FeedActions likes={props.likes} />
      <FeedCaption
        username={props.username}
        caption={props.caption}
        comments={props.comments}
        time={props.time}
      />
    </div>
  );
};

export default StoryItem;
