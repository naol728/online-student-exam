import React, { useState } from "react";
import Buttons from "./Button";

export default function Questions() {
  const questions = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: 0,
    },
    {
      id: 2,
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: 1,
    },
    {
      id: 3,
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Jupiter", "Saturn", "Mars"],
      correctAnswer: 1,
    },
    {
      id: 4,
      question: "Which ocean is the largest?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      correctAnswer: 3,
    },
    {
      id: 5,
      question: "What is the boiling point of water?",
      options: ["90°C", "100°C", "110°C", "120°C"],
      correctAnswer: 1,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null); // Reset selected option for next question
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(userAnswers[currentQuestion - 1] || null); // Reset selected option for previous question
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setUserAnswers(() => [...userAnswers, option]);
  };

  return (
    <div className="flex items-center justify-start m-2">
      <div className="w-[500px] max-w-md p-6 bg-white rounded-lg  h-[100vh] mt-8">
        <p className="mt-4 text-gray-700">
          {currentQuestion + 1} {questions[currentQuestion].question}
        </p>

        <div className="mt-4 space-y-2">
          {questions[currentQuestion].options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`w-full px-4 py-2 text-left rounded-md ${
                selectedOption === option
                  ? "bg-blue-200 text-white" // Highlight selected option
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {option}
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-6">
          <div onClick={handleBack}>
            {currentQuestion === 0 ? null : (
              <Buttons disabled={currentQuestion === 0} type={"outlined"}>
                BACK
              </Buttons>
            )}
          </div>
          <div onClick={handleNext}>
            <Buttons
              disabled={currentQuestion === questions.length - 1}
              type={"outlined"}
            >
              {currentQuestion < questions.length - 1 ? `NEXT` : `FINISH`}
            </Buttons>
          </div>
        </div>
        <ul>
          {currentQuestion < questions.length - 1
            ? `Good Luck `
            : `${userAnswers}`}
        </ul>
      </div>
    </div>
  );
}
