import { useStudentdata } from "../context/Studentprovider";
import Containerlist from "./containerlist";

function container() {
  const { state } = useStudentdata();
  const list = state.studentinfo.courses;
  
  return (
    <div className=" border border-s-1 rounded-md justify-between ">
      <ul className="divide-x-1 ">
        {list.map((items) => 
          <Containerlist
            key={items.name}
            item={items}
          />
        )}
      </ul>
    </div>
  );
}

export default container;
