// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfBHgX6E3jZ3dhzO0mLEQlhM1gjJ4oRJo",
  authDomain: "worknest-ce3d1.firebaseapp.com",
  projectId: "worknest-ce3d1",
  storageBucket: "worknest-ce3d1.appspot.com",
  messagingSenderId: "1049775176369",
  appId: "1:1049775176369:web:6d8e30d975b3f3aca64090",
  measurementId: "G-GC13586Q2C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const db = getFirestore(app);

export { auth, googleProvider, facebookProvider, db };
