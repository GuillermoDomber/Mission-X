import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './DashboardSidebar.module.css';
import SidebarButton from './DashboardSidebar_Button'


//================IMPORTING HERO COMPONENTS==============================
//Student----------------------------------------------------------
import LearningObjectives from '../pages/studentDashboard-components/StudentDashboard_LearningObjectives'
import Instructions from '../pages/studentDashboard-components/StudentDashboard_Instructions';
import VideoTutorial from '../pages/studentDashboard-components/StudentDashboard_VideoTutorial';
import MakeProject from '../pages/studentDashboard-components/StudentDashboard_MakeProject';
import SubmitProject from '../pages/studentDashboard-components/StudentDashboard_SubmitProject';
//Teacher----------------------------------------------------------
import ProgressTracker from '../pages/teacherDashboard-components/TeacherDashboard_ProgressTracker';//////NEED TO CREATE AND IMPORT THE REST OF THESE
import StudentProfiles from '../pages/teacherDashboard-components/TeacherDashboardStudentProfiles';


//===============IMPORTING IMAGES========================================
import arrowLeft from '../assets/DashboardSidebar/arrowLeft.png'
import profile from '../assets/DashboardSidebar/profile.png'
import settings from '../assets/DashboardSidebar/settings.png'
import logout from '../assets/DashboardSidebar/logout.png'

//Student----------------------------------------------------------
import studentPhoto from '../assets/DashboardSidebar/RawiriFletcher.png'
import learningObjectives from '../assets/DashboardSidebar/learningObjectives.png'
import learningObjectivesSelected from '../assets/DashboardSidebar/learningObjectivesSelected.png'
import instructions from '../assets/DashboardSidebar/instructions.png'
import instructionsSelected from '../assets/DashboardSidebar/instructionsSelected.png'
import video from '../assets/DashboardSidebar/video.png'
import videoSelected from '../assets/DashboardSidebar/videoSelected.png'
import makeProject from '../assets/DashboardSidebar/makeProject.png'
import makeProjectSelected from '../assets/DashboardSidebar/makeProjectSelected.png'
import submitProject from '../assets/DashboardSidebar/submitProject.png'
import submitProjectSelected from '../assets/DashboardSidebar/submitProjectSelected.png'
import bonusChallenge from '../assets/DashboardSidebar/bonusChallenge.png'
import takeTheQuiz from '../assets/DashboardSidebar/takeTheQuiz.png'
//Teacher----------------------------------------------------------
import progressTracker from '../assets/DashboardSidebar/progressTracker.png'
import progressTrackerSelected from '../assets/DashboardSidebar/progressTrackerSelected.png'
import studentProfiles from '../assets/DashboardSidebar/studentProfiles.png'
import studentProfilesSelected from '../assets/DashboardSidebar/studentProfilesSelected.png'
import helpRequests from '../assets/DashboardSidebar/helpRequests.png'
import helpRequestsSelected from '../assets/DashboardSidebar/helpRequestsSelected.png'
import projectSubmissions from '../assets/DashboardSidebar/projectSubmissions.png'
import projectSubmissionsSelected from '../assets/DashboardSidebar/projectSubmissionsSelected.png'
import projectLibrary from '../assets/DashboardSidebar/projectLibrary.png'
import projectLibrarySelected from '../assets/DashboardSidebar/projectLibrarySelected.png'







