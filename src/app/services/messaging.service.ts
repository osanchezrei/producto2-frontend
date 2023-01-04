import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyDqVLf_nE15XdaWXbKGa9tP3yPRDS7ligg",
    authDomain: "frontend-e257b.firebaseapp.com",
    projectId: "frontend-e257b",
    storageBucket: "frontend-e257b.appspot.com",
    messagingSenderId: "943284013949",
    appId: "1:943284013949:web:54881d713a4697be3c5a14"
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const db = getFirestore(app);
