import React from "react";
import StoryItem from "./StoryItem";

const Stories = () => {
  return (
    <div className="w-full flex bg-primary text-white p-1 px-2 gap-3 overflow-x-auto">
      <StoryItem name={"Your story"} avatar={"./images/salimarizi.jpeg"} seen={true}/>
      <StoryItem name={"salimarizi"} avatar={"./images/salimarizi.jpeg"} seen={false}/>
      <StoryItem name={"salimarizi"} avatar={"./images/salimarizi.jpeg"} seen={false}/>
      <StoryItem name={"salimarizi"} avatar={"./images/salimarizi.jpeg"} seen={false}/>
      <StoryItem name={"salimarizi"} avatar={"./images/salimarizi.jpeg"} seen={false}/>
      <StoryItem name={"salimarizi"} avatar={"./images/salimarizi.jpeg"} seen={false}/>
    </div>
  );
};

export default Stories;
