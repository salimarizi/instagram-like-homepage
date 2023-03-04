import React from "react";
import Sidebar from "../components/Layouts/Sidebar";
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import Stories from "../components/Story";
import Feeds from "../components/Feed";

const Home = () => {
  return (
    <div className="w-full flex">
      <Sidebar />
      <div className="w-full flex flex-col h-screen">
        <Header />
        <main className="h-full overflow-y-auto bg-primary">
          <Stories />
          <Feeds />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
