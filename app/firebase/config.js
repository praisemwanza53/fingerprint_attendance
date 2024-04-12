

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBquWZdb6I9SEn6agxs7_uVDf52QGo42Tk",
  authDomain: "fingureprintattendance-3a343.firebaseapp.com",
  projectId: "fingureprintattendance-3a343",
  storageBucket: "fingureprintattendance-3a343.appspot.com",
  messagingSenderId: "372524123927",
  appId: "1:372524123927:web:8f6aed37dacb2bdd111952",
  measurementId: "G-Q72730285X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);