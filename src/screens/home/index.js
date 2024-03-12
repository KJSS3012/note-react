import React, { Fragment } from "react";
import presentationImage from "../../assets/images/presentation.png";
import { Header } from "../../components";
import "../../styles/home.css";

function HomeScreen() {
  return (
    <Fragment>
      <Header />
      <section className="flex md:flex-row sm:flex-col px-16 py-10 bg-custom-purple">
        <div className="flex flex-col gap-3 w-36 items-center justify-center text-white w-full">
          <h2 className="text-4xl font-bold">
            Create notes easily and access when you wants on the cloud
          </h2>
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs.
            <br />
            <br />
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print.
          </p>
          <a
            className="border p-2 rounded hover:bg-white hover:text-custom-purple text-xl font-bold text-center mt-4"
            href="#"
          >
            Register for free Now
          </a>
        </div>
        <div className="w-64 w-full">
          <img src={presentationImage} />
        </div>
      </section>
    </Fragment>
  );
}

export default HomeScreen;
