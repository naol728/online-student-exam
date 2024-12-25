import Container from "./../components/Container";
import Buttons from "../components/Button";
import { useStudentdata } from "../context/Studentprovider";
import { useNavigate } from "react-router-dom";
import { useQuestion } from "../context/Questionprovider";
import { useState } from "react";
import Popup from "../components/Popup";
import InputField from "../components/Inputfild";
export default function Home() {
  const { state } = useStudentdata();
  const { filteredQuestions } = useQuestion();
  const [isopenpopup, setIsopenpopup] = useState(false);
  const [autcode, setAutcode] = useState("");
  const currentExam = [filteredQuestions];
  const { studentinfo } = state;
  const startstyle = {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };
  const navigate = useNavigate();
  function handleclose() {
    setIsopenpopup(false);
  }

  function handlestartexam() {
    if (filteredQuestions.autecode === autcode) {
      console.log("exam is started");
      navigate("/exam");
    }
    console.log("app is deve");
  }
  function handleaute(value) {
    setAutcode(value);
  }
  function handlestart() {
    setIsopenpopup(true);
  }
  return (
    <>
      <div className="flex flex-wrap sm:flex-nowrap space-y-6 sm:space-y-0 sm:space-x-6 h-full m-4">
        <div className="w-full  h-max sm:h-64 sm:w-1/2  border border-slate-500 rounded-lg p-5  ">
          <ul className="flex flex-col">
            <li className="text-xl font-bold">
              👋 Hello{" "}
              <span className="text-lg font-semibold"> {studentinfo.name}</span>
              👋
            </li>
            <li className="text-xl font-bold">
              {"how are you "}
              <span className="text-lg font-semibold">{studentinfo.name}</span>
              😃
            </li>
            <li className="text-xl font-bold">
              your field is{" "}
              <span className="text-lg font-semibold">
                {studentinfo.department} 👩‍💻
              </span>
            </li>
            <li className="text-xl font-bold">
              your id card number{" "}
              <span className="text-lg font-semibold">{studentinfo.id}</span>{" "}
            </li>
            <li className="text-xl font-bold">
              your are{" "}
              <span className="text-lg font-semibold">{studentinfo.year}</span>
              {" year student"}🧑‍🎓
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2  border    border-slate-500 rounded-lg p-2 h-64">
          {currentExam.map((items) => (
            <ul key={items.coursecode}>
              <li className="text-xl  mb-4">
                <span className="text-xl font-bold">Course Name:</span> 📔
                {items.subject}
              </li>
              <li className="text-xl mb-2">
                {" "}
                <span className="font-bold">Finish time :</span> ⌚
                {items.finishtime}
              </li>
              <li className="text-xl mb-2">
                {" "}
                <span className="font-bold">Start Time :</span> ⌚
                {items.starttime}
              </li>
              <li className="text-xl mb-2">
                {" "}
                <span className="font-bold">wish from teacher :</span> have a
                good exam time🙂
              </li>
              <li className="text-xl mb-12">
                <span className="font-bold">Number of question :</span>
                {items.questionss.length} question 🤔
              </li>
            </ul>
          ))}
          <Buttons
            type="contained"
            size="large"
            className=" sm:w-36 absolute -top-8"
            onclick={handlestart}
          >
            Start
          </Buttons>
        </div>
      </div>
      <Popup isOpen={isopenpopup} onClose={handleclose}>
        <div className="font-extrabold text-lg">
          Enter the authenctication code🔑
          <div className="flex justify-center items-center">
            <InputField handlChange={handleaute} />
          </div>
        </div>
        <div className="absolute right-24 mr-20">
          <button style={startstyle} type="submit" onClick={handlestartexam}>
            start exam
          </button>
        </div>
      </Popup>

      <div className="m-4 ">
        <div>
          <p className="m-2 text-2xl font-bold">Results😤 </p>
        </div>
        <Container />
      </div>
    </>
  );
}
