// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJrudPJLdp-Ljphtu8F9LPjOHfc9gYZKY",
  authDomain: "todo-84a81.firebaseapp.com",
  projectId: "todo-84a81",
  storageBucket: "todo-84a81.appspot.com",
  messagingSenderId: "885863368980",
  appId: "1:885863368980:web:3a6541b2294cc37b6d1a01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);