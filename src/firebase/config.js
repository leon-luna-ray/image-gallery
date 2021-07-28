// import * as firebase from 'firebase/app';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'image-gallery-1ce58.firebaseapp.com',
  projectId: 'image-gallery-1ce58',
  storageBucket: 'image-gallery-1ce58.appspot.com',
  messagingSenderId: 616747208526,
  appId: '1:616747208526:web:01b0e2e47ecfd4399b581f',
  measurementId: 'G-RYTTNQ74Q6',
};

// initialize firebase
const app = firebase.initializeApp(firebaseConfig);
// make sure to change storage rules to only allow authenticated users when changing to production
// this process is used to interact with the backend storage
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { app, projectStorage, projectFirestore, timestamp };
