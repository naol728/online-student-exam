import React from "react";
import Questions from "../components/Quetions";
import { Flag } from "../components/Flag";
import Time from "../components/Time";
import { useQuestion } from "../context/QuestionProvider";
import { useNavigate } from "react-router-dom";

export default function Exam() {
  const { questionstate } = useQuestion();
  const navigate = useNavigate();
  const { filteredQuestions, isstarted } = questionstate;
  if (!isstarted) {
    navigate("/done");
  }

  return (
    <div className="grid grid-cols-2 space-x-10  ">
      <div>
        <Questions />
      </div>

      <div className=" flex flex-col gap-9  ">
        <div className="pl-60 pt-4">
          <Time />
        </div>

        <div className="w-[1500px]">
          <Flag />
        </div>
      </div>
    </div>
  );
}
