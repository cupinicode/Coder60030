// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWGj2G3B_fgHRLiO5eTNNbnScDa17PBNc",
  authDomain: "coderhouse-60030-1.firebaseapp.com",
  projectId: "coderhouse-60030-1",
  storageBucket: "coderhouse-60030-1.appspot.com",
  messagingSenderId: "221046136266",
  appId: "1:221046136266:web:f9911939808646a4940333"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// inicialización de la BDD
export const db = getFirestore(app)