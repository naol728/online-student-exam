import Container from "./../components/Container";
import Buttons from "../components/Button";
export default function Home() {
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
        <div className="w-full  h-max sm:h-64 sm:w-1/2  border border-slate-500 rounded-lg p-2  ">
          <ul>
            <li>Name: Fuad Seid</li>
            <li>Field: Software Engineer</li>
            <li>Age: 22</li>
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
