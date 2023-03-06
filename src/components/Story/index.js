import React, { useEffect } from "react";
import StoryItem from "./StoryItem";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getStories } from "../../actions/Story";

const Stories = (props) => {
  useEffect(() => {
    props.getStories();
  }, []);

  return (
    <div
      className="w-full flex bg-primary text-white p-1 px-2 gap-5 overflow-x-auto"
      style={{ borderBottom: "0.1px solid gray" }}
    >
      <StoryItem
        name={"Your story"}
        avatar={"/images/salimarizi.jpeg"}
        seen={true}
      />
      {props.stories_data.map((story, index) => {
        return (
          <StoryItem
            name={story.username}
            avatar={story.profile_picture}
            seen={false}
            key={index}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  stories_data: state.StoryReducer.stories_data,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getStories }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Stories);
