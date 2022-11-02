//-----------------PACKAGE IMPORTS AND CSS--------------------//
import React from 'react'
import styles from './StudentDashboardHero.module.css'



export default function StudentDashboardHero(props) {
  return (
    <div className={styles.studentDashboard_hero_outer_container}>

        <div className={styles.studentDashboard_hero_display_area} >
            
          {/* This is triggered when the sidebar button is clicked and a state is changed in the student dashboard component */}
          {props.displayedHeroContent.componentToDisplay}

        </div>


    </div>
  )
}
