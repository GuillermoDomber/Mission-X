import React from 'react'
import styles from './StudentDashboard-hero.module.css'

export default function StudentDashboardHero(props) {
  return (
    <div className={styles.studedentDashboard_hero_outer_container}>

        <div className={styles.studentDashboard_hero_displayArea} >
            <p>This is the hero section</p>
            {props.displayedHeroContent.componentToDisplay}

        </div>


    </div>
  )
}
