//----------------------IMPORTS-------------------------------//
import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from './TeacherDashboardProjectSubmissions.module.css'
import Modal from './TeacherDashboardModal'

//-------------------IMAGE IMPORTS--------------------------//
import download from '../../assets/Dashboard/download.png'
import tick from '../../assets/Dashboard/tick.png'
import zoom from '../../assets/Dashboard/zoom.png'




//****************************************COMPONENT FUNCTION  STARTS************************************************/
export default function TeacherDashboardProjectSubmissions() {
//---------USESTATES---------------//
const [submissionData, setSubmissionData]= useState([]) //data from database
const [picPath, setPicPath] = useState()//dynamic path to add each image to modal when clicked.
const [openModal, setOpenModal] = useState(false)//setting modal logic

  


//--------------------FETCHING PROJECT SUBMISSIONS--------------------//
  useEffect(() => {
    fetch("http://localhost:4000/teacherDashboard/project_submissions")
    .then((res) =>res.json())
    .then((resultsData) =>{
      // console.log('Projects submitted data', resultsData)
      setSubmissionData(resultsData);
    });
  }, []);

 //----------------------------MAPPED CARD---------------------------//


const submissionCards = submissionData.map((student)=>{
 
  const date = new Date(student.date_submitted);
  const formattedDate = date.toLocaleTimeString("en-NZ", {
    weekday:"short",
    day:"numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric" 
  })



//Taking the correct pronoun from the database and applying it using this logic
let pronoun = 0;

  if (student.pronoun === 0){
    pronoun="his"
  } else if(student.pronoun === 1){
    pronoun="her"
  } else{
    pronoun= "their"
  }


    return(
      <div className={styles.outside_card}>
      <input type="checkbox" className={styles.checkbox} />
     
      <div className={styles.card}>
        <img src={student.profile_pic} className={styles.profile_pic}/>
        <p className={styles.card_text}>{student.name.toUpperCase().split(' ')[0]} submitted {pronoun} project</p>
        <div className={styles.card_thumbnail}>
          <img src={student.submission} onClick={handleClick} className={styles.card_image}/>
          <span><img src={zoom} className={styles.icon_card}/><p className={styles.thumbnail_text}>ENLARGE PHOTO</p></span>
        </div>
        <div className={styles.date}>
          <p className={styles.date_text}>{formattedDate}</p>
        </div>  
      </div>

    </div>
    )
})

 //---------------------------ONCLICK TO STORE IMAGE SOURCE FOR MODAL---------------------------//
 
 function handleClick(e){
  console.log(e.target.src)
  setPicPath(e.target.src)
  setOpenModal(true)
}


///****************************************COMPONENT RENDER STARTS************************************************/
    return (

        <div className={styles.outermost_container}>

        <div className={styles.header}>
          <p className={styles.title}>PROJECT SUBMISSIONS</p>
          <div className={styles.header_right}>
           <span><img src={download} className={styles.icon}/><p className={styles.subheading}>DOWNLOAD FILES</p></span>
           <span><img src={tick} className={styles.icon}/><p className={styles.subheading}>MARK AS COMPLETE PROJECT</p></span>
          </div>
        </div>

  
        <div className={styles.outer_container}>
            {submissionCards}
            {openModal && <Modal setOpenModal={setOpenModal} picPath={picPath} />} 
        </div>
  
      </div>
  )
}
