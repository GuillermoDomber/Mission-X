//-----------------PACKAGE IMPORTS AND CSS--------------------//
import React from "react";
import { useState } from 'react';
import styles from "././studentDashboard-components/StudentDashboard.module.css";


//COMPONENT-IMPORTS----------------------
import DashboardNavBar from "../components/DashboardNavBar";
import DashboardSidebar from "../components/DashboardSidebar";
import StudentDashboardHero from "./studentDashboard-components/StudentDashboardHero";
import DashboardFooter from "../components/DashboardFooter";
import LearningObjectives from "./studentDashboard-components/StudentDashboardLearningObjectives";
import ProgressTracker from "./teacherDashboard-components/TeacherDashboardProgressTracker";

//IMPORT IMAGES FOR FIRST BUTTON----------------
import learningObjectives from '../assets/DashboardSidebar/learningObjectives.png'
import learningObjectivesSelected from '../assets/DashboardSidebar/learningObjectivesSelected.png'
import progressTracker from '../assets/DashboardSidebar/progressTracker.png'
import progressTrackerSelected from '../assets/DashboardSidebar/progressTrackerSelected.png'



//****************STUDENT DASHBOARD PAGE COMPONENT*******************/
export default function StudentDashboard() {
 
  //Setting the initial hero component to render and the sidebar button that should be toggled initially--------
  //props passed into hero, sidebar and sidebar buttons
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
      // componentToDisplay: <ProgressTracker />,
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
