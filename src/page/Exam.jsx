import React, { useEffect } from "react";
import Questions from "../components/Quetions";
import { Flag } from "../components/Flag";
import Time from "../components/Time";
import { useQuestion } from "../context/QuestionProvider";
import { useNavigate } from "react-router-dom";

export default function Exam() {
  const { questionstate } = useQuestion();
  const navigate = useNavigate();
  const { isstarted } = questionstate;
  useEffect(() => {
    if (!isstarted) {
      navigate("/done");
    }
  }, [isstarted, navigate]);

  return (
    <div className="flex justify-center items-center">
      <div className="w-full p-4">
        <Questions />
      </div>

      <div className=" flex flex-col justify-center ">
        <div className="-mb-16">
          <Time />
        </div>

        <div className="w-[500px]">
          <Flag />
        </div>
      </div>
    </div>
  );
}
