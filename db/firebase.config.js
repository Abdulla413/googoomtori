// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.API_KEY ,
  authDomain:import.meta.env.AUTH_DOMAIN,
  projectId:import.meta.env.PROJECT_ID,
  storageBucket: import.meta.env.STORAGE_BUCKET,
  messagingSenderId: "389607860144",
  appId: import.meta.env.APP_ID,
  measurementId: "G-018K2L88X9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const {db } = getStorage(app);

