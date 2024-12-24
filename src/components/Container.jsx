import { useStudentdata } from "../context/Studentprovider";
import Containerlist from "./containerlist";

function container() {
  const { state } = useStudentdata();
  console.log(state);
  const list = [
    { name: "History", id: 12 },
    {
      name: "Biology",
      id: 13,
    },
  ];

  return (
    <div className=" border border-s-1 rounded-md justify-between ">
      <ul className="divide-x-1 ">
        {list.map((items) => (
          <Containerlist
            key={items.id}
            itemid={items.id}
            itemname={items.name}
          />
        ))}
      </ul>
    </div>
  );
}

export default container;
