import React, { createContext, useContext, useEffect } from "react";

const Studentcontext = createContext();

export default function Studentprovider({ children }) {
  useEffect(() => {
    async function fetchstudentdata() {
      const res = await fetch("http://localhost:8000/students");
      const data = await res.json();
      console.log(data);
    }
    fetchstudentdata();
  }, []);

  return <Studentcontext.Provider>{children}</Studentcontext.Provider>;
}
export function useStudentdata() {
  const context = useContext(Studentcontext);
  return context;
}
