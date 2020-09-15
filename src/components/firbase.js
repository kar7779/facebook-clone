import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD8aoLXyIBIToeL13RusOhD55Kva34vA-4",
  authDomain: "fb-clone-e33ce.firebaseapp.com",
  databaseURL: "https://fb-clone-e33ce.firebaseio.com",
  projectId: "fb-clone-e33ce",
  storageBucket: "fb-clone-e33ce.appspot.com",
  messagingSenderId: "1010824928975",
  appId: "1:1010824928975:web:568cd4dbbddfbeaa9e61ba",
  measurementId: "G-F4VSYF4FJE",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
