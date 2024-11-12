import React from "react";
import { FaRegFlag } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
export default function Flaglist({ item, flag, handleflag }) {
  return (
    <div
      className="w-10 h-10 border-2 flex justify-center items-center p-6"
      onClick={() => handleflag()}
    >
      <div className="mt-2 ">
        {flag ? <FaFlag /> : <FaRegFlag />}
        <span className="text-sm ">{item.id}</span>
      </div>
    </div>
  );
}
