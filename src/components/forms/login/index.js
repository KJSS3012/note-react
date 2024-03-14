import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UsersService from "../../../services/users";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToRegister, setRedirectToRegister] = useState(false);
  const [redirectToNotes, setRedirectToNotes] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  if (redirectToRegister) {
    navigate("/register");
  }

  if (redirectToNotes) {
    navigate("/notes");
  }

  const handledSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await UsersService.login({
        email: email,
        password: password,
      });
      setRedirectToNotes(true);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <form className="py-5 flex flex-col gap-3" onSubmit={handledSubmit}>
      <div className="flex flex-col gap-2">
        <label className="font-medium">Email:</label>
        <input
          required
          type="text"
          name="email"
          className="border border-gray-400 rounded p-1 outline-none focus:border-custom-purple"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 ">
        <label className="font-medium">Password:</label>
        <input
          required
          type="password"
          name="password"
          className="border border-gray-400 rounded p-1 outline-none focus:border-custom-purple"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="flex gap-2 justify-between items-center">
        <a
          className="text-custom-purple cursor-pointer hover:bg-gray-100 duration-300 rounded py-1 px-3"
          onClick={(e) => setRedirectToRegister(true)}
        >
          Register
        </a>
        <button className="py-1 px-3 border-2 text-custom-purple border-custom-purple hover:bg-custom-purple hover:text-white rounded duration-300">
          Login
        </button>
      </div>

      <div className="text-center">
        {error && <p className="text-red">Email or Password invalid</p>}
      </div>
    </form>
  );
}

export default LoginForm;
