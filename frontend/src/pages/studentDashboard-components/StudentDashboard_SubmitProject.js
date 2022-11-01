import React from 'react'
import styles from './StudentDashboardSubmitProject.module.css'

//============IMAGE IMPORTS================//
import sendPhoto from '../../assets/Dashboard/send_photo.png'
import helpPic from '../../assets/Dashboard/help_pic.png'
import projectPic from '../../assets/Dashboard/project_pic.png'
import callTeacher from '../../assets/Dashboard/call_teacher.png'



export default function StudentDashboard_SubmitProject() {
  return (
    <div className={styles.outer_container}>
      
      <div className={styles.left}>
        <img className={styles.image} src={projectPic}/>
        <p className={styles.text_title}>Submit project photo</p>
        <p className={styles.text_paragraph}>After completing your project, take a screenshot of your project and upload it here.</p>
        <div className={styles.button}>
          <img className={styles.image_small} src={sendPhoto}/>
          <p className={styles.text_button}>Send Photo</p>
        </div>
      </div>

      <div className={styles.vertical}/>

      <div className={styles.left}>
      <img className={styles.image} src={helpPic}/>
        <p className={styles.text_title}>Show your teacher</p>
        <p className={styles.text_paragraph}>If your teacher is in the same room as you, click the button below to let them know you are done.</p>
        <div className={styles.button}>
          <img className={styles.image_small} src={callTeacher}/>
          <p className={styles.text_button}>Call Teacher</p>
        </div>
      </div>

    </div>
  )
}


