import Logo from "./Logo";
import Buttons from "./Button";
import { useStudentdata } from "../context/Studentprovider";
import { useState } from "react";
import Popup from "./Popup";

export default function Navbar() {
  const [isopenpopup, setIsopenpopup] = useState(false);
  const { state } = useStudentdata();
  const handleclose = () => {
    setIsopenpopup(false);
  };
  const handleopen = () => {
    setIsopenpopup(true);
  };
  return (
    <div>
      <nav className="flex justify-between m-0 p-4 bg-blue-100 shadow-xl ">
        <Logo />
        <Buttons type={"text"} onclick={handleopen}>
          {!state.invalidcredital ? "help" : "log in"}
        </Buttons>
        {
          <Popup isOpen={isopenpopup} onClose={handleclose}>
            <div className="flex flex-col justify-between w-full">
              {!state.invalidcredital
                ? "please enter the username and password given by your school administrator "
                : " are you sure to logout "}
            </div>
          </Popup>
        }
      </nav>
    </div>
  );
}
