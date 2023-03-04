import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const HeaderShare = () => {
  return (
    <div
      className="md:hidden w-full flex items-center justify-between bg-primary text-white py-1 px-4"
      style={{ borderBottom: "0.1px solid gray" }}
    >
      <div className="w-1/12 text-white py-2"></div>
      <div className="font-bold">Share</div>
      <div className="w-1/12 text-white py-2">
        <FontAwesomeIcon icon={faClose} size="xl" />
      </div>
    </div>
  );
};

export default HeaderShare;
