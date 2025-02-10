// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);