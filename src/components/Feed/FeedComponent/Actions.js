import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faCommentAlt,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBookmark as faBookmarkSolid,
  faHeart as faHeartSolid,
} from "@fortawesome/free-solid-svg-icons";

const FeedActions = (props) => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const like = () => {
    setLiked(!liked);
  };
  const bookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="w-full flex flex-col gap-2 px-4">
      <div className="w-full flex items-center">
        <div className="w-full flex items-center gap-3 ">
          <FontAwesomeIcon
            icon={liked ? faHeartSolid : faHeart}
            onClick={like}
          />
          <FontAwesomeIcon icon={faCommentAlt} />
          <FontAwesomeIcon icon={faPaperPlane} />
        </div>
        <div className="w-1/12 flex justify-end">
          <FontAwesomeIcon
            icon={bookmarked ? faBookmarkSolid : faBookmark}
            onClick={bookmark}
          />
        </div>
      </div>
      {props.likes.length > 0 && (
        <div className="text-xs">
          Liked by <span className="font-bold">{props.likes[0]}</span> and{" "}
          <span className="font-bold">others</span>
        </div>
      )}
    </div>
  );
};

export default FeedActions;
