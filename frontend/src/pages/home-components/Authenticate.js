import React from "react";
import { useState } from "react";
// import HomeLogin from "./HomeLogin";
import LoginSignup from "./LoginSignUp";
import "./HomeModal.css";
import studentsImg from "../../assets/LoginSignup/students.png";
import teachersImg from "../../assets/LoginSignup/teachers.png";

const TYPES = {
  student: { title: "Students", image: studentsImg },
  teacher: { title: "Teachers", image: teachersImg },
};

export default function Authenticate({
  type = "student",
  selected = "login",
  onSelectForm,
}) {
  const { title, image } = TYPES[type];
  return (
    <div className="home-authenticate-user">
      <img src={image} alt="img" />
      <div className="home-students">{title}</div>

      <div className="home-colum home-help">
        <LoginSignup
          selected={selected}
          type={type}
          onNavigate={onSelectForm}
        />
      </div>
    </div>
  );
}
