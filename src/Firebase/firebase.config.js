// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3yJepchY8XuJDvHKy8XXYKV9OKiJ6Hb8",
  authDomain: "shopping-brand.firebaseapp.com",
  projectId: "shopping-brand",
  storageBucket: "shopping-brand.appspot.com",
  messagingSenderId: "135560516898",
  appId: "1:135560516898:web:f6477e3899ccb95e60817b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;