import React from "react";

import LearningPath from "./Slides/LearningPath";
import DigitalTechnologies from "./Slides/DigitalTechnologies";
import KeyCompetencies from "./Slides/KeyCompetencies";
import IR4 from "./Slides/IR4.0";

const slides = [LearningPath, DigitalTechnologies, KeyCompetencies, IR4];
const buttonLabels = [
  "LEARNING PATHWAYS",
  "DIGITAL TECHNOLOGIES",
  "KEY COMPETENCIES",
  "IR4.0",
];

const Navigation = ({ position = 0, items = [], onClick }) => {
  return (
    <div className="home-row home-slider-nav">
      {items.map((_, i) => (
        <button
          onClick={() => onClick(i)}
          className={`button ${position === i ? "button-active" : ""} button-xl`}
        >
          {buttonLabels[i]}
        </button>
      ))}
    </div>
  );
};

export default function Slider({ position = 0, onNavigate, ...props }) {
  const Slide = slides[position];
  return (
    <div className="carousel" {...props}>
      <Navigation items={slides} position={position} onClick={onNavigate} />
      <Slide />
    </div>
  );
}
