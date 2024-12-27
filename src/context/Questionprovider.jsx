import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const Questions = createContext();
const initalstate = {
  filteredQuestions: [],
  questions: [],
  iserror: false,
  answer: null,
  index: 0,
  points: 0,
  error: "",
  loading: false,
  isstarted: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "questionloaded":
      return {
        ...state,
        filteredQuestions: action.payload,
        questions: action.payload.questionss.map((item, index) => ({
          ...item,
          id: index + 1,
          flag: false,
        })),
      };
    case "start":
      return {
        ...state,
        isstarted: true,
      };
    case "loading":
      return {
        ...state,
        loading: true,
      };
    case "error": {
      return {
        ...state,
        error: action.payload,
        iserror: true,
        loading: false,
      };
    }
    case "nextquestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finished":
      return {
        ...state,
        isstarted: false,
      };
    case "newanswer":
      const question = state.questions.at(state.index);
      const useranswer = action.payload + 1;
      return {
        ...state,
        answer: action.payload,
        pointes:
          Number(useranswer) == Number(question.answer)
            ? state.pointes + 1
            : state.pointes,
      };
  }
}
export default function QuestionProvider({ children }) {
  const [questionstate, dispach] = useReducer(reducer, initalstate);
  const [questiondata, setQuestiondata] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        dispach({ type: "loading" });
        const res = await fetch("http://localhost:8000/questions");
        const data = await res.json();
        setQuestiondata(data);
      } catch (err) {
        dispach({ type: "error", payload: err });
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
        dispach({ type: "questionloaded", payload: item });
      }
    });
  }, [questiondata]);


  return (
    <Questions.Provider value={{ questionstate, dispach }}>
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
