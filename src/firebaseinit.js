// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo6ekL7YDEm95YC7ufp9gop0pUIAIZ4MY",
  authDomain: "fir-6f235.firebaseapp.com",
  projectId: "fir-6f235",
  storageBucket: "fir-6f235.appspot.com",
  messagingSenderId: "179864775162",
  appId: "1:179864775162:web:b0dc707226465b03d15c43",
  measurementId: "G-11TB2FR8VS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);