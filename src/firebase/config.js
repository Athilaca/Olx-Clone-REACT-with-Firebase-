import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC6yDlN_J_xRJULa7rDhoIqgGzeL6XJkiI",
  authDomain: "fir-2299b.firebaseapp.com",
  projectId: "fir-2299b",
  storageBucket: "fir-2299b.appspot.com",
  messagingSenderId: "430044103111",
  appId: "1:430044103111:web:b88c496096d80b087719e2",
  measurementId: "G-R5RG6THYKD"
};

export default firebase.initializeApp(firebaseConfig)