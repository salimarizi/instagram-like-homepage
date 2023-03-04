import React from "react";
import Sidebar from "../components/Layouts/Sidebar";
import HeaderComment from "../components/Layouts/HeaderComment";
import Footer from "../components/Layouts/Footer";
import Comment from "../components/Comment";

const CommentPage = () => {
  return (
    <div className="w-full flex">
      <Sidebar />
      <div className="w-full flex flex-col h-screen">
        <HeaderComment />
        <main className="h-full overflow-y-auto bg-primary">
          <Comment />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default CommentPage;
