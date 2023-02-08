import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1LqoqZFugAzOyYFmPWEP9FzYQqYNYGK8",
  authDomain: "chatgpt-messenger-fb4e1.firebaseapp.com",
  projectId: "chatgpt-messenger-fb4e1",
  storageBucket: "chatgpt-messenger-fb4e1.appspot.com",
  messagingSenderId: "762182185542",
  appId: "1:762182185542:web:16e4c45112e388d63f5047",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
//get database object
const db = getFirestore(app);

export { db };
