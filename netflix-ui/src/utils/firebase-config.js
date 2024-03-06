// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz5j-pH7OGkOKeaRltOw_0ULg1m8TwRr8",
  authDomain: "netflix-4e82a.firebaseapp.com",
  projectId: "netflix-4e82a",
  storageBucket: "netflix-4e82a.appspot.com",
  messagingSenderId: "224350909566",
  appId: "1:224350909566:web:961307bce2831576c8142f",
  measurementId: "G-B445ZPS98X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app); // Initialize Firebase Auth and store it in firebaseAuth

export { firebaseAuth };
