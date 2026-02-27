// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-11d70.firebaseapp.com",
  projectId: "interviewiq-11d70",
  storageBucket: "interviewiq-11d70.firebasestorage.app",
  messagingSenderId: "452863799848",
  appId: "1:452863799848:web:8eab5f3862a4927173bb1d"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()
console.log(import.meta.env.VITE_FIREBASE_APIKEY);

export {auth,provider}