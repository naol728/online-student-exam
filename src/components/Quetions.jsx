import React, { useState } from "react";
import Buttons from "./Button";
import { useQuestion } from "../context/Questionprovider";
import NextButton from "./Buttonq";

export default function Questions() {
  const { questionstate, dispach } = useQuestion();
  const { filteredQuestions, questions, index, answer } = questionstate;

  console.log(questions);
  console.log(index);
  return (
    <div className="flex items-center justify-start m-2">
      <div className="w-[500px] max-w-md p-6 bg-white rounded-lg  h-[100vh] mt-8">
        <p className="mt-4 text-gray-700">
          {questions[index].id}
          {questions[index].question}
        </p>

        <div className="mt-4 space-y-2">
          {questions[index].option.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                dispach({ type: "newanswer", payload: index });
              }}
              className={`w-full px-4 py-2 text-left rounded-md ${
                answer === index
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
