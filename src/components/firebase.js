// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth ,GoogleAuthProvider,} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP4So_EvtZ8kjsym5GMepE1nLOGStab-I",
  authDomain: "ecommerce-d88d4.firebaseapp.com",
  projectId: "ecommerce-d88d4",
  storageBucket: "ecommerce-d88d4.firebasestorage.app",
  messagingSenderId: "75017588846",
  appId: "1:75017588846:web:f355f63644f67c1619567f",
  measurementId: "G-SFVGLKV1X1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();