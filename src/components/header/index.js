import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/images/logo.png";
import "../../styles/home.css";

function Header() {
  return (
    <nav className="relative flex w-full py-2 px-6 border-b-2 border-black-900">
      <div className="flex w-full items-center justify-between">
        <Link to="/">
          <img
            src={logoImage}
            style={{ height: "30px" }}
            alt="TE Logo"
            loading="lazy"
          />
        </Link>
        <div className="flex gap-2 items-center text-custom-purple font-medium">
          <Link to={"/register"} className="hover:text-custom-purple-dark">
            Register
          </Link>
          <Link
            to={"/login"}
            className="border border-custom-purple rounded px-3 py-1 hover:bg-custom-purple hover:text-white"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
