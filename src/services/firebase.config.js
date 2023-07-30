// firebase/firestore
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_ID,
  authDomain: "px-guestbook.firebaseapp.com",
  projectId: "px-guestbook",
  storageBucket: "px-guestbook.appspot.com",
  messagingSenderId: "230399462117",
  appId: "1:230399462117:web:b3e681f9d0bb1fdf80220c",
  measurementId: "G-WK9VWR8FLT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
