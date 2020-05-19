import * as firebase from "firebase/app";
import "firebase/auth";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyADxKTgaPi6r1WbMnLXuyYQKfFWy15KnoU",
    authDomain: "licenta-43e4e.firebaseapp.com",
    databaseURL: "https://licenta-43e4e.firebaseio.com",
    projectId: "licenta-43e4e",
    storageBucket: "licenta-43e4e.appspot.com",
    messagingSenderId: "79374508135",
    appId: "1:79374508135:web:6476463ccfdc32897434c2",
    measurementId: "G-87ZJGS95RH"
  });

  export default firebaseApp;