// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import dotenv from 'dotenv';
dotenv.config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${process.env.FIREBASE_API_KEY}`,
  authDomain: "halcyonx-f7af3.firebaseapp.com",
  projectId: "halcyonx-f7af3",
  storageBucket: "halcyonx-f7af3.appspot.com",
  messagingSenderId: "672091751263",
  appId: "1:672091751263:web:e1913ca1d2ba636e8f6cea",
  measurementId: "G-8GP00N5XE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);