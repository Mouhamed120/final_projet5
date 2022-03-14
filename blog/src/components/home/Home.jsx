import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import Posts from "../posts/Posts";
import "./home.css";
import axios from "axios";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("http://localhost:5000/api/posts");
      setPosts(res.data.reverse().slice(0, 4));
    };
    fetchPost();
  }, []);
  return (
    <div>
      <Header />
      <div className="row">
        <div className="wrapper">
          <h3 className="row-title">Les derniers articles</h3>
          <div className="flex">
            <Posts posts={posts} />
          </div>
        </div>
      </div>
    </div>
  );
};
