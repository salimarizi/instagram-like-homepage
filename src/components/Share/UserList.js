import React from "react";

const UserList = (props) => {
  return (
    <div className="w-full flex gap-2 justify-center">
      <div className="w-14 h-10 rounded-full">
        <img src={props.avatar} className="w-full h-full rounded-full" />
      </div>
      <div className="w-full flex flex-col">
        <div className="text-sm font-bold">{props.username}</div>
        <div className="text-xs font-semibold text-gray-400">{props.name}</div>
      </div>
      <div className="w-7 h-5 rounded-full border"></div>
    </div>
  );
};

export default UserList;
