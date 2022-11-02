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
const showFour = () => {setShowProjects(showAll.slice(0,4))}
const showEight = () => {setShowProjects(showAll.slice(0,8))}
const showEleven = () => {setShowProjects(showAll.slice(0,11))}

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
          <button onClick={showFour} className={styles.number25}>4</button>
          <button onClick={showEight} className={styles.number50}>8</button>
          <button onClick={showEleven} className={styles.number100}>11</button>
        </div>
      </div>

      {/* <div>
      
<MappedStudentProjects></MappedStudentProjects>

      </div> */}

      <div className={styles.bottomProjects}>


{/* {showBeg===true?showBeg:} */}

{showProjects &&
          showProjects.map(function (show) {
            let linkToIntro = show.project_id === 1 ? "/StudentDashboard" : "";
            if(show.course==="Beginner"){}
            return (
              <div>
                <Link className={styles.introLink} to={linkToIntro}>
                  <div key={show.project_id} className={styles.eachProject}>
                    <img
                      className={styles.projectImage}
                      src={show.project_pic}
                      alt="project images"
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
