import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../header/Header";
import Post from "../posts/Post";
import Posts from "../posts/Posts";
import "./Blog.css";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const [slice, setSlice] = useState([]);
  const [noOfElement, setNoOfElement] = useState(4);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("http://localhost:5000/api/posts" + search);
      setPosts(res.data.reverse());
      const slice = res.data.slice(0, noOfElement);
      setSlice(slice);
      console.log(res.data);
    };
    fetchPost();
  }, [noOfElement, search]);

  return (
    <div>
      <Header />
      <div className="row">
        <div className="wrapper">
          <h3 className="row-title">Les Aricles du Blog</h3>
          <div className="flex">
            {slice.length > 0 ? (
              <Posts posts={slice} />
            ) : (
              <Posts posts={slice} />
            )}
          </div>
          <button
            style={{ color: "black" }}
            onClick={() => setNoOfElement(noOfElement + 4)}
          >
            Voir plus ...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
