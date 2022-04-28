// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-0QqOsV64i5wj-FRYFWICMKVeZ6DGGzQ",
  authDomain: "contacts-app-47874.firebaseapp.com",
  databaseURL: "https://contacts-app-47874-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "contacts-app-47874",
  storageBucket: "contacts-app-47874.appspot.com",
  messagingSenderId: "869621984616",
  appId: "1:869621984616:web:de338f7911cc3b45a3badd"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;

