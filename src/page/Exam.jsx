import React from "react";
import Questions from "../components/Quetions";
import { Flag } from "../components/Flag";
import Time from "../components/Time";

export default function Exam() {
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
