import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Stories from "../components/Story";

const Home = () => {
  return (
    <div className="w-full flex flex-col h-screen">
      <Header />
      <main className="h-full">
        <div className="divider h-px bg-gray-600"></div>
        <Stories />
        <div className="divider h-px bg-gray-600"></div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
