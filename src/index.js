// import { initializeApp } from 'firebase/app';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';


const firebaseConfig = {
  apiKey: "AIzaSyAGVFttwRw232PwgRDD5_jvS6Ba1Fge6KQ",
  authDomain: "colegio-e395f.firebaseapp.com",
  projectId: "colegio-e395f",
  storageBucket: "colegio-e395f.appspot.com",
  messagingSenderId: "922910242809",
  appId: "1:922910242809:web:dcc435e0170e5ab58a2f28",
  measurementId: "G-QPNHDBP2BH"
}

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
// const db = getFirestore(firebase);

onAuthStateChanged(auth, user => {
  if (user != null) {
    console.log('logged in')
  } else {
    console.log('No user')
  }
})