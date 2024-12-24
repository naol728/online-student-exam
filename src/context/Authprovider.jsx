import React, { createContext, useContext, useState } from "react";
const Auth = createContext();
export default function Authprovider({ children }) {
  const [isautenticated, setIsautenticated] = useState();
  function login() {
    setIsautenticated(true);
  }
  function logout() {
    setIsautenticated(false);
  }
  return (
    <Auth.Provider value={{ isautenticated, login, logout }}>
      {children}
    </Auth.Provider>
  );
}
export function useAuth() {
  const context = useContext(Auth);
  return context;
}
