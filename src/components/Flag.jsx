import React, { useState } from "react";
import Flaglist from "./Flaglist";
import { useQuestion } from "../context/QuestionProvider";

export const Flag = () => {
  const { questionstate, dispach } = useQuestion();
  const { questions } = questionstate;

  const handleflag = (id) => {
    dispach({ type: "toggleflag", payload: id });
  };
  return (
    <div className=" flex flex-wrap mt-32  ">
      {questions.map((item) => (
        <Flaglist
          item={item}
          key={item.id}
          flag={item.flag}
          handleflag={handleflag}
        />
      ))}
    </div>
  );
};
