import React from "react";
import { Avatar, Button } from "@material-ui/core";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import TelegramIcon from "@material-ui/icons/Telegram";
import "./post.css";

function Posts({ username, ImageUrl }) {
  return (
    <div className="posts">
      <div className="posthead">
        <Avatar src="#" alt={username} />
        <h4>{username}</h4>
      </div>
      <img src={ImageUrl} alt="" />
      <h3>
        <strong>{username}</strong>Helllo
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
