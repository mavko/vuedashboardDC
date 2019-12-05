import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCEfyPLGc0G8vHGX72scrOoZWV-14FhPC4",
    authDomain: "vue-hqq.firebaseapp.com",
    databaseURL: "https://vue-hqq.firebaseio.com",
    projectId: "vue-hqq",
    storageBucket: "vue-hqq.appspot.com",
    messagingSenderId: "637708008385",
    appId: "1:637708008385:web:991e4b0e85ca80bdedcd40",
    measurementId: "G-T69FD0TQ9V"

});

export const db = firebaseApp.firestore();