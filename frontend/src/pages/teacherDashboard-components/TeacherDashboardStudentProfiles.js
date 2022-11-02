//-----------------PACKAGE IMPORTS AND CSS--------------------//
import React from 'react'
import { useState, useEffect } from 'react'
import styles from './TeacherDashboardStudentProfiles.module.css'




export default function TeacherDashboardStudentProfiles() {
  //Contains the data of all students 
  const [studentProfiles, setStudentProfiles] = useState([])


  //--------------------FETCHING STUDENT PROFILES DATA--------------------//
  useEffect(() => {
    fetch("http://localhost:4000/teacherDashboard/student_profiles")
    .then((res) =>res.json())
    .then((resultsData) =>{
      // console.log('student profiles', resultsData)
      setStudentProfiles(resultsData)
    });
  }, []);

//--------------------MAPPING OF STUDENT PROFILE DATA ONTO CARDS--------------------//
const profileCards = studentProfiles.map((student)=>{
    return(
        <div className={styles.card}>
            <img src={student.profile_pic} className={styles.card_img}/>
            <p className={styles.card_text}>{(student.name).toUpperCase()}</p>
        </div>
    )
})



//************************************STUDENT PROFILES RETURN AREA BEGINS*******************************************************/

  return (
    <div className={styles.outermost_container}>
        <div className={styles.card_container}>
        {profileCards}
        </div>
    </div>
  )
}
