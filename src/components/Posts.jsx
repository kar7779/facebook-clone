import React from "react";
import { Avatar, Button } from "@material-ui/core";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import TelegramIcon from "@material-ui/icons/Telegram";
import "./post.css";
function Posts({ username, ImageUrl, propic, message, timestamp }) {
  return (
    <div className="posts">
      <div className="profile">
        <Avatar src={propic} alt="Karthik" />
        <div className="protxt">
          <h4>{username}</h4>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <img className="postimgs" src={ImageUrl} alt="" />
      <h3>
        <strong>{username}</strong>
        {message}
      </h3>
      <div className="postbtn">
        <Button>
          <ThumbUpAltOutlinedIcon />
        </Button>
        <Button>
          <ChatBubbleOutlineOutlinedIcon />
        </Button>
        <Button>
          <TelegramIcon />
        </Button>
      </div>
    </div>
  );
}

export default Posts;
