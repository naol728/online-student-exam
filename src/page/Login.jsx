import { useEffect, useReducer, useState } from "react";
import InputField from "../components/Inputfild";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const initialstate ={
  students:[],
}

function reducer(state,action){
switch(action.type){
  case 'pass':
    return {
      ...state,
      students:action.payload,
    }
}
}
export default function Login() {
  const [username, setUsename] = useState("");
  const [passwordd, setPassword] = useState("");

const [{students},dispach]= useReducer(reducer,initialstate);

const navigate =  useNavigate()
 
    useEffect(function () {
      fetch("http://localhost:8000/students")
        .then((res) => res.json())
        .then((data) => dispach({type:'pass', payload:data}));
    }, []);


    function handlelogin(){
      const foundStudent = students.find(student => 
        student.password === passwordd && student.name === username
      );
      if (foundStudent) {

    navigate('home');
    console.log('hey')
   
   } else{
    alert('Invalid User name ')
   }

  }
  function handleusername(value) {
    setUsename(value);
  }
  function handlepassword(value) {
    setPassword(value);
  }
  return (
    <div className="flex items-center justify-center h-[85vh]">
      <form className="bg-blue-100 w-[80%] shadow-xl sm:w-[60%] lg:w-[40%] h-[400px] rounded-lg ">
        <div className="flex justify-center items-center h-[400px] ">
          <div>
            <InputField
              lable={"Username"}
              names={"Username"}
              types={"username"}
              id={"outlined-username-input"}
              autoComplete={"current-password"}
              value={username}
              handlChange={handleusername}
            />
            <InputField
              names={"Password"}
              types={"password"}
              id={"outlined-password-input"}
              autoComplete={"current-password"}
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
            onclick={handlelogin}
          >
            log in
          </Button>
        </div>
      </form>
    </div>
  );
}
