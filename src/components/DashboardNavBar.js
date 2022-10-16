import React from "react";
import { Link } from 'react-router-dom'
import styles from "./DashboardNavBar.module.css";

// IMAGE IMPORTS-----------------------
import Logo from "./../assets/DashboardNavBar/LevelUpWorks-blue.png";
import ProjectTrackerPlaceholder from './../assets/DashboardNavBar/ProjectTrackerPlaceholder.png'
import MaoriFlag from './../assets/DashboardNavBar/MaoriFlag.png'
import NZFlag from './../assets/DashboardNavBar/NZFlag.png'


//COMPONENT BEGINS==============================
export default function DashboardNavBar() {
  return (
    <div className={styles.dashboardNavBar_outer_container}>


      <div>
      <Link to="/"><img src={Logo} className={styles.dashboard_navbar_logo} alt="Level Up Logo"/></Link> 
      </div>

      <div className={styles.dashboard_progressTracker_container} >
        <img src={ProjectTrackerPlaceholder} className={styles.dashboard_progressTracker} alt="Progress Tracker Placeholder"/>
      </div>

      <div className={styles.dashboard_nav_btns_container}>
        <div className={`${styles.dashboard_btns} ${styles.orange}`}>TAKE SCREENSHOT-MD</div>
        <div className={`${styles.dashboard_btns} ${styles.pink}`}>ASK TEACHER FOR HELP-MD</div>
        <div className={`${styles.dashboard_btns} ${styles.blue}`}>MORE PROJECTS-MD</div>
      </div>

      <div className={styles.dashboard_navbar_flags_container} >
        <img src={NZFlag} className={styles.navbar_flags} alt="NZ Flag" />
        <img src={MaoriFlag} className={styles.navbar_flags} alt="Māori Flag" />
      </div>


    </div>
  );
}
