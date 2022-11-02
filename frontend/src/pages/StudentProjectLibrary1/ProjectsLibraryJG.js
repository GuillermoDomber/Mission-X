import styles from "./ProjectsLibraryJG.module.css";
import MappedStudentProjects from "../../components/ProjectComponentsJg";
import { useState, useEffect } from "react";
import items from "../../components/ProjectComponentsJg";
import { Link } from "react-router-dom";

export default function ProjectsLibraryJG() {
  //--------function to go back to top--------------------
  const backToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  //----original code(not separate component)-----

  const [showProjects, setShowProjects] = useState([]);

   useEffect(function () {
    fetch("http://localhost:4000/studentprojectlibrary")
      .then((res) => res.json())
      .then((resultsData) => {
        // console.log(resultsData);
        setShowProjects(resultsData);
        setShowAll(resultsData)
      });
  }, []);

  function handleLocalStorage(e) {
    console.log(e.currentTarget.id)
    localStorage.setItem('project-selected', (e.currentTarget.id-1));
    console.log(`the project selected is ${localStorage.getItem('project-selected')}`)
  } 
// //-----------testing beg-int-adv filter------------
  const [showBeg,setShowBeg] = useState([])
  const [showInt,setShowInt] = useState([])
  const [showAdv,setShowAdv] = useState([])
  const [showAll,setShowAll] = useState([])
useEffect(function () {
  fetch("http://localhost:4000/studentprojectlibrary1")
    .then((res) => res.json())
    .then((resultsData1) => {
      console.log(resultsData1);
     setShowBeg(resultsData1);
    });
}, []);

useEffect(function () {
  fetch("http://localhost:4000/studentprojectlibrary2")
    .then((res) => res.json())
    .then((resultsData2) => {
      console.log(resultsData2);
     setShowInt(resultsData2);
    });
}, []);

useEffect(function () {
  fetch("http://localhost:4000/studentprojectlibrary3")
    .then((res) => res.json())
    .then((resultsData3) => {
      console.log(resultsData3);
     setShowAdv(resultsData3);
    });
}, []);

const allButton = () =>{setShowProjects(showAll)}
const begButton = () =>{setShowProjects(showBeg)}
const intButton = () => {setShowProjects(showInt)}
const advButton = () => {setShowProjects(showAdv)}




// //-----------^^testing beg-int-adv filter^^------------
  return (
    <div className={styles.rightSide}>
      <div className={styles.topButtons}>
        <div className={styles.leftButtons}>
        <button onClick={allButton} >
            ALL
          </button>
          <button onClick={begButton} className={styles.begBtn}>
            BEGINNER
          </button>
          <button onClick={intButton} className={styles.intBtn}>INTERMEDIATE</button>
          <button onClick={advButton} className={styles.advBtn}>ADVANCED</button>
        </div>
        <div className={styles.rightButton}>
          <span className={styles.show}>SHOW</span>
          <button className={styles.number25}>5</button>
          <button className={styles.number50}>10</button>
          <button className={styles.number100}>15</button>
        </div>
      </div>

      {/* <div>
      
<MappedStudentProjects></MappedStudentProjects>

      </div> */}

      <div className={styles.bottomProjects}>


{/* {showBeg===true?showBeg:} */}

{showProjects &&
          showProjects.map(function (show) {
  
            if(show.course==="Beginner"){}
            return (
              <div>
                <Link className={styles.introLink} to="/StudentDashboard">
                  <div key={show.project_id} className={styles.eachProject}>
                    <img
                      className={styles.projectImage}
                      src={show.project_pic}
                      alt="project images"
                      id={show.project_id}
                      onClick={handleLocalStorage}
                    ></img>
                    <p>{show.name}</p>
                    <p>
                      {show.course} | {show.activity_type}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}

 
       


      </div>

      <div className={styles.bottomRightButton}>
        <button onClick={backToTop}>BACK TO TOP</button>
      </div>
    </div>
  );
}
