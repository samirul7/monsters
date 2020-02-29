import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDRAT_rxgYC2rIC7SHMoRP8QYx9buSrqQo",
  authDomain: "sami-ecommerce.firebaseapp.com",
  databaseURL: "https://sami-ecommerce.firebaseio.com",
  projectId: "sami-ecommerce",
  storageBucket: "sami-ecommerce.appspot.com",
  messagingSenderId: "326765893009",
  appId: "1:326765893009:web:6e219051aa735fa9387630",
  measurementId: "G-4F6PJSSXY9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;