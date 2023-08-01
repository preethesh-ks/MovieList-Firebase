// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFDvLl0gE3NyAE2uZnuVBrA_-oqhiplPo",
  authDomain: "react-firebase-b6730.firebaseapp.com",
  projectId: "react-firebase-b6730",
  storageBucket: "react-firebase-b6730.appspot.com",
  messagingSenderId: "20814923840",
  appId: "1:20814923840:web:30d00257fff7bd980177a5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize firestore
export const db = getFirestore(app);
