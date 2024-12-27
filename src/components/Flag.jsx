import { useState } from "react";
import Flaglist from "./Flaglist";
import { useQuestion } from "../context/QuestionProvider";
export const Flag = () => {
  const [remember, setRemember] = useState(false);
  const { questionstate } = useQuestion();
  const { questions } = questionstate;
  const data = questions;
  function handleflag() {}
  return (
    <div className=" flex w-[25%] h-[25%] flex-wrap mt-32  ">
      {data.map((item) => (
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
