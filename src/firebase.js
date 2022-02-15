import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBo-uQhMLev_vl2etex-dsKie9WOrbU2e4",
  authDomain: "clone-bb20e.firebaseapp.com",
  projectId: "clone-bb20e",
  storageBucket: "clone-bb20e.appspot.com",
  messagingSenderId: "235682420472",
  appId: "1:235682420472:web:1b2e80dc241dc6eeb44d0d",
  measurementId: "G-1T8DLDYM4T"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};