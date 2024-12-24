import { useState } from "react";
import Buttons from "./Button";
import Popup from "./Popup";
function containerlist({ item }) {
  const [isopenpopup, setIsopenpopup] = useState(false);
  const handleclick = () => {
    setIsopenpopup(true);
  };
  const handleclose = () => {
    setIsopenpopup(false);
  };
  return (
    <>
      <li className="flex justify-between border-b-2 p-2">
        <div>{item.coursename}</div>

        <Buttons onclick={handleclick}>view</Buttons>
      </li>
      <Popup isOpen={isopenpopup} onClose={handleclose}>
        <div className="flex flex-col justify-between w-full">
          <div className="flex w-full justify-between px-3">
            <h2 className="font-bold text-xl">Course Name</h2>
            <p className="font-semibold text-lg">{item.coursename}</p>
          </div>
          <div className="flex w-full justify-between px-3">
            <h2 className="font-bold text-xl">Course Code</h2>
            <p className="font-semibold text-lg">{item.coursecode}</p>
          </div>
          <div className="flex w-full justify-between px-3">
            <h2 className="font-bold text-xl">Course Score</h2>
            <p className="font-semibold text-lg">{item.coursescore}</p>
          </div>
        </div>
      </Popup>
    </>
  );
}

export default containerlist;
