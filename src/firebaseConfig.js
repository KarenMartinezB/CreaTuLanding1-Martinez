// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALn-f61ifag-QsNhK9TWIAClsUPNzh6gM",
  authDomain: "reactjs-karenmartinez.firebaseapp.com",
  projectId: "reactjs-karenmartinez",
  storageBucket: "reactjs-karenmartinez.firebasestorage.app",
  messagingSenderId: "512284073292",
  appId: "1:512284073292:web:782821f9b1f64aced683e9",
  measurementId: "G-2NJFKC98Y6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Exporta Firestore
export const db = getFirestore(app);