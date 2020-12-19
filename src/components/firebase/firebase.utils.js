import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWOm6g6Nwrx3Gftr9hor5pyuj2Ot1eCFA",
  authDomain: "crwn-db-6a2ac.firebaseapp.com",
  projectId: "crwn-db-6a2ac",
  storageBucket: "crwn-db-6a2ac.appspot.com",
  messagingSenderId: "257886036122",
  appId: "1:257886036122:web:94b4b9c069454ce24cbf23",
  measurementId: "G-LJZ0THNC7C",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//from Firebase Docs
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
