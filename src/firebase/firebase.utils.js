import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBwXN3F5gmSbm1kqPkNwYLXejNeTv7PUHc",
  authDomain: "crown-db-3417b.firebaseapp.com",
  projectId: "crown-db-3417b",
  storageBucket: "crown-db-3417b.appspot.com",
  messagingSenderId: "181639947184",
  appId: "1:181639947184:web:109789179ce44298f36c75",
  measurementId: "G-B2R13DTPEG",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
