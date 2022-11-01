import React from "react";

import HomeLogin from "./HomeLogin";
import HomeSignUp from "./HomeSignUp";

const FORMS = {
  login: HomeLogin,
  signup: HomeSignUp,
};

export default function Slider({
  selected = "login",
  type,
  onNavigate,
  ...props
}) {
  const Form = FORMS[selected];

  return (
    <div className="carousel" {...props}>
      <div className="home-row home-slider-nav">
        <button
          onClick={() => onNavigate("login")}
          className={`button ${
            selected === "login" ? "button-active" : ""
          } button-xl`}
        >
          Log In
        </button>
        <button
          onClick={() => onNavigate("signup")}
          className={`button ${
            selected === "signup" ? "button-active" : ""
          } button-xl`}
        >
          Sign Up
        </button>
      </div>
      <Form type={type} />
    </div>
  );
}
