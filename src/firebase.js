import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCGuPFRsm-Lds4naPMfP7FGzzEJgOZTFxc",
  authDomain: "twitter-2c870.firebaseapp.com",
  projectId: "twitter-2c870",
  storageBucket: "twitter-2c870.appspot.com",
  messagingSenderId: "1066483850649",
  appId: "1:1066483850649:web:261806f3558f97357d4708",
  measurementId: "G-21E3YFN4ZD",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();


const auth = firebase.auth();
const storage = firebase.storage();
const db = firebaseApp.firestore();

export default db
export { auth, storage };
