import Reacts from "react";
import { useQuestion } from "../context/Questionprovider";
import NextButton from "./Buttonq";

export default function Questions() {
  const { questionstate, dispach } = useQuestion();
  const { filteredQuestions, questions, index, answer } = questionstate;

  console.log(filteredQuestions);
  return (
    <div className="flex items-center w-full  justify-start ml-32 mt-20 ">
      <div className="  bg-white rounded-lg   m-5">
        <p className="mt-4 text-2xl font-bold text-gray-700">
          {questions[index].id}
          {","}
          {questions[index].question}
        </p>

        <div className="mt-10 space-y-2 text-xl font-semibold">
          {questions[index].option.map((option, idx) => (
            <div
              key={idx}
              onClick={() => {
                dispach({ type: "newanswer", payload: idx });
              }}
              className={`w-full px-4 py-2 text-left rounded-md ${
                answer === idx
                  ? "bg-blue-200 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              } `}
            >
              {option}
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-6">
          <NextButton />
        </div>
      </div>
    </div>
  );
}
