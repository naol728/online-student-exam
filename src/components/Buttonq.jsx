import React from "react";
import { useQuestion } from "../context/QuestionProvider";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function NextButton() {
  const { questionstate, dispach } = useQuestion();
  const { questions, index, answer } = questionstate;
  const numquations = questions.length;
  const navigate = useNavigate();
  function handlefinish() {
    dispach({ type: "finished" });
    navigate("/done");
  }
  if (answer === null) return null;
  if (index < numquations - 1)
    return (
      <Button
        variant="outlined"
        onClick={() => dispach({ type: "nextquestion" })}
      >
        Next
      </Button>
    );
  if (index === numquations - 1)
    return (
      <Button variant="outlined" onClick={handlefinish}>
        Finish
      </Button>
    );
}
