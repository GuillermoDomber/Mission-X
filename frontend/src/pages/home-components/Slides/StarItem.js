import React from "react";

export default function StarItem({ title, text }) {
  return (
    <div className="home-row home-star-item">
      <div className="home-star"></div>
      <div className="home-star-item">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}
