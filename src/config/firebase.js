// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyBtuSnuITUBLRiSaBEnMA35lagV_6oba78",
authDomain: "rehavita-cb8b8.firebaseapp.com",
projectId: "rehavita-cb8b8",
storageBucket: "rehavita-cb8b8.appspot.com",
messagingSenderId: "989528843046",
appId: "1:989528843046:web:c498397b778c6695e217e7",
measurementId: "G-2DP15QJF2E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);