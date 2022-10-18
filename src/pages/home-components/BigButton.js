import React from "react";

import animations from "../../assets/Home/animation.png";
import augreality from "../../assets/Home/augreality.png";
import chatbots from "../../assets/Home/chatbots.png";
import games from "../../assets/Home/games.png";

const buttons = {
  animations,
  augreality,
  chatbots,
  games,
};

export default function BigButton({ name, ...props }) {
  return (
    <img
      {...props}
      alt={name}
      className="home-big-button"
      src={buttons[name]}
    />
  );
}
