import React from "react";
import UserList from "./UserList";

const Share = () => {
  return (
    <div className="w-full min-h-full flex flex-col bg-secondary text-white p-4 gap-3">
      <div className="w-full flex">
        <span className="w-2/12 font-semibold">To :</span>
        <input
          name="search"
          className="w-full border-0 bg-secondary focus:outline-0"
          autoComplete="off"
          placeholder="Search"
        />
      </div>
      <div className="w-full text-sm font-semibold">Suggested</div>
      <div className="w-full flex flex-col gap-4">
        <UserList
          username={"salimarizi"}
          name={"Salim Arizi"}
          avatar={"./images/salimarizi.jpeg"}
        />
        <UserList
          username={"salimarizi"}
          name={"Salim Arizi"}
          avatar={"./images/salimarizi.jpeg"}
        />
        <UserList
          username={"salimarizi"}
          name={"Salim Arizi"}
          avatar={"./images/salimarizi.jpeg"}
        />
        <UserList
          username={"salimarizi"}
          name={"Salim Arizi"}
          avatar={"./images/salimarizi.jpeg"}
        />
        <UserList
          username={"salimarizi"}
          name={"Salim Arizi"}
          avatar={"./images/salimarizi.jpeg"}
        />
      </div>
    </div>
  );
};

export default Share;
