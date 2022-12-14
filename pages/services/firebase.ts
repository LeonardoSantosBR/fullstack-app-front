import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBvCzp6f7Zum7-rDxB68i7AQs03alTgwPU",
  authDomain: "banco-projeto-fifa.firebaseapp.com",
  projectId: "banco-projeto-fifa",
  storageBucket: "banco-projeto-fifa.appspot.com",
  messagingSenderId: "98845898772",
  appId: "1:98845898772:web:8c46283da283f8419fcf01",
};

const App = initializeApp(firebaseConfig);
export const Auth= getAuth(App)