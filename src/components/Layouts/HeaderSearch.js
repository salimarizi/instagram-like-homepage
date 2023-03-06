import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const HeaderSearch = () => {
  const [isActiveSearch, setIsActiveSearch] = useState(false);

  return (
    <div className="w-full flex bg-primary text-white py-3 px-4 gap-2">
      <div className="hidden xs:block w-1/12 text-white py-2">
        <FontAwesomeIcon icon={faInstagram} size="xl" />
      </div>
      <div className="search w-full flex items-center gap-2 bg-secondary rounded-md text-gray-400 py-1 px-3">
        {!isActiveSearch && <FontAwesomeIcon icon={faSearch} />}

        <input
          name="search"
          className="w-full border-0 bg-secondary focus:outline-0"
          autoComplete="off"
          placeholder="Search"
          onFocus={() => setIsActiveSearch(true)}
          onBlur={() => setIsActiveSearch(false)}
        />

        {isActiveSearch && <FontAwesomeIcon icon={faCircleXmark} />}
      </div>
      <div className="w-1/12 text-white py-2">
        <FontAwesomeIcon icon={faHeart} size="xl" />
      </div>
    </div>
  );
};

export default HeaderSearch;
