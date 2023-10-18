/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
    getAuth,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile
} from "firebase/auth"
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const registerUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
    const updateUserProfile = (name, photo) => {
      setLoading(true);
      return updateProfile(auth.currentUser, {
          displayName: name, photoURL: photo
      });
  }
  
    const loginUser = (email, password) => {
  
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const logOut = () => {
  
      return signOut(auth);
    };
  
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
        setUser(loggedInUser);
  
      });
      return () => {
        unSubscribe();
      };
    }, []);
  
    const authInfo = { 
        user,
        loading,
        registerUser,
        logOut, 
        loginUser, 
        updateUserProfile };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;