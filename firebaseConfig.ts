// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK75mCqOwDyysPmEWPcCFk81N9OkJvrUg",
  authDomain: "teste-bd-6116a.firebaseapp.com",
  projectId: "teste-bd-6116a",
  storageBucket: "teste-bd-6116a.firebasestorage.app",
  messagingSenderId: "945402400954",
  appId: "1:945402400954:web:0fef1ae730f1c41abfb283",
  measurementId: "G-2LFBEJEJS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;