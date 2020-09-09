import React from "react";
import { Avatar } from "@material-ui/core";
import "./Iamgenav.css";
function Imagenav({ image }) {
  return (
    <div>
      <div className="imgcard">
        <div className="head">
          <Avatar className="ava" />
        </div>
        <img src={image} alt="man" />
      </div>
    </div>
  );
}

export default Imagenav;
