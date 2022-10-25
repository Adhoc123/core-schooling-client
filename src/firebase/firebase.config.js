// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv2fblKWF9eNZCHttC6fRh1u1_uoOKevU",
  authDomain: "core-schooling.firebaseapp.com",
  projectId: "core-schooling",
  storageBucket: "core-schooling.appspot.com",
  messagingSenderId: "80093306721",
  appId: "1:80093306721:web:fb6379a2c54020cee92f20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;