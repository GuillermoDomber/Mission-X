import React from "react";
import { useState } from 'react';
import styles from "././studentDashboard-components/StudentDashboard.module.css";


//COMPONENT-IMPORTS----------------------
import DashboardNavBar from "../components/DashboardNavBar";
import DashboardSidebar from "../components/DashboardSidebar";
import StudentDashboardHero from "./studentDashboard-components/StudentDashboard-hero";
import DashboardFooter from "../components/DashboardFooter";
import LearningObjectives from "./studentDashboard-components/StudentDashboard_LearningObjectives";
import ProgressTracker from "./teacherDashboard-components/TeacherDashboard_ProgressTracker";

//IMPORT IMAGES FOR FIRST BUTTON----------------
import learningObjectives from '../assets/DashboardSidebar/learningObjectives.png'
import learningObjectivesSelected from '../assets/DashboardSidebar/learningObjectivesSelected.png'
import progressTracker from '../assets/DashboardSidebar/progressTracker.png'
import progressTrackerSelected from '../assets/DashboardSidebar/progressTrackerSelected.png'



//****************STUDENT DASHBOARD PAGE COMPONENT*******************/
export default function StudentDashboard() {
 
  //Setting the initial hero component to render--------
  const [displayedHeroContent, setDisplayedHeroContent] = useState(initialButtonToggled())
 
function initialButtonToggled(){
  if (window.location.pathname === "/StudentDashboard"){
    return  {
      id: "learningObjectivesBtn",
      name: "Learning Objectives",
      img: learningObjectives,
      imgSelected: learningObjectivesSelected,
      text: "LEARNING OBJECTIVES",
      componentToDisplay: <LearningObjectives />,
    }
  }else if(window.location.pathname === "/TeacherDashboard"){
    return  {
      id: "progressTrackerBtn",
      name: "Progress Tracker",
      img: progressTracker,
      imgSelected: progressTrackerSelected,
      text: "PROGRESS TRACKER",
    }
  }
}

 
  return (
    <div className={styles.pageContainer}>
      
      <DashboardNavBar />

      <main className={styles.mainHeroSection}>
        <DashboardSidebar displayedHeroContent={displayedHeroContent} setDisplayedHeroContent={setDisplayedHeroContent} />
        <StudentDashboardHero displayedHeroContent={displayedHeroContent} />
      </main>



      <DashboardFooter />
    </div>
  );
}
