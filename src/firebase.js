// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo-uQhMLev_vl2etex-dsKie9WOrbU2e4",
  authDomain: "clone-bb20e.firebaseapp.com",
  projectId: "clone-bb20e",
  storageBucket: "clone-bb20e.appspot.com",
  messagingSenderId: "235682420472",
  appId: "1:235682420472:web:1b2e80dc241dc6eeb44d0d",
  measurementId: "G-1T8DLDYM4T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);