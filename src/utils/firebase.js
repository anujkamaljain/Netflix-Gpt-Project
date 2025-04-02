// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAITouFbO_frnesjH58zE-ejadCyKAOEMY",
  authDomain: "netflix-gpt-c9f5f.firebaseapp.com",
  projectId: "netflix-gpt-c9f5f",
  storageBucket: "netflix-gpt-c9f5f.firebasestorage.app",
  messagingSenderId: "1027282423228",
  appId: "1:1027282423228:web:a50e0dfd04b437179dafb9",
  measurementId: "G-115HW9LK5B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
