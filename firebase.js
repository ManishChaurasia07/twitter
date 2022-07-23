// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "twitter-v4-46939.firebaseapp.com",
  projectId: "twitter-v4-46939",
  storageBucket: "twitter-v4-46939.appspot.com",
  messagingSenderId: "664094137433",
  appId: "1:664094137433:web:0878e33ab96e20dc6f2548"
};

//initializeApp//
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export {app, db, storage};
