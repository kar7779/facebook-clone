import React, { useEffect, useState } from "react";
import App from "./App";
import { auth } from "./components/firbase";
import firebase from "firebase";
import { Button } from "@material-ui/core";

function login() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [user, setUser] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        console.log(authuser.displayName);
        setUser(authuser);
      } else {
        setUser(null);
      }
    });
  }, []);
  let provider = new firebase.auth.GoogleAuthProvider();
  const loginn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).then((authuser) => {
      setUser(authuser.user);
      console.log(setUser);
    });
  };

  return (
    <div>
      {!user ? (
        <div className="LoginUi">
          <img
            src="data:image/png;base64,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"
            alt="logo"
          />
          <Button onClick={loginn}>login</Button>
        </div>
      ) : (
        <>
          <App userr={user} />
        </>
      )}
    </div>
  );
}

export default login;
