import React from "react";
import './LoginSignUp.css'

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
          className={`loginsignup-button ${
            selected === "login" ? "loginsignup-button-active" : ""
          } `}
        >
          LOG IN
        </button>
        <button
          onClick={() => onNavigate("signup")}
          className={`loginsignup-button ${
            selected === "signup" ? "loginsignup-button-active" : ""
          } `}
        >
          SIGN UP
        </button>
      </div>
      <Form type={type} />
    </div>
  );
}
