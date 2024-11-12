import  { useState } from 'react'
import InputField from '../components/Inputfild'
import Button from '../components/Button'
export default function Login() {
  const [username,setUsename]=useState("")
  const [password,setPassword]=useState("")


function handleusername(value){
 setUsename(value)
}
function handlepassword(value){
 setPassword(value)
}
  return (
    <div >
      <form >

  
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
        value={password}
        handlChange={handlepassword}
      />
     </div>
    </div>


     <div className="text-center  -mt-20">
          <Button type="contained" size="large" className="w-[50%] sm:w-[20%]">log in</Button>

     </div>
     </form>
    </div>
  )
}
