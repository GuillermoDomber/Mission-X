import HeaderJG from "./HeaderJg/HeaderJg";
import styles from "./StudentProfileViewer.module.css";
import Edit from "../assets/libPhoto/EditProfile.jpg";
import Change from "../assets/libPhoto/ChangePhoto.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";

export default function StudentProfileViewer() {
  const [studentProfile, setStudentProfile] = useState([]);
  useEffect(function () {
    fetch("http://localhost:4000/studentprofileviewer")
      .then((res) => res.json())
      .then((resultsData) => {
        setStudentProfile(resultsData);
      });
  }, []);

  return (
    <div>
      <HeaderJG></HeaderJG>
      <div className={styles.mainBody}>
        <div>
          {studentProfile &&
            studentProfile.map(function (show) {
              return (
                <div className={styles.leftRight}>
                  <div className={styles.leftBody}>
                    <img
                      src={show.student_profile_pic}
                      className={styles.kidImg}
                      alt="kid"
                    ></img>

                    <img src={Edit} className={styles.button1} alt="edit"></img>
                    <img
                      src={Change}
                      className={styles.button2}
                      alt="change"
                    ></img>
                  </div>
                  <div className={styles.rightBody}>
                    <h1 className={styles.studentNameHeader}>{show.name}</h1>
                    <div className={styles.bottomContent}>
                      <div className={styles.leftTitle}>
                        <p className={styles.pTag}>School</p>
                        <p className={styles.pTag}>Teacher</p>
                        <p className={styles.pTag}>Course</p>
                        <p className={styles.pTag}>Date of Birth</p>
                        <p className={styles.pTag}>Contact No</p>
                        <p className={styles.pTag}>Email Address</p>
                      </div>
                      <div className={styles.rightTitle}>
                        <p className={styles.pTag}>{show.student_name}</p>
                        <p className={styles.pTag}>{show.teacher_name}</p>
                        <p className={styles.pTag}>{show.course}</p>
                        <p className={styles.pTag}>{show.student_date_of_birth}</p>
                        <p className={styles.pTag}>{show.student_contact_number}</p>
                        <p className={styles.pTag}>{show.student_email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
  
        <div className={styles.backToProject}>
          <button className={styles.btp}>
            <Link
              className={styles.backToProjectsLink}
              to="/StudentProjectLibrary"
            >
              BACK TO PROJECTS
            </Link>
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
