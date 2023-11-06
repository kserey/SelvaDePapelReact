import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB3La-YElDqQL8VjO8Kd9UKzOWtJOabElQ",
  authDomain: "selvadepapel-24149.firebaseapp.com",
  projectId: "selvadepapel-24149",
  storageBucket: "selvadepapel-24149.appspot.com",
  messagingSenderId: "1041209974783",
  appId: "1:1041209974783:web:01ca648150e170ff11d1ca"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)