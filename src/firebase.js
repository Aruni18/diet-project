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
  apiKey: "AIzaSyAGUcr8dVcWuXZTVnXK-pdfZm99eRSu78I",
  authDomain: "diet-project-57b01.firebaseapp.com",
  projectId: "diet-project-57b01",
  storageBucket: "diet-project-57b01.firebasestorage.app",
  messagingSenderId: "994671864537",
  appId: "1:994671864537:web:9438410eb0b1a757476cc8",
  //measurementId: "G-VK5ETWMQ9P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();
export const db=getFirestore(app);
