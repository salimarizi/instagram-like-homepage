import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="w-full grid grid-cols-5 gap-2 text-white bg-primary">
      <div className="flex items-center justify-center py-2">
        <FontAwesomeIcon icon={faHome} size="xl" />
      </div>
      <div className="flex items-center justify-center py-2">
        <FontAwesomeIcon icon={faSearch} size="xl" />
      </div>
      <div className="flex items-center justify-center py-2">
        <FontAwesomeIcon icon={faPlayCircle} size="xl" />
      </div>
      <div className="flex items-center justify-center py-2">
        <FontAwesomeIcon icon={faFacebookMessenger} size="xl" />
      </div>
      <div className="flex items-center justify-center py-2">
        <div className="avatar w-8 h-8 rounded-full">
          <img src="./images/salimarizi.jpeg" className="w-full h-full rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
