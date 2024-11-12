import { useState } from "react";
import Flaglist from "./Flaglist";
export const Flag = () => {
  const [remember, setRemember] = useState(false);
  const data = [
    {
      id: 1,
      flag: true,
    },
    { id: 2, flag: true },
    {
      id: 3,
      flag: true,
    },
    {
      id: 4,
      flag: true,
    },
    {
      id: 5,
      flag: true,
    },
    {
      id: 6,
      flag: true,
    },
    {
      id: 7,
      flag: true,
    },
    {
      id: 8,
      flag: true,
    },
    {
      id: 9,
      flag: true,
    },
    {
      id: 10,
      flag: true,
    },
    {
      id: 11,
      flag: true,
    },
    {
      id: 12,
      flag: true,
    },
    {
      id: 13,
      flag: true,
    },
    {
      id: 14,
      flag: true,
    },
    {
      id: 15,
      flag: true,
    },
    {
      id: 16,
      flag: false,
    },
    {
      id: 17,
      flag: false,
    },
    {
      id: 18,
      flag: true,
    },
    {
      id: 19,
      name: "hello motherfucker",
      flag: false,
    },
    {
      id: 20,
      flag: false,
    },
  ];

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
