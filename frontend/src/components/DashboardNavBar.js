//-----------------PACKAGE IMPORTS AND CSS--------------------//
import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from "./DashboardNavBar.module.css";

//IMAGE IMPORTS---------------------------------
import Logo from "./../assets/DashboardNavBar/LevelUpWorks-blue.png";
import MaoriFlag from './../assets/DashboardNavBar/MaoriFlag.png'
import NZFlag from './../assets/DashboardNavBar/NZFlag.png'





//************************************DASHBOARD NAVBAR COMPONENT BEGINS*******************************************************/
export default function DashboardNavBar() {
  const navigate = useNavigate();
  const [trackerBtnLocalStorage, setTrackerBtnLocalStorage] = useState([])
  const [trackerTitleLocalStorage, setTrackerTitleLocalStorage] = useState([])
  


  //------------------------MAPPED PROJECT TRACKER BUTTON ELEMENTS-------------------------------//
  const trackerButtonsArrayStudent = 
  [{id: 1}, {id: 2},{id: 3},{id: 4},{id: 5},{id: 6},{id: 7},{id: 8},{id: 9},{id: 10},{id: 11},{id: 12},{id: 13},{id: 14},{id: 15}]

  //How to get the tracker button to access local storage and then use this to change the class and appearance---------
    useEffect(() => {
      // console.log(localStorage.getItem('project-selected'))
      // console.log(localStorage.getItem('project-name'))
      setTrackerBtnLocalStorage(parseInt(localStorage.getItem('project-selected'))+ 1)
      setTrackerTitleLocalStorage(localStorage.getItem('project-name'))
    }, []);

  //used for testing to check the correct project id was being stored when a project was clicked on.
    // useEffect(() => {
    //   console.log(trackerBtnLocalStorage)
    // }, [trackerBtnLocalStorage]);

  //THE MAP OF THE PROJECT TRACKER BUTTONS------------
    let trackerButtons =  trackerButtonsArrayStudent.map((item, index) => {
      return (
        <div className={styles.dot_outer} key={index}>
          <div className={trackerBtnLocalStorage === item.id ? styles.dotSelected : styles.dot}><p className={styles.dot_text}>{item.id}</p></div>
        </div>
      )});

//----------------------------------------------------------------------END OF TRACKER MAP FUNCTION//


  //------------------------MAPPED NAV BUTTON ELEMENTS-------------------------------//
  //Arrays---------------------------
  const navButtonsArrayStudent = [
    {
        id: "screenshotBtn",
        name: "Screenshot Button",
        text: <div onClick={() => {navigate("/404_page_not_found")}}>Take Screenshot</div>,
      },
      {
        id: "helpBtn",
        name: "Help Button",
        text: <div onClick={() => {navigate("/404_page_not_found")}}>Ask Teacher for help</div>,
      },
      {
        id: "projectsBtn",
        name: "Projects Button",
        text: <Link to="/StudentProjectLibrary" className={styles.navbar_links}> More Projects </Link>,
      },
    ]

  const navButtonsArrayTeacher = [
      {
          id: "screenshotBtn",
          name: "Teacher Screenshot Button",
          text: <div onClick={() => {navigate("/404_page_not_found")}}>Take Screenshot</div>,
        },
        {
          id: "helpBtn",
          name: "Help Centre Button",
          text: <div onClick={() => {navigate("/404_page_not_found")}}>Help Centre</div>,
        },
        {
          id: "projectsBtn",
          name: "Projects Button",
          text: <Link to="/StudentProjectLibrary" className={styles.navbar_links}> More Projects </Link>,
        },
     ]

    //Mapped nav buttons logic- conditional rendering depending on page route (student-dashboard or teacher-dashboard)-------------------
    let buttonsToDisplay = window.location.pathname//this could also be set to empty initially 

    if (window.location.pathname === "/StudentDashboard"){
        buttonsToDisplay= navButtonsArrayStudent
    }else if(window.location.pathname === "/TeacherDashboard"){
        buttonsToDisplay= navButtonsArrayTeacher
    }

    //Map of nav buttons--------------------
    const navButtons = buttonsToDisplay.map((item, index) => {
      return (
        <div key={index} className={`${styles[item.id]} ${styles.navbar_btns}`}>{item.text}</div>
      )});



     
      
//***********************************RETURN AREA FOR DASHBOARD NAVBAR COMPONENT*******************************************************//
  return (
    <div className={styles.dashboardNavBar_outer_container}>

      {/* LOGO */}
      <div>
      <Link to="/"><img src={Logo} className={styles.dashboard_navbar_logo} alt="Level Up Logo"/></Link> 
      </div>

      {/* PROJECT TRACKER -- the second className will hide this element on the teacher dashboard pages*/}
      <div className={`${styles.dashboard_projectTracker_container} ${buttonsToDisplay ===  navButtonsArrayTeacher && styles.dashboard_projectTracker_container_hidden}`} >
      
        <div className={styles.tracker_text_container}>
          <div className={styles.tracker_text_title}>PROJECT</div>
          <div className={styles.tracker_text_sub}>{trackerTitleLocalStorage}</div>
        </div>

        {trackerButtons}

      </div>

      {/* NAV BAR BUTTONS */}
      <div className={styles.dashboard_nav_btns_container}>
        {navButtons}
      </div>

      {/* FLAGS CONTAINER */}
      <div className={styles.dashboard_navbar_flags_container} >
        <img src={NZFlag} className={styles.navbar_flags} alt="NZ Flag" />
        <img src={MaoriFlag} className={styles.navbar_flags} alt="Māori Flag" />
      </div>


    </div>
  );
}

