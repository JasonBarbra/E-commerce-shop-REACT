import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD59FC7MzsvwFy7ti3Ipci0ePmKUz1sEio",
    authDomain: "jason-shop.firebaseapp.com",
    projectId: "jason-shop",
    storageBucket: "jason-shop.appspot.com",
    messagingSenderId: "122011945366",
    appId: "1:122011945366:web:cf5c0521bc39a31b38b5b7"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

