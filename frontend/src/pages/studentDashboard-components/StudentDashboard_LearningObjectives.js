import React from 'react'
import { useEffect, useState } from 'react'

export default function StudentDashboard_LearningObjectives() {
  const [lOContents, setLOContents] = useState();

  useEffect(() => {
    fetch("http://localhost:4000/studentDashboard/learningObjective")
    .then((res) =>res.json())
    .then((resultsData) =>{
      //This method means will need to extract data/video path further down
      console.log(resultsData);
      console.log(resultsData[0].learning_objective);
      //This method means that data/video path has already been extracted.
      setLOContents(resultsData[0].learning_objective)
    });
  }, []);

  return (
    <div>
      
      <div dangerouslySetInnerHTML={{ __html: lOContents}} ></div>

    </div>
  )
}


//THIS IS WHAT WAS INSERTED INTO THE DATABASE

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