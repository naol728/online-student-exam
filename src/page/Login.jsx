import { useState } from "react";
import InputField from "../components/Inputfild";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useStudentdata } from "../context/Studentprovider";
import { Alert } from "@mui/material";
import { useAuth } from "../context/Authprovider";
import Navbar from "../components/Navbar";

export default function Login() {
  const [username, setUsename] = useState("");
  const [passwordd, setPassword] = useState("");
  const { studdata, dispach, state } = useStudentdata();
  const { login } = useAuth();
  const navigate = useNavigate();

  function handlelogin() {
    const foundStudent = studdata.find(
      (student) =>
        student.password === passwordd && student.username === username
    );

    if (foundStudent) {
      dispach({ type: "login", payload: foundStudent });
      login();
      navigate("home");
    } else {
      dispach({ type: "invalidcredital" });
    }
  }
  function handleusername(value) {
    setUsename(value);
  }
  function handlepassword(value) {
    setPassword(value);
  }
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-[85vh]">
        {state.invalidcredital ? (
          <div className="absolute top-20 right-5 ">
            <Alert variant="filled" severity="error">
              incorect username or password
            </Alert>
          </div>
        ) : (
          <></>
        )}
        <form
          className="bg-blue-100 w-[80%] shadow-xl sm:w-[60%] lg:w-[40%] h-[400px] rounded-lg "
          onSubmit={handlelogin}
        >
          <div className="flex justify-center items-center h-[400px] ">
            <div>
              <InputField
                lable={"Username"}
                names={"Username"}
                types={"username"}
                id={"outlined-username-input"}
                value={username}
                handlChange={handleusername}
              />
              <InputField
                names={"Password"}
                types={"password"}
                id={"outlined-password-input"}
                lable={"Password"}
                value={passwordd}
                handlChange={handlepassword}
              />
            </div>
          </div>

          <div className="text-center  -mt-20">
            <Button
              type="contained"
              size="large"
              className="w-[50%] sm:w-[40%] lg:w-[40%]"
              submit="submit"
            >
              log in
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
