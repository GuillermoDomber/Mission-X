import { useState, useEffect } from "react";
import styles from "../components/ProjectComponentsJg.module.css";
import { Link } from "react-router-dom";

export default function MappedStudentProjects() {

    const [showProjects, setShowProjects] = useState([]);

  useEffect(function () {
    fetch("http://localhost:4000/studentprojectlibrary")
      .then((res) => res.json())
      .then((resultsData) => {
        console.log(resultsData);
        setShowProjects(resultsData);
      });
  }, []);

return(
<div className={styles.bottomProjects}>
  {
    showProjects &&
      showProjects.map(function (show) {
        let linkToIntro = show.project_id === 1 ? "/StudentDashboard" : "";

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
      })
  }

</div>
)}


