// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXaqMRWSB1u4C1KXzyDnct3zJWwnoE6Sk",
  authDomain: "new-project-480da.firebaseapp.com",
  projectId: "new-project-480da",
  storageBucket: "new-project-480da.appspot.com",
  messagingSenderId: "91741277682",
  appId: "1:91741277682:web:b3bf21850c75d96285ef6b",
  measurementId: "G-4759V4ZRT4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
