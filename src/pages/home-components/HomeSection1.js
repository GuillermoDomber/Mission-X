import React from "react";
import baby from "../../assets/Home/hero.png";

export default function HomeSection1() {
  return (
    <>
      <div className="firstSection">
        <div className="homeHeader">This is a Header</div>
        <div>Prepare youg minds for a better future.</div>
        <div>
          Let us help you advance students in Digital Technologies and other
          learning areas with our project-based learning programme.
        </div>
        <button>LEARN MORE</button>
        <button>SIGN UP</button>
        <div>
          *Basic subscription includes the first 15 projects free of charge.
        </div>
        <img src={baby} alt="img"></img>
      </div>
    </>
  );
}
