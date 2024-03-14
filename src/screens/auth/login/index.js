import React, { Fragment } from "react";
import { Header } from "../../../components";
import logo from "../../../assets/images/logo.png";
import LoginForm from "../../../components/forms/login";

function LoginScreen() {
  return (
    <Fragment>
      <Header />
      <main className="bg-custom-purple justify-center items-center flex">
        <div className="py-10 flex flex-col items-center bg-white rounded">
          <img src={logo} width={"50%"} />
          <p className="pt-3 text-gray-500 font-medium">
            Your notes on the cloud
          </p>
          <LoginForm />
        </div>
      </main>
    </Fragment>
  );
}

export default LoginScreen;
