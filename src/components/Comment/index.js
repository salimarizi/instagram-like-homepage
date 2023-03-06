import React, { useEffect } from "react";
import FeedCaption from "../Feed/FeedComponent/Caption";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSelectedFeed } from "../../actions/Feed";
import { useParams } from "react-router-dom";

const Comment = (props) => {
  const { feedId } = useParams();

  useEffect(() => {
    props.getSelectedFeed(feedId);
  }, []);

  return (
    <div className="text-white">
      <div className="w-full flex p-3 gap-3 bg-secondary mb-3">
        <div
          className={
            "story-item w-12 h-10 border border-secondary rounded-full story-active"
          }
        >
          <img
            src={props.feed_data.user.profile_picture}
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
            <button className="w-2/12 text-sm text-blue-200 font-bold">
              Post
            </button>
          </div>
        </div>
      </div>
      <FeedCaption
        isDetail={true}
        username={props.feed_data.user.username}
        caption={props.feed_data.caption.text}
        comments={props.feed_data.comments}
        time={props.feed_data.created_time}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  feed_data: state.FeedReducer.feed_data,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getSelectedFeed }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
