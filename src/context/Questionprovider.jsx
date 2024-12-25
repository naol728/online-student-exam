import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const Questions = createContext();
const initalstate = {};
function reducer(action, state) {
  switch (action.type) {
    case "":
      return {
        ...state,
      };
  }
}
export default function QuestionProvider({ children }) {
  const [state, dispach] = useReducer(reducer, initalstate);
  const [questiondata, setQuestiondata] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const res = await fetch("http://localhost:8000/questions");
        const data = await res.json();
        setQuestiondata(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchQuestions();
  }, []);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const currentTime = new Date();

    const filteredData = questiondata.filter((item) => item.date === today);

    filteredData.forEach((item) => {
      const [startHours, startMinutes] = item.starttime.split(":").map(Number);
      const [finishHours, finishMinutes] = item.finishtime
        .split(":")
        .map(Number);

      const startTime = new Date();
      startTime.setHours(startHours, startMinutes, 0, 0);

      const finishTime = new Date();
      finishTime.setHours(finishHours, finishMinutes, 0, 0);
      if (currentTime > startTime) {
        setFilteredQuestions(item);
      }
    });
  }, [questiondata]);

  return (
    <Questions.Provider value={{ filteredQuestions }}>
      {children}
    </Questions.Provider>
  );
}

export function useQuestion() {
  const context = useContext(Questions);
  if (context === undefined) {
    throw new Error("useQuestion must be used within a QuestionProvider");
  }
  return context;
}
