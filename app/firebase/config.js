// Import the functions you need from the SDKs you need
import { initializeApp,getApps  } from "firebase/app";


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;