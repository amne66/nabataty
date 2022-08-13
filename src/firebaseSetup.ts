import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCabmZ25SQ4pU3KJIrxC-KVGH-OtNb9lC4",
  authDomain: "nabataty-project.firebaseapp.com",
  projectId: "nabataty-project",
  storageBucket: "nabataty-project.appspot.com",
  messagingSenderId: "67905887873",
  appId: "1:67905887873:web:6b12cbe846f4f4f2913780"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app); // For Using Database
