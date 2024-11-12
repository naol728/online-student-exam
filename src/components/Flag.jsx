import { useState } from "react";
import { FaRegFlag } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
export const Flag = () => {
  const [Remember, setRemember]= useState(true);
  function flag (){
    setRemember(!Remember);
  }
  const content =Remember==true?<FaFlag />:<FaRegFlag />;

  return (
    <div className="flex flex-wrap border w-fit p-2 border-s-8" onClick={flag}>
      {content}
      
    </div>
  )
}
