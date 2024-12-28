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
  secondsRemaining: 0,
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
        secondsRemaining: action.payload.secondsRemaining,
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
      return {
        ...state,
        answer: action.payload,
        pointes:
          action.payload + 1 == Number(question.answer)
            ? state.pointes + 1
            : state.pointes,
      };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        isstarted: state.secondsRemaining === 0 ? false : true,
      };
    case "toggleflag":
      const updatedQuestions = state.questions.map((question) => {
        if (question.id === action.payload) {
          return { ...question, flag: !question.flag };
        }
        return question;
      });
      return { ...state, questions: updatedQuestions };

    default:
      return state;
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

      const startTotalMinutes = startHours * 60 + startMinutes;
      const finishTotalMinutes = finishHours * 60 + finishMinutes;
      const differenceInSeconds = finishTotalMinutes - startTotalMinutes;
      if (currentTime > startTime) {
        dispach({
          type: "questionloaded",
          payload: { ...item, secondsRemaining: differenceInSeconds },
        });
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
