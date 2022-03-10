// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw4zr1qrGYZe_Hy7zrobclqinsTZ7kj7w",
  authDomain: "beppo-home.firebaseapp.com",
  projectId: "beppo-home",
  storageBucket: "beppo-home.appspot.com",
  messagingSenderId: "101766687641",
  appId: "1:101766687641:web:d44915d4e9c150f8078108"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)