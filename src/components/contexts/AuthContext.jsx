// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../../lib/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updatePassword,
  updateEmail,
  sendEmailVerification,
  sendPasswordResetEmail
} from 'firebase/auth';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const register = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    return signOut(auth);
  };

  const updateUserEmail = async (newEmail) => {
    if (!user) throw new Error('No user logged in');
    await updateEmail(user, newEmail);
  };

  const updateUserPassword = async (newPassword) => {
    if (!user) throw new Error('No user logged in');
    await updatePassword(user, newPassword);
  };

  const verifyEmail = async () => {
    if (!user) throw new Error('No user logged in');
    return sendEmailVerification(user);
  };

  const resetPassword = async (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const value = {
    user,
    register,
    login,
    logout,
    updateUserEmail,
    updateUserPassword,
    verifyEmail,
    resetPassword,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};





/**
// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../../lib/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updatePassword,
  updateEmail,
  sendEmailVerification,
  sendPasswordResetEmail
} from 'firebase/auth';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const register = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    return signOut(auth);
  };

  const value = {
    user,
    register,
    login,
    logout,
    updateUserEmail,
    updateUserPassword,
    verifyEmail,
    resetPassword,
    loading
  };

  const updateUserEmail = async (newEmail) => {
    if (!user) throw new Error('No user logged in');
    await updateEmail(user, newEmail);
  };

  const updateUserPassword = async (newPassword) => {
    if (!user) throw new Error('No user logged in');
    await updatePassword(user, newPassword);
  };

  const verifyEmail = async () => {
    if (!user) throw new Error('No user logged in');
    return sendEmailVerification(user);
  };

  const resetPassword = async (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
**/





/** 
// src/contexts/AuthContext.jsx
// Add this to the existing AuthContext.jsx 

export function AuthProvider({ children }) {
  // ... existing code ...

  const resetPassword = async (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const updateUserEmail = async (newEmail) => {
    if (!user) throw new Error('No user logged in');
    await updateEmail(user, newEmail);
  };

  const updateUserPassword = async (newPassword) => {
    if (!user) throw new Error('No user logged in');
    await updatePassword(user, newPassword);
  };

  const verifyEmail = async () => {
    if (!user) throw new Error('No user logged in');
    return sendEmailVerification(user);
  };

  const value = {
    user,
    register,
    login,
    logout,
    resetPassword,
    updateUserEmail,
    updateUserPassword,
    verifyEmail,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
**/