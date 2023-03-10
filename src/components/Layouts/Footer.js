import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <div className="block md:hidden w-full grid grid-cols-5 gap-2 text-white bg-primary">
      <Link to="/">
        <div className="flex items-center justify-center py-2">
          <FontAwesomeIcon icon={faHome} size="lg" />
        </div>
      </Link>
      <div className="flex items-center justify-center py-2" onClick={props.handleSearch}>
        <FontAwesomeIcon icon={faSearch} size="lg" />
      </div>
      <div className="flex items-center justify-center py-2">
        <FontAwesomeIcon icon={faPlayCircle} size="lg" />
      </div>
      <div className="flex items-center justify-center py-2">
        <FontAwesomeIcon icon={faFacebookMessenger} size="lg" />
      </div>
      <div className="flex items-center justify-center py-2">
        <div className="avatar w-7 h-7 rounded-full">
          <img
            src="/images/salimarizi.jpeg"
            className="w-full h-full rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
