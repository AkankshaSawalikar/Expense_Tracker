// context/AuthContext.js
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken); // Store token in localStorage
    navigate("/dashboard"); // Redirect to dashboard after login
  };

  const signup = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken); // Store token in localStorage
    navigate("/dashboard"); // Redirect to dashboard after sign-up
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    navigate("/login"); // Redirect to login on logout
  };

  return (
    <AuthContext.Provider value={{ token, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
