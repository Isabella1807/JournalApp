// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsdMqTpOS6QFUYMagu7YweKPihY8gsbhY",
  authDomain: "journalapp-38879.firebaseapp.com",
  projectId: "journalapp-38879",
  storageBucket: "journalapp-38879.firebasestorage.app",
  messagingSenderId: "620064540571",
  appId: "1:620064540571:web:6b215e6a0ead3e6f6c433e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
  db
}
