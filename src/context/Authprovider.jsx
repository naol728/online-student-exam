import React, { createContext, useContext } from "react";
const Auth = createContext();
export default function Authprovider({ children }) {
  return <Auth.Provider>{children}</Auth.Provider>;
}
export function useAuth() {
  const context = useContext(Auth);
  return context;
}
