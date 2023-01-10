import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDbtQyq30mkJhzUIXM0dVBlIdZStuP7C1E",
  authDomain: "clone-67ff1.firebaseapp.com",
  projectId: "clone-67ff1",
  storageBucket: "clone-67ff1.appspot.com",
  messagingSenderId: "1003056479297",
  appId: "1:1003056479297:web:b8426b20ba4513cc151ac0",
  measurementId: "G-7QS85ZHTHW",
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
