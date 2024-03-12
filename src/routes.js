import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
        <Route exact path="/" element={<HomeScreen />}></Route>
        <Route exact path="/register" element={<RegisterScreen />}></Route>
        <Route exact path="/login" element={<LoginScreen />}></Route>
        <Route exact path="/notes" element={<NotesScreen />}></Route>
        <Route exact path="/users/edit" element={<UserScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
