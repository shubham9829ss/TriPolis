// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sahandestate-c5396.firebaseapp.com",
  projectId: "sahandestate-c5396",
  storageBucket: "sahandestate-c5396.appspot.com",
  messagingSenderId: "515397847125",
  appId: "1:515397847125:web:1bad3c4d581719d178acdc",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
