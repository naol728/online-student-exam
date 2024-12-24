import React from "react";
import { useAuth } from "./Authprovider";
import { Navigate } from "react-router-dom";

export default function Protectedroute({ children }) {
  const { isautenticated } = useAuth();
  return isautenticated ? children : <Navigate to="/" />;
}
