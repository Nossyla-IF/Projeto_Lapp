import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';




let firebaseConfig = {
    apiKey: "AIzaSyArrU82MtEBrdGfp0lmXRfpKqxaxXNHLYY",
    authDomain: "checkapp-db.firebaseapp.com",
    databaseURL: "https://checkapp-db-default-rtdb.firebaseio.com",
    projectId: "checkapp-db",
    storageBucket: "checkapp-db.appspot.com",
    messagingSenderId: "1035161886078",
    appId: "1:1035161886078:web:2c910f42fe524421bbe72f",
    measurementId: "G-BCFF31EC8F"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


export default firebase;
