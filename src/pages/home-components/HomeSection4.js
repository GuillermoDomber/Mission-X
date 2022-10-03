import { useState } from "react";

import catImg from "../../assets/cat.jpg";
import duckImg from "../../assets/duck.jpg";
import dogImg from "../../assets/dog.jpg";

export default function HomeSection4() {
  const [buttonsImageURL, buttonImageURL] = useState("");

  const handleDigTech = () => {
    buttonImageURL(dogImg);
  };
  const handleLearnPath = () => {
    buttonImageURL(catImg);
  };
  const handleKeyComp = () => {
    buttonImageURL(duckImg);
  };
  const handleIr4 = () => {
    buttonImageURL(duckImg);
  };

  return (
    <>
      <div className="fifthSection">
        <div>How our programe help teachers and schools</div>
        <button onClick={handleDigTech} className="howHelpButtons">
          DIGITAL TECHNOLOGIES
        </button>

        <button onClick={handleLearnPath} className="howHelpButtons">
          LEARNING PATHWAYS
        </button>
        <button onClick={handleKeyComp} className="howHelpButtons">
          KEY COMPETENCIES
        </button>
        <button onClick={handleIr4} className="howHelpButtons">
          IR4.0
        </button>
        <img src={buttonsImageURL} alt="" />
      </div>
    </>
  );
}
