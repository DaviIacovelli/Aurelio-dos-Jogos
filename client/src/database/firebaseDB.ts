// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgEJCdOtr9yWlbErgag5zqcyfo5M85zzA",
  authDomain: "aurelio-dos-jogos.firebaseapp.com",
  projectId: "aurelio-dos-jogos",
  storageBucket: "aurelio-dos-jogos.firebasestorage.app",
  messagingSenderId: "798254371098",
  appId: "1:798254371098:web:3a701a841abfce1fae1ca3",
  measurementId: "G-DWRM23VW3G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
