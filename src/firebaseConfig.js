
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-hXQ1tNe6gXIGenSF5_jA_XyIvthmcnQ",
  authDomain: "doriel-store.firebaseapp.com",
  projectId: "doriel-store",
  storageBucket: "doriel-store.firebasestorage.app",
  messagingSenderId: "211915309643",
  appId: "1:211915309643:web:dc630f51782c9c81c783ce"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);