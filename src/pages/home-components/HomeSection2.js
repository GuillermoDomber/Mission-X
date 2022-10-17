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
  const [backGround, setBackGround] = useState("black");
  const changeColour = function () {
    // e.target.style.background = "black";
    switch (backGround) {
      case "white":
        setBackGround("black");
        break;
      case "black":
        setBackGround("white");
        break;
      default:
    }
  
  };
  // var buttons = document.querySelectorAll(
  //   ".roundButton1, .roundButton2, .roundButton3, .roundButton4"
  // );

  // for (var i = 0; i < buttons.length; i++) {
  //   buttons[i].addEventListener("click", function () {
  //     this.classList.toggle("active");
  //   });
  // }
  //   const buttons = document.querySelectorAll('button');

  // buttons.forEach(button => {
  //   button.addEventListener('click', event => {
  //     button.style.backgroundColor = 'black';
  //   });
  // });

  const handleAnimation = () => {
    if (setButtonImageURL1(laptop1)) {
      changeColour("black");
    } else {
      changeColour("white");
    }
  };

  const handleAugRea = () => {
    setButtonImageURL1(laptop2);
    changeColour("");
  };
  const handleChatBots = () => {
    setButtonImageURL1(laptop3);
    changeColour("");
  };
  const handleGames = () => {
    setButtonImageURL1(laptop4);
    changeColour("");
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
            <button
              style={{ background: backGround }}
              onClick={() => {
                handleAnimation();
                // changeColour();
              }}
              className="roundButton1"
            ></button>
            <button
              style={{ background: backGround }}
              onClick={handleAugRea}
              className="roundButton2"
            ></button>
            <button
              style={{ background: backGround }}
              onClick={handleChatBots}
              className="roundButton3"
            ></button>
            <button
              style={{ background: backGround }}
              onClick={handleGames}
              className="roundButton4"
            ></button>
          </div>
        </div>
      </div>
    </>
  );
}
