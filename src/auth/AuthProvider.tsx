import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from 'utils/firebase';
import { doc, setDoc } from "firebase/firestore";

interface AuthContextProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (loggedIn: boolean) => void;
  login: (username: string, password: string) => Promise<void>;
  signup: (email: string, password: string, firstName: string, lastName: string, phone: string, organisation: string, role: string) => Promise<void>
  signout: () => void
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    if (username && password && !isLoggedIn) {
      login(username, password);
    }
  }, []);

  const login = async (username: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, username, password)
      localStorage.setItem('username', username)
      localStorage.setItem('password', password)
      setIsLoggedIn(true)
    } catch {
      localStorage.setItem('username', "")
      localStorage.setItem('password', "")
    }
  };

  const signup = async (
    email: string, 
    password: string, 
    firstName: string,
    lastName: string,
    phone: string, 
    organisation: string,
    role: string
  ) => {

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user
    storeUser(user.uid, firstName, lastName, email, phone, organisation, role)
    localStorage.setItem('username', email)
    localStorage.setItem('password', password)
    setIsLoggedIn(true)
  }

  const signout = () => {
    localStorage.removeItem('username')
    localStorage.removeItem('password')
    setIsLoggedIn(false)
  }

  const storeUser = async (
    userID: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string, 
    organisation: string,
    role: string
  ) => {

    try {
      const docRef = await setDoc(doc(db, "users", userID), {
        name: firstName + " " + lastName,
        userID: userID,
        email: email,
        phone: phone,
        organisation: organisation,
        role: role
      })
      console.log("Document written with ID: ", docRef);
    } catch(error) {
      console.error("Error adding document: ", error);
    }

  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, login, signup, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};