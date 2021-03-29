import {useState} from 'react'

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// // Add the Firebase products that you want to use
// import "firebase/auth";
// import "firebase/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqRvlZ2z93JJwkeV2AU1opSR_6y3srHAM",
  authDomain: "booking-app-5f1de.firebaseapp.com",
  projectId: "booking-app-5f1de",
  storageBucket: "booking-app-5f1de.appspot.com",
  messagingSenderId: "104953635657",
  appId: "1:104953635657:web:b531c4d0bdf1152db17098",
  measurementId: "G-ER090T9DKG"
};

var fireb = firebase.initializeApp(firebaseConfig);

export default fireb;