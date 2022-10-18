import React from "react";

const Navigation = ({ position = 0, items = [], onClick }) => {
  return (
    <div>
      {items.map((_, i) => (
        <button
          style={{ background: position === i ? "black" : "white" }}
          onClick={() => onClick(i)}
          className="roundButton"
        ></button>
      ))}
    </div>
  );
};

export default function Carousel({
  items,
  position = 0,
  onNavigate,
  ...props
}) {
  return (
    <div className="carousel" {...props}>
      <img alt="img" style={{ width: "100%" }} src={items[position]} />
      <Navigation items={items} position={position} onClick={onNavigate} />
    </div>
  );
}
