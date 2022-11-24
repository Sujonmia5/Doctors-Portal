// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyC-GhIPUKYtId-qNiNxDtv-UigZsInnl8E",
    // authDomain: "doctors-portal-9cd34.firebaseapp.com",
    // projectId: "doctors-portal-9cd34",
    // storageBucket: "doctors-portal-9cd34.appspot.com",
    // messagingSenderId: "381570478441",
    // appId: "1:381570478441:web:d2261451ef8943cf6bcdf8"

    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;