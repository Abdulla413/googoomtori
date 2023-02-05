// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkK1OO2vYkM_JzQPlDxoTanzRMhG2WDww",
  authDomain: "googoom-tori.firebaseapp.com",
  projectId: "googoom-tori",
  storageBucket: "googoom-tori.appspot.com",
  messagingSenderId: "277747091055",
  appId: "1:277747091055:web:04a946e01a1a7750ed2f9a",
  measurementId: "G-VMZM306NL8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)