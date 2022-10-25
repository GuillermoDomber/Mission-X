import React from "react";
import HomeLogin from "./HomeLogin";

function HomeModal({ closeModal }) {
  return (
    <>
      <div className="home-column home-modal">
        <button className="home-closeModal" onClick={() => closeModal(false)}>X</button>
        <div className="home-students">Studentes</div>
        <HomeLogin />
        <div className="home-teachers">Teachers</div>
        <HomeLogin />
      </div>
    </>
  );
}

export default HomeModal;
