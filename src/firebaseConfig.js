// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig  = {
  apiKey: process.env.API-KEY,
  authDomain: "googoom-tori.firebaseapp.com",
  projectId: "googoom-tori",
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: "277747091055",
  appId:process.env.APP_ID,
  measurementId: "G-VMZM306NL8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db=getFirestore();


