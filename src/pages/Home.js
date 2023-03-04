import React from "react";
import Header from "../components/Header";
import Stories from "../components/Story";

const Home = () => {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <div className="divider h-px bg-gray-600"></div>
      <Stories />
      <div className="divider h-px bg-gray-600"></div>
    </div>
  );
};

export default Home;
