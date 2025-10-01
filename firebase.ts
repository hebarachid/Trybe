// Import the functions you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF9q08_lPpFFrCN2X3AZ8EXUppRc4vW1U",
  authDomain: "trybe-2d135.firebaseapp.com",
  projectId: "trybe-2d135",
  storageBucket: "trybe-2d135.firebasestorage.app",
  messagingSenderId: "123986006157",
  appId: "1:123986006157:web:7ad3d39d7cee5ae7afd2c4",
  measurementId: "G-R59MYQ1VCS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Analytics only works in the browser, so we check first
let analytics: ReturnType<typeof getAnalytics> | undefined;
isSupported().then((yes) => {
  if (yes) analytics = getAnalytics(app);
});

export { app, analytics };