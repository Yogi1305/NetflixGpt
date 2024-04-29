// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvt_Cjgruy-wF2Rl4dUnWofHvuj0uTWxw",
  authDomain: "netflix-gpt-2d392.firebaseapp.com",
  projectId: "netflix-gpt-2d392",
  storageBucket: "netflix-gpt-2d392.appspot.com",
  messagingSenderId: "196493117069",
  appId: "1:196493117069:web:d9db339c2a21578c7304c4",
  measurementId: "G-LMF2PLF9BV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();