//-----------------PACKAGE IMPORTS AND CSS--------------------//
import React from 'react'
import { useEffect, useState } from 'react'
import styles from './StudentDashboardInstructions.module.css'

//IMAGE IMPORTS-----------------------------------------------
import circleNav from '../../assets/Dashboard/navigateCircle.png'
import leftIcon from '../../assets/Dashboard/leftIcon.png'


export default function StudentDashboard_Instructions() {
    const [instructionContents, setInstructionContents] = useState();
  
    useEffect(() => {
        fetch("http://localhost:4000/studentDashboard/learningObjective")
        .then((res) =>res.json())
        .then((resultsData) =>{
          // console.log(resultsData);
          // console.log(resultsData[0].instructions);

          //This method means that data/instructions html has already been extracted and added to the state.
          setInstructionContents(resultsData[0].instructions)
        });
      }, []);


    return (
    <div className={styles.outer_container}>
       
       <div className={styles.circle_nav_button}>
            <img src={circleNav} className={styles.circle}/>
            <img src={leftIcon} className={styles.arrow}/>
        </div> 

      {/* add dompurify here */}
       <div dangerouslySetInnerHTML={{ __html: instructionContents}} className={styles.imported_html_div}></div> 
       
       <div className={styles.circle_nav_button}>
            <img src={circleNav} className={styles.circle}/>
            <img src={leftIcon} className={`${styles.arrow} ${styles.flipped}`}/>
        </div> 

    </div>
  )
}



//THIS IS WHAT WAS INSERTED INTO THE DATABASE- (some changes may have been made)

{/* <div style="display: flex; justify-content: center; align-items: center; padding: 40px 30px">
    <div style="display: flex; flex-direction: column; justify-content: center">
        <h1 style="font-family: Nunito, sans-serif; font-size: 24px; color: var(--headings-font-color)">1. Join Scratch</h1>
        <p style="font-family: 'Open Sans', sans-serif; font-weight: 600; color: var( --main-font-color)">If you haven’t used Scratch before, you will need to join Scratch first.<br /> <br />Go to https://scratch.mit.edu. Click on <span style="color: #F91C85">Join Scratch.</span></p>
        <img src="images/Project01-Instructions.png" style="margin: 40px 0;"/>
        <p style="font-family: 'Open Sans', sans-serif; font-weight: 600; color: var( --main-font-color)">Follow the instructions to join. You will need a username and a password that you will remember. If possible, you should also verify your email address so that you can Share projects later. Ask your teacher to help with this step if you don’t have an email address, or if you are not sure what to do.</p>
    </div>
</div>  */}

