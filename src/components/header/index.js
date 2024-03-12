import React, { useState } from "react";
import logoImage from "../../assets/images/logo.png";
import "../../styles/home.css";

function Header() {
  return (
    <nav className="relative flex w-full flex-wrap items-center justify-between py-2 lg:py-4 border-b-2 border-black-900">
      <div className="flex w-full flex-wrap items-center justify-between px-4">
        <a className="mx-2 my-1 flex items-center lg:mb-0 lg:mt-0" href="#">
          <img
            src={logoImage}
            style={{ height: "30px" }}
            alt="TE Logo"
            loading="lazy"
          />
        </a>
      </div>
    </nav>
  );
}

export default Header;
