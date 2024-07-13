import React, { createContext, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { axiosClient } from '../service/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadingStoreData = () => {
      const storageUser = localStorage.getItem('@Auth:user');
      const storageToken = localStorage.getItem('@Auth:token');

      if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser));
        axiosClient.defaults.headers.common['Authorization'] = `Bearer ${storageToken}`;
      }
    };
    loadingStoreData();
  }, []);

  const signIn = async ({ email, password }) => {
    try {
      const response = await axiosClient.post('/login', { email, password });
      if (response.data.error) {
        alert(response.data.error);
      } else {
        setUser(response.data.userId);
        axiosClient.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;

        localStorage.setItem('@Auth:user', JSON.stringify(response.data.userId));
        localStorage.setItem('@Auth:token', response.data.accessToken);
        scheduleLogout(); 
      }
    } catch (error) {
      console.error(error);
    }
  };

  const scheduleLogout = () => {
    setTimeout(() => {
      signOut();
      return <Navigate to="/login" />;
    }, 60 * 60 * 1000); 
  };

  const signOut = () => {
    localStorage.removeItem('@Auth:user');
    localStorage.removeItem('@Auth:token');
    setUser(null);
    return <Navigate to="/login" />;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut, 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
