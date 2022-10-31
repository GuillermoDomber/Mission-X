import { React, useState } from "react";
import "./Home.css";

import Footer from "../components/Footer";
import Hero from "./home-components/Hero";
import Features from "./home-components/Features";
import Help from "./home-components/Help";
import SignUp from "./home-components/SignUp";
import HomeModal from "./home-components/HomeModal";

function HomePage() {
  const [openModal, setOpenModal] = useState(false);
  const openSignUp = () => setOpenModal(true);

  return (
    <div className="home-column">
      <Hero onSignUp={openSignUp} />
      <Features />
      <Help />
      <SignUp onSignUp={openSignUp} />
      <Footer />
      {openModal && <HomeModal closeModal={() => setOpenModal(false)} />}
    </div>
  );
}

export default HomePage;
