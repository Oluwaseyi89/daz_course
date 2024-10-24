// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcMPVDz3xEoqLy18N3KUoSnLXXwKvhB60",
  authDomain: "daz-course-by-seyi.firebaseapp.com",
  projectId: "daz-course-by-seyi",
  storageBucket: "daz-course-by-seyi.appspot.com",
  messagingSenderId: "164099603890",
  appId: "1:164099603890:web:59d2247cffbd687a83f8ab",
  measurementId: "G-4CE6C4B7PM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);