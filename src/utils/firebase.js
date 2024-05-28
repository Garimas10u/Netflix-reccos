
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5Efe2-AGlCdCkwbbk74kUeBbVhmZ4h8o",
  authDomain: "netflix-gpt-fe623.firebaseapp.com",
  projectId: "netflix-gpt-fe623",
  storageBucket: "netflix-gpt-fe623.appspot.com",
  messagingSenderId: "367607214909",
  appId: "1:367607214909:web:ced12786e9337e8cddcb54",
  measurementId: "G-FFB91HDFJ3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();