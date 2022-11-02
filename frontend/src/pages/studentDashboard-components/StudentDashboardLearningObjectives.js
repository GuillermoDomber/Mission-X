//-----------------PACKAGE IMPORTS AND CSS--------------------//
import React from 'react'
import { useEffect, useState } from 'react'
import styles from './StudentDashboardLearningObjectives.module.css'


//*****************LEARNING OBJECTIVES COMPONENT BEGINS****************************/
export default function StudentDashboard_LearningObjectives() {
  const [lOContents, setLOContents] = useState(); //state to store the learning objecitves html from the database
  const [localStorageValue, setLocalStorageValue] = useState([]) //retrieving the project_id from local storage of the project that has been clicked, then the right learning objectives data will display from the database

 //This will save value in local storage of the project_id that was selected.
 //This is later used on line 33 to set the right Learning Objectives data for that project. 
  useEffect(() => { 
    setLocalStorageValue(parseInt(localStorage.getItem('project-selected')))
    // console.log(localStorage.getItem('project-selected'))
  }, []);

//This fetches all of the html data for each project- which one is displayed depends on the localStorageValue state.
//This could perhaps be changed with a dynamic fetch depending on the project clicked.
  useEffect(() => {
    fetch("http://localhost:4000/studentDashboard/learningObjective")
    .then((res) =>res.json())
    .then((resultsData) =>{
      //Testing logs----------
      // console.log(resultsData);
      // console.log(localStorageValue);
      // console.log(resultsData[0].learning_objective);
      // console.log(resultsData[localStorage]);


      //This method means that Learning Objectives HTML data is extracted and placed into the LOContents state
      setLOContents(resultsData[localStorageValue].learning_objective)
    });
  }, [localStorageValue]);


  //********************RETURN AREA FOR LEARNING OBJECTIVES COMPONENT************************//
  return (
    <div className={styles.outer_container}>
      
      {/* add dompurify here */}
      <div dangerouslySetInnerHTML={{ __html: lOContents}} ></div>

    </div>
  )
}
















//THIS IS WHAT WAS INSERTED INTO THE DATABASE - (there may be some changes)

{/* <div>
            <div  style="display: flex; flex-direction: column; justify-content: flex-start; align-items: center">
                <h1 style="font-family: 'Nunito', sans-serif; font-weight: bold; font-size: 24px; color: var(--main-font-color); margin: 0; margin-top: 2%;">Explore Scratch Blocks</h1>
                <h2 style="font-family: 'Open Sans', sans-serif; font-size: 16px; color: var(--main-font-color); margin: 0; margin-top: 14px; ">Learn the basic function of some basic scratch blocks such as “say,” “wait,” “go to” and “hide.”</h2>
                
                <div style="display: flex; justify-content: center; margin-top: 22px; padding: 0 3%;">
                    <div style="display: flex; flex-direction: column; margin-right: 10px;">
                        <p style="font-family: 'Nunito', sans-serif; font-weight: bold; color: var(--main-font-color); font: 18px; margin: 0;">Look Blocks</p>
                        <div style="display: flex; align-items: flex-start; gap: 9px; margin-top: 19px; ">
                            <img src="images/Project01-obj1.png"></img>
                            <img src="images/Project01-obj2.png"></img>
                            
                        </div>
                    </div>

                    <div  style="display: flex; flex-direction: column; margin-right: 10px;">
                        <p style="font-family: 'Nunito', sans-serif; font-weight: bold; color: var(--main-font-color); font: 18px; margin: 0;">Control Blocks</p>
                        <div  style="display: flex; align-items: flex-start; gap: 9px; margin-top: 19px; ">
                            <img src="images/Project01-obj3.png"></img>
                            <img src="images/Project01-obj4.png"></img>
                        </div>
                    </div>

                    <div style="display: flex; flex-direction: column; margin-right: 10px;">
                        <p  style="font-family: 'Nunito', sans-serif; font-weight: bold; color: var(--main-font-color); font: 18px; margin: 0;">Motion Blocks</p>
                        <div style="display: flex; align-items: flex-start; gap: 9px; margin-top: 19px; ">
                        
                            <img src="images/Project01-obj5.png"></img>
                            <img src="images/Project01-obj6.png"></img>
                        </div>
                    </div>

                </div>
            </div>
            
        </div> */}