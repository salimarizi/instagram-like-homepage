import React from "react";
import Sidebar from "../components/Layouts/Sidebar";
import HeaderShare from "../components/Layouts/HeaderShare";
import Footer from "../components/Layouts/Footer";
import Share from "../components/Share";

const SharePage = () => {
  return (
    <div className="w-full flex">
      <Sidebar />
      <div className="w-full flex flex-col h-screen">
        <HeaderShare />
        <main className="h-full overflow-y-auto bg-primary">
          <Share />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default SharePage;
