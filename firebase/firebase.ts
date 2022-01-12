import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6xuxah9a9MvOxfwVPdvOTzjcf7xOLjs8",
  authDomain: "food-recipe-bd319.firebaseapp.com",
  databaseURL:
    "https://food-recipe-bd319-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "food-recipe-bd319",
  storageBucket: "food-recipe-bd319.appspot.com",
  messagingSenderId: "1027498787515",
  appId: "1:1027498787515:web:d164eef5ddf200a2c75f9e",
  measurementId: "G-JNXBNNBVJE",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default getFirestore();
