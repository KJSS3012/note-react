import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRouter({ children }) {
  if (!localStorage.getItem("user")) {
    return <Navigate to={"/login"} />;
  }
  return children;
}

export default PrivateRouter;
