import Logo from "./Logo";
import Buttons from "./Button";
import { useStudentdata } from "../context/Studentprovider";
export default function Navbar() {
  const { state } = useStudentdata();
  console.log(state.invalidcredital);
  return (
    <div>
      <nav className="flex justify-between m-0 p-4 bg-blue-100 shadow-xl ">
        <Logo />
        <Buttons type={"text"}>
          {!state.invalidcredital ? "help" : "log in"}
        </Buttons>
      </nav>
    </div>
  );
}
