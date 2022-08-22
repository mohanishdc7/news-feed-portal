import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvBUjMpcFu3w283wMfVyRa_LXap1ZG0Eo",
  authDomain: "news-feed-management.firebaseapp.com",
  projectId: "news-feed-management",
  storageBucket: "news-feed-management.appspot.com",
  messagingSenderId: "417767876950",
  appId: "1:417767876950:web:386f55f23dc3d3e5b80ef7",
  measurementId: "G-5Z37PZPM7W",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export default app;
