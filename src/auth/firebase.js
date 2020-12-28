import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAEMV93LorPSUYGQZXWmZdeWydrOz6F6vI",
    authDomain: "clone-3c374.firebaseapp.com",
    databaseURL: "https://clone-3c374-default-rtdb.firebaseio.com",
    projectId: "clone-3c374",
    storageBucket: "clone-3c374.appspot.com",
    messagingSenderId: "537232452794",
    appId: "1:537232452794:web:ef620e4b7d085d1d7ee683",
    measurementId: "G-S762G1VDEP",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };