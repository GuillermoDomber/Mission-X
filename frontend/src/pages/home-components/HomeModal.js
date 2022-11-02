import React, { useState } from "react";
import "./HomeModal.css";
import Authenticate from "./Authenticate";

function HomeModal({ closeModal }) {
  const [selected, setSelected] = useState();
  return (
    <div className="home-modal">
      <div className="home-modal-overlay" onClick={closeModal}></div>
      <div className="home-modal-box">
        <button className="home-closeModal" onClick={closeModal}>
          X
        </button>
        <div className="home-row home-flex-center">
          <div className="home-modal-student">
            <Authenticate
              type="student"
              selected={selected}
              onSelectForm={(s) => setSelected(s)}
            />
          </div>
          <div className="home-modal-teacher">
            <Authenticate
              type="teacher"
              selected={selected}
              onSelectForm={(s) => setSelected(s)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeModal;
