import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCe7dv9tkG6p3MogGyQnhKFiXgZxgMmFfY",
  authDomain: "author-blog-59614.firebaseapp.com",
  projectId: "author-blog-59614",
  storageBucket: "author-blog-59614.firebasestorage.app",
  messagingSenderId: "426763533894",
  appId: "1:426763533894:web:f37c867ebaef221d511447",
  measurementId: "G-BWK6J1KPZQ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);