import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRouter } from "./components"
import {
  HomeScreen,
  RegisterScreen,
  LoginScreen,
  NotesScreen,
  UserScreen,
} from "./screens";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route exact path="/register" element={<RegisterScreen />} />
        <Route exact path="/login" element={<LoginScreen />} />
        <Route exact path="/notes" element={<PrivateRouter><NotesScreen/></PrivateRouter>}/>
        <Route exact path="/users/edit" element={<UserScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
