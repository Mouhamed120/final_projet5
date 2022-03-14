import React from "react";
import SideBar from "../sidebar/SideBar";
import SinglePost from "./SinglePost";
import "./single.css";
import Header from "../header/Header";

const Single = () => {
  return (
    <>
      <Header />
      <div className="test">
        <h3 className="row-title">DETAIL ARTICLE</h3>
        <SinglePost />
      </div>
    </>
  );
};

export default Single;
