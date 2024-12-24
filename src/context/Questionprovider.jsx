import React, { createContext, useContext } from "react";
const Questions = createContext();
export default function Questionprovider({ children }) {
  return <Questions.Provider>{children}</Questions.Provider>;
}
export function useQuestion() {
  const context = useContext(Questions);
  return context;
}
