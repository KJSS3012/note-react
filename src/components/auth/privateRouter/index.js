import React, { Component } from "react";
import { useNavigate, Route } from "react-router-dom";

const privateRouter = ({ component: Component, ...options }) => (
  <Route {...options} />
);
