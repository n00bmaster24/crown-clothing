import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-rAzNR6CM47zo4HhuXHXq4IxkqYvNdmQ",
  authDomain: "crwn-clothing-db-fd8af.firebaseapp.com",
  projectId: "crwn-clothing-db-fd8af",
  storageBucket: "crwn-clothing-db-fd8af.appspot.com",
  messagingSenderId: "975176913633",
  appId: "1:975176913633:web:fb2a679e991101590c5da0",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
