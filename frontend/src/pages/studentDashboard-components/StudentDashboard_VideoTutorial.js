import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from './StudentDashboard_VideoTutorial.module.css'
import axios from 'axios';

import circleNav from '../../assets/Dashboard/navigateCircle.png'
import leftIcon from '../../assets/Dashboard/leftIcon.png'

export default function StudentDashboard_VideoTutorial() {
 const [vidToDisplay, setVidToDisplay] = useState();

  
//=============FETCH REQUEST TO DISPLAY THE VIDEO==============//
 useEffect(() => {
    fetch("http://localhost:4000/studentDashboard/video")
    .then((res) =>res.json())
    .then((resultsData) =>{
      //This method means will need to extract data/video path further down
      console.log(resultsData);
      //This method means that data/video path has already been extracted.
      console.log(resultsData[0].video);
      setVidToDisplay(resultsData[0].video)
    });
  }, []);
  

  
  return (
    <div className={styles.outer_container}>

    <div className={styles.circle_nav_button}>
      <img src={circleNav} className={styles.circle}/>
      <img src={leftIcon} className={styles.arrow}/>
    </div> 

    <iframe className={styles.video} src={vidToDisplay && vidToDisplay} width="100%" height="auto" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
    
    <div className={styles.circle_nav_button}>
      <img src={circleNav} className={styles.circle}/>
      <img src={leftIcon} className={`${styles.arrow} ${styles.flipped}`}/>
    </div> 

    </div>
  )
}
