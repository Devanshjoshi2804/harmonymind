import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAaquREPIVBXsub9XrPbT31jTvRnaLygU0",
  authDomain: "harmony-3da76.firebaseapp.com",
  projectId: "harmony-3da76",
  storageBucket: "harmony-3da76.appspot.com",
  messagingSenderId: "978673843797",
  appId: "1:978673843797:web:68c5d2344e4f30f987dedc",
  measurementId: "G-RR3CT9YXBS"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
