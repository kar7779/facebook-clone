import React from "react";
import "./Aside.css";
import { Button, Avatar } from "@material-ui/core";
import EventIcon from "@material-ui/icons/Event";
import GroupIcon from "@material-ui/icons/Group";
import OndemandVideoTwoToneIcon from "@material-ui/icons/OndemandVideoTwoTone";
import StorefrontTwoToneIcon from "@material-ui/icons/StorefrontTwoTone";

function Aside({ username, photo }) {
  return (
    <div className="Home">
      <div className="headername">
        <div className="headd">
          <h3>
            <Avatar className="avtar" src={photo} />
            {username}
          </h3>
          <h3>
            <EventIcon color="primary" />
            Events
          </h3>
          <h3>
            <GroupIcon color="primary" />
            Friends
          </h3>
          <h3>
            <OndemandVideoTwoToneIcon color="primary" />
            Videos
          </h3>
          <h3>
            <StorefrontTwoToneIcon color="primary" />
            Marketplace
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Aside;
