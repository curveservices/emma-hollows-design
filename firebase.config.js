import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE,
  authDomain: "emma-hollows-design.firebaseapp.com",
  projectId: "emma-hollows-design",
  storageBucket: "emma-hollows-design.firebasestorage.app",
  messagingSenderId: "109363074398",
  appId: "1:109363074398:web:3bf5ba43d782a00da1ebcf",
  measurementId: "G-W3LJR9XFMM"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);