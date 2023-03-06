import React, { useState } from "react";
import Sidebar from "../components/Layouts/Sidebar";
import Header from "../components/Layouts/Header";
import HeaderSearch from "../components/Layouts/HeaderSearch";
import Footer from "../components/Layouts/Footer";
import Stories from "../components/Story";
import Feeds from "../components/Feed";

const Home = () => {
  const [showSearch, setShowSearch] = useState(false);
  const handleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className="w-full flex">
      <Sidebar />
      <div className="w-full flex flex-col h-screen">
        {showSearch ? <HeaderSearch/> : <Header />}
        <main className="h-full overflow-y-auto bg-primary">
          <Stories />
          <Feeds />
        </main>
        <Footer handleSearch={handleSearch} />
      </div>
    </div>
  );
};

export default Home;
