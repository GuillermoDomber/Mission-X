import React from "react";
import { Link } from 'react-router-dom'
import { useState } from 'react'
import styles from "./DashboardNavBar.module.css";

// IMAGE IMPORTS-----------------------
import Logo from "./../assets/DashboardNavBar/LevelUpWorks-blue.png";
import ProjectTrackerPlaceholder from './../assets/DashboardNavBar/ProjectTrackerPlaceholder.png'
import MaoriFlag from './../assets/DashboardNavBar/MaoriFlag.png'
import NZFlag from './../assets/DashboardNavBar/NZFlag.png'


//COMPONENT BEGINS==============================
export default function DashboardNavBar() {

  //Mapped Project Tracker Buttons---------------------------
  const[progressTrackerBtn, setProgressTrackerBtn] = useState("4")

  const trackerButtonsArrayStudent = 
  [{id: "1"}, {id: "2"},{id: "3"},{id: "4"},{id: "5"},{id: "6"},{id: "7"},{id: "8"},{id: "9"},{id: "10"},{id: "11"},{id: "12"},{id: "13"},{id: "14"},{id: "15"}]


  //Need a second class for if the id is the same as the current project
  const trackerButtons = trackerButtonsArrayStudent.map((item, index) => {
    return (
      <div className={progressTrackerBtn === item.id ? styles.dotSelected : styles.dot}><p className={styles.dot_text}>{item.id}</p></div>

    )});




  //Mapped nav buttons- Arrays---------------------------
  const navButtonsArrayStudent = [
    {
        id: "screenshotBtn",
        name: "Screenshot Button",
        text: "Take Screenshot",
      },
      {
        id: "helpBtn",
        name: "Help Button",
        text: "Ask Teacher for help",
      },
      {
        id: "projectsBtn",
        name: "Projects Button",
        text: <Link to="/StudentProjectLibrary" className={styles.navBar_links}> More Projects </Link>,
      },
    ]

  const navButtonsArrayTeacher = [
      {
          id: "screenshotBtn",
          name: "Teacher Screenshot Button",
          text: "Take Screenshot",
        },
        {
          id: "helpBtn",
          name: "Help Centre Button",
          text: "Help Centre",
        },
        {
          id: "projectsBtn",
          name: "Projects Button",
          text: <Link to="/StudentProjectLibrary" className={styles.navBar_links}> More Projects </Link>,
        },
     ]

    //Mapped buttons- conditional rendering depending on page route-------------------------------
    let buttonsToDisplay = window.location.pathname//this could also be set to empty initially 

    if (window.location.pathname === "/StudentDashboard"){
        buttonsToDisplay= navButtonsArrayStudent
    }else if(window.location.pathname === "/TeacherDashboard"){
        buttonsToDisplay= navButtonsArrayTeacher
    }

    const navButtons = buttonsToDisplay.map((item, index) => {
      return (
        <div className={`${styles[item.id]} ${styles.navBarBtns}`}>{item.text}</div>

      )});



  return (
    <div className={styles.dashboardNavBar_outer_container}>


      <div>
      <Link to="/"><img src={Logo} className={styles.dashboard_navbar_logo} alt="Level Up Logo"/></Link> 
      </div>

  
      <div className={`${styles.dashboard_progressTracker_container} ${buttonsToDisplay ===  navButtonsArrayTeacher && styles.dashboard_progressTracker_container_hidden}`} >
        {/* <img src={ProjectTrackerPlaceholder} className={styles.dashboard_progressTracker} alt="Progress Tracker Placeholder"/> */}
        <div className={styles.tracker_text_container}>
          <div className={styles.tracker_text_title}>PROJECT</div>
          {/* This should be a dynamic name value depending on the project selected. */}
          <div className={styles.tracker_text_sub}>Introduction</div>

        </div>
        {trackerButtons}
        {/* <div className={styles.dot}></div> */}
      </div>

      <div className={styles.dashboard_nav_btns_container}>
        {navButtons}
      </div>

      <div className={styles.dashboard_navbar_flags_container} >
        <img src={NZFlag} className={styles.navbar_flags} alt="NZ Flag" />
        <img src={MaoriFlag} className={styles.navbar_flags} alt="Māori Flag" />
      </div>


    </div>
  );
}

