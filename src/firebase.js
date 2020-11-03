import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA5oq4_7GUL9pKst0hu5QN70Xpvrjnr644",
  authDomain: "ecommerce-968cc.firebaseapp.com",
  databaseURL: "https://ecommerce-968cc.firebaseio.com",
  projectId: "ecommerce-968cc",
  storageBucket: "ecommerce-968cc.appspot.com",
  messagingSenderId: "622910711682",
  appId: "1:622910711682:web:f1f36142e49d50ae2a519b",
  measurementId: "G-PX6JDP4PQ7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
// const provider = new firebase.auth.EmailAuthProvider();

export { auth };
export default db;
