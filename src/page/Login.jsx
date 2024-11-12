import React, { useState } from 'react'
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
    <div className='flex items-center justify-center h-[85vh]'>
      <form className='bg-blue-100 w-[80%] shadow-xl sm:w-[60%] lg:w-[40%] h-[400px] rounded-lg ' >

  
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
          <Button type="contained" size="large" className="w-[50%] sm:w-[40%] lg:w-[40%]">log in</Button>

     </div>
     </form>
    </div>
  )
}
