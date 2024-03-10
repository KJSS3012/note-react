import React, { Fragment } from "react";
import presentationImage from "../../assets/images/presentation.png";
import { Header } from "../../components";

function HomeScreen() {
  return (
    <Fragment>
      <Header />
      <section className="flex px-16 py-10 align-middle justify-center bg-custom-purple">
        <div className="flex flex-col gap-3 flex-auto w-36 align-middle justify-center text-white">
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
        <div className="flex-auto w-64">
          <img src={presentationImage} />
        </div>
      </section>
    </Fragment>
  );
}

export default HomeScreen;
