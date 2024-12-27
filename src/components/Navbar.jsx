import Logo from "./Logo";
import Buttons from "./Button";
import { useStudentdata } from "../context/Studentprovider";
import { useState } from "react";
import Popup from "./Popup";
import { useAuth } from "../context/Authprovider";

export default function Navbar() {
  const [isopenpopup, setIsopenpopup] = useState(false);
  const { isautenticated } = useAuth();
  const handleclose = () => {
    setIsopenpopup(false);
  };
  const handleopen = () => {
    setIsopenpopup(true);
  };
  return (
    <div>
      <nav className="flex justify-between m-0 p-4 bg-blue-200 shadow-2xl ">
        <Logo />
        <Buttons type={"text"} onclick={handleopen}>
          {isautenticated ? "log out" : "help"}
        </Buttons>
        {
          <Popup isOpen={isopenpopup} onClose={handleclose} islogout={true}>
            <div className="flex flex-col justify-between w-full">
              {isautenticated ? (
                <h2 className="font-bold text-xl p-5">
                  are you sure to logout
                </h2>
              ) : (
                <h2 className="font-bold text-xl p-5">
                  please enter the username and password given by your school
                  administrator{" "}
                </h2>
              )}
            </div>
          </Popup>
        }
      </nav>
    </div>
  );
}
