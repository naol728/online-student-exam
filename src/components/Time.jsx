import { useEffect } from "react";
import { useQuestion } from "../context/QuestionProvider";

function Timer() {
  const { questionstate, dispach } = useQuestion();
  const secondsRemaining = questionstate.secondsRemaining;

  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispach({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispach]
  );

  return (
    <div className="text-2xl font-bold text-center">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}⏲️
    </div>
  );
}

export default Timer;
