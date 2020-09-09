import React from "react";
import { Avatar } from "@material-ui/core";
import "./post.css";

function Posts({ username, image }) {
  return (
    <div className="posts">
      <div className="posthead">
        <Avatar src="#" alt={username} />
        <h4>{username}</h4>
      </div>
      <img src={image} alt="" />
      <h3>
        <strong>{username}</strong>Helllo
      </h3>
    </div>
  );
}

export default Posts;
