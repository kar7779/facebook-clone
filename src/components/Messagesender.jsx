import { Avatar } from "@material-ui/core";
import { PhotoLibrary, Videocam, EmojiEmotions } from "@material-ui/icons";
import "./message.css";

import React, { useState } from "react";
import { db } from "./firbase";
import firebase from "firebase";

function Messagesender({ photo, username }) {
  const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");

  const sendmessage = (e) => {
    e.preventDefault(); // this will prevent the default behaviour of our app by  not refereshing the page
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      username: username,
      propic: photo,
      imageUrl: inputUrl,
    });

    setInput("");
    setInputUrl("");
  };
  return (
    <div className="messagebox">
      <div className="main_message">
        <Avatar src={photo} />
        <form action="">
          <input
            className="txt"
            type="text"
            value={input}
            placeholder="what's on your mind"
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            className="imgg"
            type="text"
            value={inputUrl}
            placeholder="input url"
            onChange={(e) => setInputUrl(e.target.value)}
          />
          <button onClick={sendmessage} type="submit">
            HiddenSubmit
          </button>
        </form>
      </div>

      <div className="message_buttons">
        <div className="option">
          <Videocam color="secondary" />
          <h3>Live Video</h3>
        </div>
        <div className="option">
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/Videos</h3>
        </div>
        <div className="option">
          <EmojiEmotions style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default Messagesender;
