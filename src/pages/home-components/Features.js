import React, { useState } from "react";
import "./Features.css";

import groupImg1 from "../../assets/Home/Group 1.png";
import groupImg2 from "../../assets/Home/Group 2.png";
import groupImg3 from "../../assets/Home/Group 3.png";
import groupImg4 from "../../assets/Home/Group 4.png";
import laptop1 from "../../assets/Home/laptop1.png";
import laptop2 from "../../assets/Home/laptop2.png";
import laptop3 from "../../assets/Home/laptop3.png";
import laptop4 from "../../assets/Home/laptop4.png";
import BigButton from "./BigButton";
import Carousel from "./Carousel";

const images = [laptop1, laptop2, laptop3, laptop4];

export default function Features() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="home-column home-feature-info">
      <div className="home-row">
        <div className="home-feature-column">
          <div className="home-feature-title">What we offer</div>
          <div className="home-feature-text">
            The Creative Problem Solving programme is series of digital creation
            projects aimed to encourage self-motivation and student agency,
            designated by New Zealand's leading IT industry experts and schools.
          </div>
          <div className="home-feature-subtitle">What will student create?</div>
          <div>
            <BigButton name="animations" onClick={() => setSelected(0)} />
            <BigButton name="augreality" onClick={() => setSelected(1)} />
            <BigButton name="chatbots" onClick={() => setSelected(2)} />
            <BigButton name="games" onClick={() => setSelected(3)} />
          </div>
        </div>
        <div>
          <Carousel
            items={images}
            position={selected}
            onNavigate={(p) => setSelected(p)}
          />
        </div>
      </div>
      <div className="homeSection3">
        <div className="homeSection3Title">
          Teaching kids programing and digital skills is MORE than just writing
          code
        </div>
        <div className="home-row">
          <img className="home-feature-big-img" src={groupImg1} alt="img"></img>
          <img className="home-feature-big-img" src={groupImg2} alt="img"></img>
          <img className="home-feature-big-img" src={groupImg3} alt="img"></img>
          <img className="home-feature-big-img" src={groupImg4} alt="img"></img>
        </div>
      </div>
    </div>
  );
}
