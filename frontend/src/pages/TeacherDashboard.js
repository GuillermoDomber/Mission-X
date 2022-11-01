import React from 'react'
import { useState } from 'react'
import DashboardNavBar from "../components/DashboardNavBar";
import DashboardSidebar from "../components/DashboardSidebar";
import DashboardFooter from "../components/DashboardFooter";
// import styles from '../components/DashboardSidebar.module.css';
import styles from "././studentDashboard-components/StudentDashboard.module.css";


//COMPONENT-IMPORTS----------------------
import LearningObjectives from "./studentDashboard-components/StudentDashboard_LearningObjectives";
import ProgressTracker from "./teacherDashboard-components/TeacherDashboard_ProgressTracker";
import TeacherDashboardHero from "./teacherDashboard-components/TeacherDashboard-hero";

//IMPORT IMAGES FOR FIRST BUTTON----------------
import learningObjectives from '../assets/DashboardSidebar/learningObjectives.png'
import learningObjectivesSelected from '../assets/DashboardSidebar/learningObjectivesSelected.png'
import progressTracker from '../assets/DashboardSidebar/progressTracker.png'
import progressTrackerSelected from '../assets/DashboardSidebar/progressTrackerSelected.png'

export default function TeacherDashboard() {


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
      componentToDisplay: <ProgressTracker />,
    }
  }
}

  return (
    <div className={styles.pageContainer}>

        <DashboardNavBar />

        <main className={styles.mainHeroSection}>
        <DashboardSidebar displayedHeroContent={displayedHeroContent} setDisplayedHeroContent={setDisplayedHeroContent} />
        <TeacherDashboardHero displayedHeroContent={displayedHeroContent} />
        </main>
        
        
        <DashboardFooter />
        

    </div>
  )
}
