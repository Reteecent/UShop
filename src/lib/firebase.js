/**
 // src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlWmEWJyRmoEKNXyP9AmHA_kFqxoGjZdw",
  authDomain: "ushop-8d2ad.firebaseapp.com",
  projectId: "ushop-8d2ad",
  storageBucket: "ushop-8d2ad.firebasestorage.app",
  messagingSenderId: "233796620732",
  appId: "1:233796620732:web:c743ddca4b03764b5c9bb9",
  measurementId: "G-NK0NMYWEL9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
**/


// src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlWmEWJyRmoEKNXyP9AmHA_kFqxoGjZdw",
  authDomain: "ushop-8d2ad.firebaseapp.com",
  projectId: "ushop-8d2ad",
  storageBucket: "ushop-8d2ad.firebasestorage.app",
  messagingSenderId: "233796620732",
  appId: "1:233796620732:web:c743ddca4b03764b5c9bb9",
  measurementId: "G-NK0NMYWEL9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore

export { auth, db }; // Export both auth and db