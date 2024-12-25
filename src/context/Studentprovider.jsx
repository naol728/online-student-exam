import React, {
  act,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const Studentcontext = createContext();
const initalstate = {
  studentinfo: [],
  invalidcredital: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        studentinfo: action.payload,
        invalidcredital: false,
      };
    case "logout":
      return {
        ...state,
        initalstate,
      };
    case "invalidcredital":
      return {
        ...state,
        invalidcredital: true,
      };
    default:
      return "unkown action";
  }
}
export default function Studentprovider({ children }) {
  const [state, dispach] = useReducer(reducer, initalstate);
  const [studdata, setStuddata] = useState();

  useEffect(() => {
    async function fetchstudentdata() {
      const res = await fetch("http://localhost:8000/students");
      const data = await res.json();
      setStuddata(data);
    }
    fetchstudentdata();
  }, []);

  return (
    <Studentcontext.Provider
      value={{
        state,
        dispach,
        studdata,
      }}
    >
      {children}
    </Studentcontext.Provider>
  );
}
export function useStudentdata() {
  const context = useContext(Studentcontext);
  return context;
}
