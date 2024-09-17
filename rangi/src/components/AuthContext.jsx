import React, { createContext, useContext, useState } from 'react';

// Create a context for authentication
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [role, setRole] = useState('');
  const [userName, setUserName] = useState('');
  const [isCustomer, setIsCustomer] = useState(false);

  const login = (role, isCustomer, userName) => {
    setAuthenticated(true);
    setRole(role);
    setIsCustomer(isCustomer)
    setUserName(userName);

  };

  const logout = () => {
    setAuthenticated(false);
    setRole('');
    setIsCustomer(false);
    setUserName('');
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    localStorage.removeItem('isCustomer');
    localStorage.removeItem('UserName');
  };

  return (
    <AuthContext.Provider value={{ authenticated, role, isCustomer, userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
