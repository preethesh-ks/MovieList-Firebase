// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize firestore
export const db = getFirestore(app);
