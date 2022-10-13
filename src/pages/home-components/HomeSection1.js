import React from "react";
import "./HomeSection1.css";

export default function HomeSection1() {
  return (
    <>
      <div className="homeSection1">
        <div className="homeSection1Title">
          Prepare young minds for a better
          <span className="futureBlue"> future.</span>
        </div>
        <div className="homeSection1Text">
          Let us help you advance students in Digital Technologies and other
          learning areas with our project-based learning programme.
        </div>
        <div className="homeSection1Buttons">
          <div className="homeSection1ButtonLearn">
            <button>LEARN MORE</button>{" "}
          </div>
          <div className="homeSection1ButtonSign">
            <button>SIGN UP</button>
          </div>
        </div>

        <div className="homeSection1SmallText">
          *Basic subscription includes the first 15 projects free of charge.
        </div>
      </div>
    </>
  );
}
