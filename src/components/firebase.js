import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBEVllJxzf81oxyB79JtLA8u0AborWwsrI",
  authDomain: "swiggy-2b798.firebaseapp.com",
  projectId: "swiggy-2b798",
  storageBucket: "swiggy-2b798.appspot.com",
  messagingSenderId: "420413365774",
  appId: "1:420413365774:web:14798852d81cee2cefe65f",
  measurementId: "G-ZJYQX5QDWW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth  = getAuth (app);
export const provider = new GoogleAuthProvider();