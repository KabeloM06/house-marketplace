// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGzselLcCS1c_nhIAkLoux5mLyGceqkNA",
  authDomain: "house-marketplace-app-7ce74.firebaseapp.com",
  projectId: "house-marketplace-app-7ce74",
  storageBucket: "house-marketplace-app-7ce74.appspot.com",
  messagingSenderId: "804662673107",
  appId: "1:804662673107:web:7f9fe943936eb05048de26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();