import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyAytyzy9TNSBGZGnKUPDEMFcUcs69tJKM4",
    authDomain: "facebook-messenger-clone-2bb1e.firebaseapp.com",
    projectId: "facebook-messenger-clone-2bb1e",
    storageBucket: "facebook-messenger-clone-2bb1e.appspot.com",
    messagingSenderId: "594118366302",
    appId: "1:594118366302:web:5a784c587dd6db7bbd10cf",
    measurementId: "G-MY257MRB26"


});
    

const db=firebaseApp.firestore();
export default db;
