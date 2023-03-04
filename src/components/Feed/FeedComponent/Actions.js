import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faCommentAlt,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";

const FeedActions = () => {
  return (
    <div className="w-full flex flex-col gap-2 px-4">
      <div className="w-full flex">
        <div className="w-full flex gap-3">
          <FontAwesomeIcon icon={faHeart} size="lg" />
          <FontAwesomeIcon icon={faCommentAlt} size="lg" />
          <FontAwesomeIcon icon={faPaperPlane} size="lg" />
        </div>
        <div className="w-1/12 flex justify-end">
          <FontAwesomeIcon icon={faBookmark} size="lg" />
        </div>
      </div>
      <div className="text-xs">
        Liked by <span className="font-bold">salimarizi</span> and <span className="font-bold">others</span>
      </div>
    </div>
  );
};

export default FeedActions;
