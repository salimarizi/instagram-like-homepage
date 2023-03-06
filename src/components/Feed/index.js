import React, { useEffect } from "react";
import FeedItem from "./FeedItem";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getFeeds } from "../../actions/Feed";

const Feeds = (props) => {
  useEffect(() => {
    props.getFeeds();
  }, []);

  return (
    <div className="w-full md:w-8/12 md:m-auto flex flex-col bg-primary text-white gap-3">
      {props.feeds_data.map((feed, index) => {

        const likes = feed.user_has_liked ? ["salimarizi", "", ""] : [];

        const comments = feed.comments ? feed.comments : [];

        return (
          <FeedItem
            username={feed.user.username}
            avatar={feed.user.profile_picture}
            seenStory={false}
            location={feed.location}
            contents={feed.contents}
            caption={feed.caption.text}
            likes={likes}
            comments={comments}
            time={feed.created_time}
            key={index}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  feeds_data: state.FeedReducer.feeds_data,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getFeeds }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Feeds);
