import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const HeaderComment = () => {
  return (
    <div
      className="md:hidden w-full flex items-center justify-between bg-primary text-white py-1 px-4"
      style={{ borderBottom: "0.1px solid gray" }}
    >
      <div className="w-1/12 text-white py-2">
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} size="xl" />
        </Link>
      </div>
      <div className="font-bold">Comments</div>
      <div className="w-1/12 text-white py-2">
        <FontAwesomeIcon icon={faPaperPlane} size="lg" />
      </div>
    </div>
  );
};

export default HeaderComment;
