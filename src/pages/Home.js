import React from "react";
import "./Home.css";
import Footer from "../components/Footer";
import Hero from "./home-components/Hero";
import Features from "./home-components/Features";
import Help from "./home-components/Help";
import SignUp from "./home-components/SignUp";

function HomePage() {
  return (
    <div className="home-column">
      <Hero />
      <Features />
      <Help />
      <SignUp />
      <Footer />
    </div>
  );
}

export default HomePage;
