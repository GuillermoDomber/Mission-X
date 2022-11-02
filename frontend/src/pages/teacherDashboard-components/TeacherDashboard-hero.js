import React from 'react'
import styles from './TeacherDashboard-hero.module.css'

export default function StudentDashboardHero(props) {
  return (
    <div className={styles.studentDashboard_hero_outer_container}>

        <div className={styles.studentDashboard_hero_displayArea} >
            
            {/* This is triggered when the sidebar button is clicked and a state is changed in the teacher dashboard component */}
            {props.displayedHeroContent.componentToDisplay}

        </div>


    </div>
  )
}
