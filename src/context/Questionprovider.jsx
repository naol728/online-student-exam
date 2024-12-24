import React, { createContext, useContext, useEffect } from "react";
const Questions = createContext();
export default function Questionprovider({ children }) {
  useEffect(() => {
    async function fetchquestions() {
      const res = await fetch("http://localhost:8000/questions");
      const data = await res.json();
      console.log(data);
    }
    fetchquestions();
  }, []);
  return <Questions.Provider>{children}</Questions.Provider>;
}
export function useQuestion() {
  const context = useContext(Questions);
  return context;
}
