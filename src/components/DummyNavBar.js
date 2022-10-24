import React from "react";
import { Link } from "react-router-dom";

import styles from "./DummyNavBar.module.css"
export default function DummyNavBar() {
  return (

    <div className="dummyNavBar">

      <Link to="/">HomePage</Link>
      <Link to="/StudentDashboard" className="Links">
        StudentDashboard
      </Link>
      <Link to="/StudentProjectLibrary" className="Links">
        StudentProjectLibrary
      </Link>
      <Link to="/TeacherDashboard" className="Links">TeacherDashboard</Link>

      <div>DummyNavBar</div>
    </div>
  );
}
