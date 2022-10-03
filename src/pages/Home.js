import React from "react";
import Footer from "../components/Footer";
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
      <Footer />
    </>
  );
}

export default HomePage;
