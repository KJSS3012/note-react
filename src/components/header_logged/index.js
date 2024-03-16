import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import UsersService from "../../services/users";
import logoImage from "../../assets/images/logo-white.png";
import "../../styles/note.css";

function HeaderLogged() {
  const [redirectToHome, setRedirectToHome] = useState(false);
  const navigate = useNavigate();

  if (redirectToHome) {
    navigate("/");
  }

  const logout = () => {
    UsersService.logout();
    setRedirectToHome(true);
  };

  return (
    <nav className="relative flex w-full py-2 px-6 border-b-2 border-black-900 bg-custom-purple">
      <div className="flex w-full items-center justify-between">
        <Link to="/notes">
          <img
            src={logoImage}
            style={{ height: "30px" }}
            alt="TE Logo"
            loading="lazy"
          />
        </Link>
        <div className="flex gap-2 items-center text-custom-purple font-medium">
          <p className="text-white" onClick={logout}>Profile</p>
        </div>
      </div>
    </nav>
  );
}

export default HeaderLogged;
