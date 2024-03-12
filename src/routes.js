import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeScreen } from "./screens";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
