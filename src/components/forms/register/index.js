import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import UsersService from "../../../services/users";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirtectToLogin, setRedirectToLogin] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handledSubmit = async (e) => {
    e.preventDefault();
    try {
      const service = await UsersService.register({
        name: name,
        email: email,
        password: password,
      });
      setRedirectToLogin(true);
    } catch (error) {
      setError(true);
    }
  };

  if (redirtectToLogin) {
    navigate("/login");
  }

  return (
    <form className="py-5 flex flex-col gap-3" onSubmit={handledSubmit}>
      <div className="flex flex-col gap-2">
        <label className="font-medium">Name:</label>
        <input
          type="text"
          name="name"
          className="border border-gray-400 rounded p-1 outline-none focus:border-custom-purple"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 ">
        <label className="font-medium">Email:</label>
        <input
          type="email"
          name="email"
          className="border border-gray-400 rounded p-1 outline-none focus:border-custom-purple"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-medium">Password:</label>
        <input
          type="password"
          name="password"
          className="border border-gray-400 rounded p-1 outline-none focus:border-custom-purple"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="flex gap-2 justify-between items-center">
        <a
          className="text-custom-purple cursor-pointer"
          onClick={(e) => setRedirectToLogin(true)}
        >
          Login
        </a>
        <button className="py-1 px-3 border-2 text-custom-purple border-custom-purple hover:bg-custom-purple hover:text-white rounded">
          Register
        </button>
      </div>

      <div className="text-center">
        {error && <p className="text-red">Email or Password invalid</p>}
      </div>
    </form>
  );
}

export default RegisterForm;
