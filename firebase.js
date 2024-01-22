// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7nVpYAQpPjOLlqXfE6JoMqav_YpUecPY",
  authDomain: "news-app-2e216.firebaseapp.com",
  projectId: "news-app-2e216",
  storageBucket: "news-app-2e216.appspot.com",
  messagingSenderId: "1055811602359",
  appId: "1:1055811602359:web:6dfeedf8d0598c0f600a32",
  measurementId: "G-3ZVZ0L9QHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);