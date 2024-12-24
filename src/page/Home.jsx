import Container from "./../components/Container";
import Buttons from "../components/Button";
import { useStudentdata } from "../context/Studentprovider";
export default function Home() {
  const { state } = useStudentdata();
  const { studentinfo } = state;
  const currentExam = [
    {
      corsecode: 1144,
      name: "Physics",
      allowedtime: `${3} Hr`,
      starttime: `${2}:00 Am`,
      noquestion: 50,
    },
  ];
  return (
    <>
      <div className="flex flex-wrap sm:flex-nowrap space-y-6 sm:space-y-0 sm:space-x-6 h-full m-4">
        <div className="w-full  h-max sm:h-64 sm:w-1/2  border border-slate-500 rounded-lg p-5  ">
          <ul className="flex flex-col">
            <li className="text-xl font-bold">
              Name:{" "}
              <span className="text-lg font-semibold"> {studentinfo.name}</span>
            </li>
            <li className="text-xl font-bold">
              Field:{" "}
              <span className="text-lg font-semibold">
                {studentinfo.department}
              </span>
            </li>
            <li className="text-xl font-bold">
              stud id:{" "}
              <span className="text-lg font-semibold">{studentinfo.id}</span>{" "}
            </li>
            <li className="text-xl font-bold">
              year:{" "}
              <span className="text-lg font-semibold">{studentinfo.year}</span>
              {" year"}
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2  border    border-slate-500 rounded-lg p-2 h-64">
          {currentExam.map((items) => (
            <ul key={items.corsecode}>
              <li className="text-2xl font-bold mb-4">{items.name}</li>
              <li className="text-xl mb-2">
                Allowed time : {items.allowedtime}
              </li>
              <li className="text-xl mb-2">Start Time : {items.starttime}</li>
              <li className="text-xl mb-12">
                Number of question : {items.noquestion}
              </li>
            </ul>
          ))}

          <Buttons type="contained" size="large" className=" sm:w-40 ">
            Start
          </Buttons>
        </div>
      </div>

      <div className="m-4 ">
        <div>
          <p className="m-2 text-2xl font-bold">Results </p>
        </div>
        <Container />
      </div>
    </>
  );
}
