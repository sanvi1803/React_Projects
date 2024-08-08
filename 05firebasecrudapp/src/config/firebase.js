import { initializeApp } from "firebase/app"
// above statement is to intilize firebase app
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyBgkDn37ylXNe-fnmWK4jwXZqPjwnX19Qk",
    authDomain: "vite-contact-ab178.firebaseapp.com",
    projectId: "vite-contact-ab178",
    storageBucket: "vite-contact-ab178.appspot.com",
    messagingSenderId: "973562982354",
    appId: "1:973562982354:web:c9cd20ab362165c272620b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// with above statement we have connected aur firebase app i.e. htis project to our firebase account