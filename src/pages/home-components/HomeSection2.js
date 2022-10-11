import { useState } from "react";
import React from "react";
import "./HomeSection2.css";

import animations from "../../assets/Home/animation.png";
import augreality from "../../assets/Home/augreality.png";
import chatbots from "../../assets/Home/chatbots.png";
import games from "../../assets/Home/games.png";

import laptop1 from "../../assets/Home/laptop1.png";
import laptop2 from "../../assets/Home/laptop2.png";
import laptop3 from "../../assets/Home/laptop3.png";
import laptop4 from "../../assets/Home/laptop4.png";

export default function HomeSection2() {
  const [buttonsImageURL1, setButtonImageURL1] = useState(laptop1);
  // const [darkCircle, setDarkCircle] = useState(1);
  // give 1 a value

  const handleAnimation = () => {
    setButtonImageURL1(laptop1);
    // setDarkCircle(1);
  };
  const handleAugRea = () => {
    setButtonImageURL1(laptop2);
        // setDarkCircle(2);

  };
  const handleChatBots = () => {
    setButtonImageURL1(laptop3);
        // setDarkCircle(3);

  };
  const handleGames = () => {
    setButtonImageURL1(laptop4);
        // setDarkCircle(4);

  };
  return (
    <>
      <div className="homeSection2">
        <div className="homeSection2Left">
          <div className="homeSection2Title">What we offer</div>
          <div className="homeSection2Text">
            The Creative Problem Solving programme is series of digital creation
            projects aimed to encourage self-motivation and student agency,
            designated by New Zealand's leading IT industry experts and schools.
          </div>
          <div className="homeSection2Title2">What will student create?</div>
          <div className="homeSection2ImageButtons">
            <img
              alt="img"
              className="homeSec2ImgBtn"
              onClick={handleAnimation}
              src={animations}
            />
            <img
              alt="img"
              className="homeSec2ImgBtn"
              onClick={handleAugRea}
              src={augreality}
            />
            <img
              alt="img"
              className="homeSec2ImgBtn"
              onClick={handleChatBots}
              src={chatbots}
            />
            <img
              alt="img"
              className="homeSec2ImgBtn"
              onClick={handleGames}
              src={games}
            />
          </div>
        </div>
        <div className="homeSection2Right">
          <img alt="img" className="homeSection2Image" src={buttonsImageURL1} />
          <div className="homeSection2CircleButtons">
            <button onClick={handleAnimation} className="roundButton"></button>
            <button onClick={handleAugRea} className="roundButton"></button>
            <button onClick={handleChatBots} className="roundButton"></button>
            {/* <button onClick={handleGames} className={roundButton ? 'darkCircle' : 'blanckCircle'}></button> */}
          </div>
        </div>
      </div>
    </>
  );
}
