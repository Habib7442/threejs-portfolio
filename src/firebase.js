import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const app = firebase.initializeApp({
  // apiKey: "AIzaSyD2bmyj0ZbPQ2PEjkLaI2HosH0xEHbRwp4",
  // authDomain: "portfolio-1706d.firebaseapp.com",
  // databaseURL: "https://portfolio-1706d-default-rtdb.firebaseio.com",
  // projectId: "portfolio-1706d",
  // storageBucket: "portfolio-1706d.appspot.com",
  // messagingSenderId: "198739054629",
  // appId: "1:198739054629:web:aa394c9d5505f13986efcc",
  // measurementId: "G-RYDK44CZTN",
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL:import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId:import.meta.env.VITE_MEASUREMENT_ID,
});

export const auth = app.auth();
export const db = getFirestore();
export const storage = getStorage(app);
export default app;
