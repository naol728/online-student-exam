import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Exam from "./Exam";
import { useQuestion } from "../context/Questionprovider";
export default function Applayout() {
  const { questionstate } = useQuestion();

  return (
    <div className="h-screen">
      <div className="h-[10%]">
        <Navbar />
      </div>
      <main className="bg-blue-">
        {questionstate.isstarted ? <Exam /> : <Outlet />}
      </main>
    </div>
  );
}
