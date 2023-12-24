// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8vi5HGVhI7aDr3pxbqRSXw79l0Nb8we4",
  authDomain: "contact-manager-4c0bb.firebaseapp.com",
  projectId: "contact-manager-4c0bb",
  storageBucket: "contact-manager-4c0bb.appspot.com",
  messagingSenderId: "695014283080",
  appId: "1:695014283080:web:6fb096c122b19b7298857d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;