import { useState } from "react";
import React from "react";


import animations from "../../assets/Home/animation.png";
import augreality from "../../assets/Home/augreality.png";
import chatbots from "../../assets/Home/chatbots.png";
import games from "../../assets/Home/games.png";

import laptop1 from "../../assets/Home/laptop1.png";
import laptop2 from "../../assets/Home/laptop2.png";
import laptop3 from "../../assets/Home/laptop3.png";
import laptop4 from "../../assets/Home/laptop4.png";

export default function HomeSection2() {
  const [buttonsImageURL1, setButtonImageURL1] = useState("");

  const handleAnimation = () => {
    setButtonImageURL1(laptop1);
  };
  const handleAugRea = () => {
    setButtonImageURL1(laptop2);
  };
  const handleChatBots = () => {
    setButtonImageURL1(laptop3);
  };
  const handleGames = () => {
    setButtonImageURL1(laptop4);
  };
  return (
    <>
      <div className="homeSecondSection">
        <div>What we offer</div>
        <div>
          The Creative Problem Solving programme is series of digital creation
          projects aimed to encourage self-motivation and student agency,
          designated by New Zealand's leading IT industry experts and schools.
        </div>
      </div>
      <div className="">
        <div>What will student create?</div>
        <button onClick={handleAnimation} className="squareButtonPicture">
          <img src={animations} />
        </button>
        <button onClick={handleAugRea} className="squareButtonPicture">
          <img src={augreality} />
        </button>
        <button onClick={handleChatBots} className="squareButtonPicture">
          <img src={chatbots} />
        </button>
        <button onClick={handleGames} className="squareButtonPicture">
          <img src={games} />{" "}
        </button>

        <img src={buttonsImageURL1} alt="" />

        <button>animation</button>
        <button>augreality</button>
        <button>chatbots</button>
        <button>games</button>
      </div>
    </>
  )
  }
