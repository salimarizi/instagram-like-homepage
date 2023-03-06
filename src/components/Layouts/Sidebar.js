import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookMessenger,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="hidden md:block md:w-1/12 xl:w-2/12 flex flex-col h-screen bg-primary py-6 text-white"
      style={{ borderRight: "0.1px solid gray" }}
    >
      <Link to="/">
        <div className="w-full flex justify-center mb-14 gap-2 xl:justify-start xl:px-5">
          <FontAwesomeIcon icon={faInstagram} size="xl" />
          <span className="hidden font-bold xl:block">Instagram</span>
        </div>
      </Link>
      <Link to="/">
        <div className="w-full flex justify-center mb-10 gap-3 xl:justify-start xl:px-5">
          <FontAwesomeIcon icon={faHome} size="xl" />
          <span className="hidden font-bold xl:block">Home</span>
        </div>
      </Link>
      <div className="w-full flex justify-center mb-10 gap-4 xl:justify-start xl:px-5">
        <FontAwesomeIcon icon={faSearch} size="xl" />
        <span className="hidden font-bold xl:block">Search</span>
      </div>
      <div className="w-full flex justify-center mb-10 gap-4 xl:justify-start xl:px-5">
        <FontAwesomeIcon icon={faPlayCircle} size="xl" />
        <span className="hidden font-bold xl:block">Reels</span>
      </div>
      <div className="w-full flex justify-center mb-10 gap-4 xl:justify-start xl:px-5">
        <FontAwesomeIcon icon={faFacebookMessenger} size="xl" />
        <span className="hidden font-bold xl:block">Messages</span>
      </div>
      <div className="w-full flex justify-center mb-10 gap-4 xl:justify-start xl:px-5">
        <FontAwesomeIcon icon={faHeart} size="xl" />
        <span className="hidden font-bold xl:block">Notifications</span>
      </div>
      <div className="w-full flex justify-center mb-6 gap-4 xl:justify-start xl:px-5">
        <div className="avatar w-7 h-7 rounded-full">
          <img
            src="/images/salimarizi.jpeg"
            className="w-full h-full rounded-full"
          />
        </div>
        <span className="hidden font-bold xl:block">Profile</span>
      </div>
      <div className="w-full flex justify-center mb-6 gap-4 xl:justify-start xl:px-5">
        <FontAwesomeIcon icon={faBars} size="xl" />
        <span className="hidden font-bold xl:block">More</span>
      </div>
    </div>
  );
};

export default Sidebar;
