import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDULocWxy61QPVmaTzULMB4GWJGW0z41t4",
  authDomain: "icps-professional-dev.firebaseapp.com",
  projectId: "icps-professional-dev",
  storageBucket: "icps-professional-dev.appspot.com",
  messagingSenderId: "688928983639",
  appId: "1:688928983639:web:a0f661bc7a69b0f8913112",
  measurementId: "G-DNV7RESXCF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth, app } 