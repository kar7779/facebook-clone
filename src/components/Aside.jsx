import React from "react";
import "./Aside.css";
import { Button, Avatar } from "@material-ui/core";
import EventIcon from "@material-ui/icons/Event";
import GroupIcon from "@material-ui/icons/Group";

function Aside({ username }) {
  return (
    <div className="Home">
      <div className="header">
        <h2>Home </h2>
        <Button>connect</Button>
      </div>
      <div className="headername">
        <div className="headd">
          <h3>
            <Avatar className="avtar" />
            {username}
          </h3>
          <h3>
            <EventIcon />
            Events
          </h3>
          <h3>
            <GroupIcon />
            Friends
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Aside;
