// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-dac68.firebaseapp.com",
  projectId: "mern-auth-dac68",
  storageBucket: "mern-auth-dac68.appspot.com",
  messagingSenderId: "91884207625",
  appId: "1:91884207625:web:ed64862721f57cf1ee42d8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);