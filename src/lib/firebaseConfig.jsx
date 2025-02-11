"use client";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaXWSTXnnSNA9TQBKO_vepzWaqqs9A0AI",
  authDomain: "ayadiglocalschool.firebaseapp.com",
  projectId: "ayadiglocalschool",
  storageBucket: "ayadiglocalschool.firebasestorage.app",
  messagingSenderId: "335382570058",
  appId: "1:335382570058:web:0c9c6ce30e13ad05d8b2b3",
  measurementId: "G-GHHC736XL8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Analytics (only on the client-side)
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, db, analytics };
