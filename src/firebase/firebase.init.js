// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPj6wF_mg2_umvTkSqYtOxsHWqIb2VX7M",
  authDomain: "auth-test-b40d3.firebaseapp.com",
  projectId: "auth-test-b40d3",
  storageBucket: "auth-test-b40d3.appspot.com",
  messagingSenderId: "211977223709",
  appId: "1:211977223709:web:8201e7f32c484fbfe950f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth