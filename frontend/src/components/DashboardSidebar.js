//-----------------PACKAGE IMPORTS AND CSS--------------------//
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './DashboardSidebar.module.css';
import SidebarButton from './DashboardSidebarButton'


//================IMPORTING HERO COMPONENTS==============================
//Student----------------------------------------------------------
import LearningObjectives from '../pages/studentDashboard-components/StudentDashboardLearningObjectives'
import Instructions from '../pages/studentDashboard-components/StudentDashboardInstructions';
import VideoTutorial from '../pages/studentDashboard-components/StudentDashboardVideoTutorial';
import MakeProject from '../pages/studentDashboard-components/StudentDashboardMakeProject';
import SubmitProject from '../pages/studentDashboard-components/StudentDashboardSubmitProject';
//Teacher----------------------------------------------------------
import ProgressTracker from '../pages/teacherDashboard-components/TeacherDashboardProgressTracker';//////NEED TO CREATE AND IMPORT THE REST OF THESE
import StudentProfiles from '../pages/teacherDashboard-components/TeacherDashboardStudentProfiles';
import ProjectSubmissions from '../pages/teacherDashboard-components/TeacherDashboardProjectSubmissions';


//===============IMPORTING IMAGES========================================
import arrowLeft from '../assets/DashboardSidebar/arrowLeft.png'
import profile from '../assets/DashboardSidebar/profile.png'
import settings from '../assets/DashboardSidebar/settings.png'
import logout from '../assets/DashboardSidebar/logout.png'

//Student----------------------------------------------------------
import studentPhoto from '../assets/DashboardSidebar/RawiriFletcher.png'//replace this with a database image
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







//******************************SIDEBAR COMPONENT BEGINS *********************************//
export default function DashboardSidebar(props) {

  //VARIABLES------------------------------------------------------
  // Set up for the navigate function used by some buttons
  const navigate = useNavigate();

//Set up for the sidebar collapsing and expanding states
  const sidebarCollapsed = localStorage.getItem('sidebar-collapsed');
  const [isExpanded, setIsExpanded] = useState(sidebarCollapsed ? false : true);

//Setting a variable that is equal to the current page route url https://stackoverflow.com/questions/39823681/read-the-current-full-url-with-react
//This is used to display the correct buttons on the teacher or the student dashboard
  let pageDirectory = window.location.pathname



  //SIDEBAR COLLAPSING FUNCTIONALITY----------------------------------
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
      componentToDisplay: <ProjectSubmissions />
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

//LOGIC FOR GETTING THE CORRECT SIDEBAR TO DISPLAY ON STUDENT/TEACHER DASHBOARD----------------------

if (window.location.pathname === "/StudentDashboard"){
    pageDirectory= studentArray
}else if(window.location.pathname === "/TeacherDashboard"){
    pageDirectory= teacherArray
}


//MAPPING OF THE SIDEBAR BUTTONS FROM THE STUDENT OR TEACHER ARRAYS-----------------------------------
//passing in the properties of each button as mapped
const buttons = pageDirectory.map((item, index) => {
  return <SidebarButton
  key={index}
  id={item.id}
  name={item.name}
  img={item.img}
  imgSelected={item.imgSelected}
  text={item.text}
  componentToDisplay={item.componentToDisplay}
  displayedHeroContent={props.displayedHeroContent}
  setDisplayedHeroContent={props.setDisplayedHeroContent}

  // handleButtonToggle={props.handleButtonToggle}//Is this used???
  // whatButtonIsSelected={props.whatButtonIsSelected}//Is this used????
  />
})


//***********************************RETURN AREA FOR DASHBOARD SIDEBAR COMPONENT*******************************************************//

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
        <Link to="/StudentProfileViewer" className={styles.sidebar_link}><div className={styles.sidebar_settings_icons}><img src={profile} /><p>Profile</p></div></Link>
        <div className={styles.sidebar_settings_icons} onClick={() => {navigate("/404_page_not_found")}}><img src={settings} /><p>Settings</p></div>
        <Link to="/" className={styles.sidebar_link}><div className={styles.sidebar_settings_icons}><img src={logout} /><p>Log out</p></div></Link>
      </div>
    
    </div>
  )
}


