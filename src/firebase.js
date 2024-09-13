// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8ZPeun_NGGLTlgWSGXwwy25zilg9UJ9c",
  authDomain: "todo-list-4656e.firebaseapp.com",
  projectId: "todo-list-4656e",
  storageBucket: "todo-list-4656e.appspot.com",
  messagingSenderId: "148101594972",
  appId: "1:148101594972:web:80e59ed36e633524714b99",
  measurementId: "G-LPF847HGYD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const provider=new GoogleAuthProvider();

export const auth=getAuth();

