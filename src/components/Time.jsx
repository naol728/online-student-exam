import { useEffect } from "react";

function Time({ dispach, secondsRemaining }) {
  /*   const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60; */

  /* useEffect(
    function () {
      const id = setInterval(function () {
        dispach({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispach]
  ); */

  return (
    <div className="timer">
      <h1>Remaning Time⏲️ 00:00 pm</h1>
      {/*  {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds} */}
    </div>
  );
}

export default Time;
