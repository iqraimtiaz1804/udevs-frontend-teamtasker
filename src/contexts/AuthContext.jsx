import React, { createContext, useState, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage('tt_user', null);

  const signIn = (email) => {
    // simple simulation; in real app you'd verify
    const fakeUser = { name: email.split('@')[0], email };
    setUser(fakeUser);
  };

  const signOut = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
