import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <div
      className="md:hidden w-full flex bg-primary text-white p-1 px-2 gap-3"
      style={{ borderBottom: "0.1px solid gray" }}
    >
      <div className="w-full text-white py-2">
        <FontAwesomeIcon icon={faInstagram} size="xl" />
        <span className="font-bold ml-2">Instagram</span>
      </div>
      <div className="w-1/12 text-white py-2">
        <FontAwesomeIcon icon={faSquarePlus} size="lg" />
      </div>
      <div className="w-1/12 text-white py-2">
        <FontAwesomeIcon icon={faHeart} size="lg" />
      </div>
    </div>
  );
};

export default Header;
