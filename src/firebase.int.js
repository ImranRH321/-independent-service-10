// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAv_xDHkV7UfJ9TWyJXuq6nnkfcGWvKFaA",
    authDomain: "travel-booking-d22b6.firebaseapp.com",
    projectId: "travel-booking-d22b6",
    storageBucket: "travel-booking-d22b6.appspot.com",
    messagingSenderId: "794606091951",
    appId: "1:794606091951:web:c1ec3fd7ae3c9dafb19e5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth