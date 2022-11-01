import React from 'react'
import styles from './TeacherDashboardStudentProfiles.module.css'
import { useState, useEffect } from 'react'

export default function TeacherDashboardStudentProfiles() {
  const [studentProfiles, setStudentProfiles] = useState([])


  //---------------------STUDENT PROFILES DATA--------------------//
  useEffect(() => {
    fetch("http://localhost:4000/teacherDashboard/student_profiles")
    .then((res) =>res.json())
    .then((resultsData) =>{
      console.log('student profiles', resultsData)
      setStudentProfiles(resultsData)
    });
  }, []);

const profileCards = studentProfiles.map((student)=>{
    return(
        <div className={styles.card}>
            <img src={student.profile_pic} className={styles.card_img}/>
            <p className={styles.card_text}>{(student.name).toUpperCase()}</p>
        </div>
    )
})


  return (
    <div className={styles.outermost_container}>
        <div className={styles.card_container}>
        {profileCards}
        </div>
    </div>
  )
}
