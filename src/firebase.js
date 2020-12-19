import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC7sSvcZNtqLYwPA3sIqI8wrDSQ-WX8nVA",
  authDomain: "fb-crud-react-e9104.firebaseapp.com",
  projectId: "fb-crud-react-e9104",
  storageBucket: "fb-crud-react-e9104.appspot.com",
  messagingSenderId: "759116974567",
  appId: "1:759116974567:web:82fa29c47880c87b195542",
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
