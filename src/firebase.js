import firebase from 'firebase';

var firebaseApp =firebase.initializeApp({
    apiKey: "AIzaSyC6WHZ_wCvTYhjsoDwcGmPWYmLGc46WpIY",
    authDomain: "contactpage-548b5.firebaseapp.com",
    projectId: "contactpage-548b5",
    storageBucket: "contactpage-548b5.appspot.com",
    messagingSenderId: "877975395948",
    appId: "1:877975395948:web:fcd5a029b11abea728c249"
  });
firebase.analytics();
  
var db = firebaseApp.firestore();



export { db };
