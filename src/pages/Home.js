import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Stories from "../components/Story";
import Feeds from "../components/Feed";

const Home = () => {
  return (
    <div className="w-full flex flex-col h-screen">
      <Header />
      <main className="h-full overflow-y-auto">
        <div className="divider h-px bg-gray-600"></div>
        <Stories />
        <div className="divider h-px bg-gray-600"></div>
        <Feeds/>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
