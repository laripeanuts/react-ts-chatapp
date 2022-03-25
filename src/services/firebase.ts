import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjed9Rm0SaGj-4ieMf4xLSpM1Fi7bxGso",
  authDomain: "react-ts-chat-app.firebaseapp.com",
  projectId: "react-ts-chat-app",
  storageBucket: "react-ts-chat-app.appspot.com",
  messagingSenderId: "598105972681",
  appId: "1:598105972681:web:f5a3bc5400636d4b7f1218",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const signOut = () => auth.signOut();

