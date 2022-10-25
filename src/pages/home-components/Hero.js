import React, { useState } from "react";
import "./Hero.css";
import background from "../../assets/Home/hero.png";
import HomeModal from "../home-components/HomeModal"


export default function Hero() {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <div
        className="home-row home-hero-image"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="home-column home-hero-info">
          <div className="home-hero-title">
            Prepare young minds for a better
            <span className="futureBlue"> future.</span>
          </div>
          <div className="home-hero-text">
            Let us help you advance students in Digital Technologies and other
            learning areas with our project-based learning programme.
          </div>
          <div className="home-row home-hero-actions">
            <button className="button">LEARN MORE</button>
            <div className="home-sign-up">
              <button
                className="button button-accent homeModal"
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                SIGN UP
              </button>
              {openModal && <HomeModal closeModal={setOpenModal} />}
              <div className="home-hero-sm-text">
                *Basic subscription includes the first 15 projects free of
                charge.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
