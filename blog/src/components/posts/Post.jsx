import React from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import "./post.css";

const Post = ({ post }) => {
  const { _id, title, description, photo, createdAt, username } = post;
  return (
    <>
      <div className="card">
        <img
          src={"http://localhost:5000/images/" + photo}
          alt=""
          className="card-img"
        />
        <div className="card-body">
          <Link to={`/blog/${_id}`}>
            <h3 className="card-title" style={{ textDecoration: "underline" }}>
              {title}
            </h3>
          </Link>

          <div className="info">
            <p>
              <span style={{ fontWeight: "bold" }}>Auteur</span>:{" "}
              <span style={{ color: "gold" }}>{username}</span>
            </p>
            <p>{dayjs(createdAt).format("DD/MM/YYYY")}</p>
          </div>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Post;
