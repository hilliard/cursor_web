import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1HQjS2dH0RiTL1qzYRN3l35G3QiM6_gw",
  authDomain: "cursor-web.firebaseapp.com",
  projectId: "cursor-web",
  storageBucket: "cursor-web.appspot.com",
  messagingSenderId: "650697445353",
  appId: "1:650697445353:web:ca17794de7063b9a2f0578",
  measurementId: "G-NSQBEZYWXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
