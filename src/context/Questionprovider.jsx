import React, { createContext, useContext, useEffect, useState } from "react";
const Questions = createContext();
export default function Questionprovider({ children }) {
  const [questiondata, setQuestiondata] = useState();
  useEffect(() => {
    async function fetchquestions() {
      const res = await fetch("http://localhost:8000/questions");
      const data = await res.json();
      setQuestiondata(data);
    }
    fetchquestions();
  }, [questiondata]);
  // const questions = questiondata.find(
  //   (question) => question.coursecode === 123456
  // );
  // console.log(questions)
  console.log(questiondata);
  return <Questions.Provider values={{}}>{children}</Questions.Provider>;
}
export function useQuestion() {
  const context = useContext(Questions);
  return context;
}
