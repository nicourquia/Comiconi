import firebase from 'firebase/compat/app'
import "firebase/compat/firestore"
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCJe80-x1Sa0iAlo3pWkAzrg4BKMfJVnk0",
    authDomain: "curso-react-urquia.firebaseapp.com",
    projectId: "curso-react-urquia",
    storageBucket: "curso-react-urquia.appspot.com",
    messagingSenderId: "142765614633",
    appId: "1:142765614633:web:887ebd9ed537ba6658de38",
    measurementId: "G-7JH4T97WDV"
  };

firebase.initializeApp(firebaseConfig)
firebase.db = firebase.firestore()
firebase.auth = firebase.auth()
export default firebase;