//******************************SIDEBAR COMPONENT*********************************//
export default function DashboardSidebar(props) {
  

  //SIDEBAR COLLAPSING FUNCTIONALITY----------------------------------
  const sidebarCollapsed = localStorage.getItem('sidebar-collapsed');
  const [isExpanded, setIsExpanded] = useState(sidebarCollapsed ? false : true);

 const handleSidebarToggle = () => {
    if (isExpanded){
      setIsExpanded(false);
      localStorage.setItem('sidebar-collapsed', true);
      return;
    }
    setIsExpanded(true);
    localStorage.removeItem('sidebar-collapsed')
  };
  
  //ARRAYS FOR DYNAMICALLY DISPLAYING DIFFERENT SIDEBARS AND BUTTONS------------------------------
  const teacherArray = [
    {
      id: "progressTrackerBtn",
      name: "Progress Tracker",
      img: progressTracker,
      imgSelected: progressTrackerSelected,
      text: "PROGRESS TRACKER",
      componentToDisplay: <ProgressTracker />,
    },
    {
      id: "studentProfilesBtn",
      name: "Student Profiles",
      img: studentProfiles,
      imgSelected: studentProfilesSelected,
      text: "STUDENT PROFILES",
      componentToDisplay: <StudentProfiles />
    },
    {
      id: "helpRequestsBtn",
      name: "Help Requests",
      img: helpRequests,
      imgSelected: helpRequestsSelected,
      text: "HELP REQUESTS",
    },
    {
      id: "projectSubmissionsBtn",
      name: "Project Submissions",
      img: projectSubmissions,
      imgSelected: projectSubmissionsSelected,
      text: "PROJECT SUBMISSIONS",
    },
    {
      id: "projectLibrary",
      name: "Project Library",
      img: projectLibrary,
      imgSelected: projectLibrarySelected,
      text: "PROJECT LIBRARY",
    },
    
  ];

    ///Note- may not need the imgSelected in the last two objects
    const studentArray = [
      {
        id: "learningObjectivesBtn",
        name: "Learning Objectives",
        img: learningObjectives,
        imgSelected: learningObjectivesSelected,
        text: "LEARNING OBJECTIVES",
        componentToDisplay: <LearningObjectives />,
      },
      {
        id: "instructionsBtn",
        name: "Instructions",
        img: instructions,
        imgSelected: instructionsSelected,
        text: "INSTRUCTIONS",
        componentToDisplay: <Instructions />,
      }, 
      {
        id: "videoBtn",
        name: "Video Tutorials",
        img: video,
        imgSelected: videoSelected,
        text: "VIDEO TUTORIAL",
        componentToDisplay: <VideoTutorial />,
      },
      {
        id: "makeProjectBtn",
        name: "Make project",
        img: makeProject,
        imgSelected: makeProjectSelected,
        text: "MAKE PROJECT",
        componentToDisplay: <MakeProject />,
      },
      {
        id: "submitProjectBtn",
        name: "Submit Project",
        img: submitProject,
        imgSelected: submitProjectSelected,
        text: "SUBMIT PROJECT",
        componentToDisplay: <SubmitProject />
      },
      {
        id: "bonusChallengeBtn",
        name: "Bonus Challenge",
        img: bonusChallenge,
        imgSelected: bonusChallenge,
        text: "BONUS CHALLENGE",
      },
      {
        id: "takeTheQuizBtn",
        name: "Take the Quiz",
        img: takeTheQuiz,
        imgSelected: takeTheQuiz,
        text: "TAKE THE QUIZ",
      },
    ];

//GETTING THE CORRECT SIDEBAR TO DISPLAY ON EACH PAGE----------------------
//Setting a variable that is equal to the current page route url https://stackoverflow.com/questions/39823681/read-the-current-full-url-with-react
let pageDirectory = window.location.pathname//this could also be set to empty initially 

if (window.location.pathname === "/StudentDashboard"){
    pageDirectory= studentArray
}else if(window.location.pathname === "/TeacherDashboard"){
    pageDirectory= teacherArray
}


//MAPPING OF THR BUTTONS FROM THE ARRAYS-----------------------------------
//do I use the index to add a key???
const buttons = pageDirectory.map((item, index) => {
  return <SidebarButton
  key={index}
  id={item.id}
  name={item.name}
  img={item.img}
  imgSelected={item.imgSelected}
  text={item.text}
  componentToDisplay={item.componentToDisplay}
  handleButtonToggle={props.handleButtonToggle}//Is this used???
  whatButtonIsSelected={props.whatButtonIsSelected}//Is this used????
  displayedHeroContent={props.displayedHeroContent}
  setDisplayedHeroContent={props.setDisplayedHeroContent}
  
  />
})
  return (
    <div className={isExpanded ? styles.sidebar_container : `${styles.sidebar_container} ${styles.collapsed}`}>
      
      <div className={styles.studentPhoto_container}>
        <img src={studentPhoto} className={styles.studentPhoto} />
      </div>

      {buttons}

      <div className={styles.sidebar_arrow_container} onClick={handleSidebarToggle}>
        <div className={styles.sidebar_arrow}><img src={arrowLeft} /></div>
      </div>

      <div className={styles.sidebar_settings_icons_container}>
        <div className={styles.sidebar_settings_icons}><img src={profile} /><p>Profile</p></div>
        <div className={styles.sidebar_settings_icons}><img src={settings} /><p>Settings</p></div>
        <Link to="/" className={styles.sidebar_link}><div className={styles.sidebar_settings_icons}><img src={logout} /><p>Log out</p></div></Link>
      </div>
    
    </div>
  )
}


 