import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
export default function Applayout() {
  return (
    <div className="h-screen">
      <div className="h-[10%]">
        <Navbar />
      </div>
      <main className="bg-blue-50">
        <Outlet />
      </main>
    </div>
  );
}
