import React from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <>
      {posts.map((post) => {
        return <Post post={post} key={post._id} />;
      })}
    </>
  );
};

export default Posts;
