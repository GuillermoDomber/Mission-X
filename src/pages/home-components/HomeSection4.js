import { useState } from "react";

import Slide1 from "../../pages/home-components/HomeSection4-Slide1"
import Slide2 from "../../pages/home-components/HomeSection4-Slide2"
import Slide3 from "../../pages/home-components/HomeSection4-Slide3"
import Slide4 from "../../pages/home-components/HomeSection4-Slide4"


export default function HomeSection4() {
  const [buttonsImageURL, setButtonImageURL] = useState(Slide1);

  const handleDigTech = () => {
    setButtonImageURL(Slide1);
  };
  const handleLearnPath = () => {
    setButtonImageURL(Slide2);
  };
  const handleKeyComp = () => {
    setButtonImageURL(Slide3);
  };
  const handleIr4 = () => {
    setButtonImageURL(Slide4);
  };

  return (
    <>
      <div className="homeFourthSection">
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
        {buttonsImageURL}
      </div>
    </>
  );
}
