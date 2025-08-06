// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClCsz58cj38CbpO3d60qPoRx6_2ka9BOs",
  authDomain: "fit-fuel-761fc.firebaseapp.com",
  projectId: "fit-fuel-761fc",
  storageBucket: "fit-fuel-761fc.firebasestorage.app",
  messagingSenderId: "1005125757206",
  appId: "1:1005125757206:web:7d7fecc5501f6840044837",
  measurementId: "G-3HY8YXRLCP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()
export const db=getFirestore()