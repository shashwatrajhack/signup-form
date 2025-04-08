import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBDZ_KXK8-kklYsBPYypaIBqglUItgwfIw",
    authDomain: "nextjs-webapp-28433.firebaseapp.com",
    projectId: "nextjs-webapp-28433",
    storageBucket: "nextjs-webapp-28433.firebasestorage.app",
    messagingSenderId: "297613985794",
    appId: "1:297613985794:web:3f6743176dbb7b1f547f1b",
    measurementId: "G-QJFVQSPTXN"
  };
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
