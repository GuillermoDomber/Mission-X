// import { Routes, Route } from "react-router-dom";
// import baby from "../src/assets/Home/hero.png";
import React from "react";
import HomeSection1 from "./home-components/HomeSection1";
import HomeSection2 from "./home-components/HomeSection2";
import HomeSection3 from "./home-components/HomeSection3";
import HomeSection4 from "./home-components/HomeSection4";
import HomeSection5 from "./home-components/HomeSection5";

function HomePage() {
  return (
    <>
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />

      <div className="Footer">
        <div>COMPANY</div>
        <div>About Us</div>
        <div>Careers</div>
        <div>Partners</div>
        <div>COURSES</div>
        <div>Register</div>
        <div>Login</div>
        <div>Projects</div>
        <div>Teachers</div>
        <div>Parents</div>
        <div>Resources</div>
        <div>SUPPORT</div>
        <div>FAQs</div>
        <div>Helpdesk</div>
        <div>Contact Us</div>
        <div>LEGAL</div>
        <div>Terms & Conditions</div>
        <div>Privacy Policy</div>
        <div>LevelUp Works</div>
        <div>
          LevelUp Works is an Auckland-based enterprise dedicated to developing
          game-based learning software to help teachers in response to the New
          Zealand Digital Technologies & hangarau Matihiko.
        </div>
        <div>alan@levelupworks.com</div>
        <div>(021) 668 185</div>
      </div>
    </>
  );
}

export default HomePage;
