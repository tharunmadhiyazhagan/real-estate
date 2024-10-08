// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "iconic-construction.firebaseapp.com",
  projectId: "iconic-construction",
  storageBucket: "iconic-construction.appspot.com",
  messagingSenderId: "755363360639",
  appId: "1:755363360639:web:754773d7d3bff5e6b6344a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
