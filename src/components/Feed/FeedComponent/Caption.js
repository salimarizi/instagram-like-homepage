import React from "react";
import "../../../styles/story.css";

const FeedCaption = (props) => {
  return (
    <div className="w-full flex flex-col gap-2 px-4 text-sm">
      {props.caption !== null && (
        <div>
          <span className="font-bold">{props.username}</span> {props.caption}
        </div>
      )}
      {props.comments.length > 0 && !props.isDetail && (
        <div className="text-gray-400 text-xs font-bold">
          View all {props.comments.length} comments
        </div>
      )}
      <div className="text-gray-400 text-xs">{props.time}</div>
      {props.isDetail && <hr />}
      <div className="w-full flex flex-col gap-3">
        {props.isDetail &&
          props.comments.map((comment, index) => {
            return (
              <div className="w-full flex items-center gap-2" key={index}>
                <div
                  className={
                    "story-item w-12 h-10 border border-secondary rounded-full " +
                    (!comment.seenStory ? "story-active" : "")
                  }
                >
                  <img
                    src={comment.avatar}
                    className="w-full h-full rounded-full"
                  />
                </div>
                <div className="w-full flex flex-col">
                  <span className="font-bold">{comment.username}</span>{" "}
                  {comment.content}
                  <br />
                  <span className="text-xs text-gray-400">{comment.time}</span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FeedCaption;
