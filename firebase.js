// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIFSHKj0touyO7fX-Sxp0OgPKQYzmgDqg",
  authDomain: "flashcards-saas-af3ab.firebaseapp.com",
  projectId: "flashcards-saas-af3ab",
  storageBucket: "flashcards-saas-af3ab.appspot.com",
  messagingSenderId: "414713075081",
  appId: "1:414713075081:web:545ccee3be62269b75bd58",
  measurementId: "G-KPKG3TTXCN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}