// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import 'firebase/storage';



// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBNli2_umdvpCKlLEr3LH_7lwl8707fKtA",
    authDomain: "chat-app-b75a5.firebaseapp.com",
    projectId: "chat-app-b75a5",
    storageBucket: "chat-app-b75a5.appspot.com",
    messagingSenderId: "670659314603",
    appId: "1:670659314603:web:d904fe47b44be7c78f48ee"
  };

  const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    const storage = getStorage();
    const db = getFirestore();
    export {auth, storage, db};
    