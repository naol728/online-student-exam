import { Button } from "@mui/material";
import React from "react";
import { useAuth } from "../context/Authprovider";
import { useNavigate } from "react-router-dom";

export default function Done() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  function handlebacktohome() {
    navigate("/home");
  }
  function handlelogout() {
    logout();
  }
  return (
    <div>
      <div className="flex  flex-col justify-center items-center h-[85vh]">
        <h2 className="text-3xl font-bold ">
          🥳 congra you are done todays exam 🥳
        </h2>
        <div className="mt-20">
          <h3 className="text-xl font-bold">
            {" "}
            🤗wait the exam result in home page 🤗
          </h3>
          <div className="mt-20 flex justify-evenly">
            <Button variant="contained" onClick={handlebacktohome}>
              {" "}
              back to home
            </Button>
            <Button variant="contained" onClick={handlelogout}>
              logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
