import React from "react";
import "./HomeModal.css";
import LoginSignup from "./LoginSignUp";
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
      <div className="home-modal-title">{title}</div>

      <div className="home-colum ">
        <LoginSignup
          selected={selected}
          type={type}
          onNavigate={onSelectForm}
        />
      </div>
    </div>
  );
}
