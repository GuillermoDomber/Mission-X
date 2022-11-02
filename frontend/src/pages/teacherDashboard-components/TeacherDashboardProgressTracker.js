import React from 'react'
import styles from './TeacherDashboardProgressTracker.module.css'
import ExportIcon from '../../assets/TeacherDashboard/Export.png'
import { useState, useEffect } from 'react'

export default function TeacherDashboard_ProgressTracker() {
const [cardData, setCardData] = useState([]);
const [projectsDone, setProjectsDone] = useState([]);
const [projectsDoneV2, setProjectsDoneV2] = useState([]);
const [studentArray, setStudentArray] = useState([])


  const buttonsArrayStudentProjects = 
  // [{id: "1"}, {id: "2"},{id: "3"},{id: "4"},{id: "5"},{id: "6"},{id: "7"},{id: "8"},{id: "9"},{id: "10"},{id: "11"},{id: "12"},{id: "13"},{id: "14"},{id: "15"}]
  [{id: 1}, {id: 2},{id: 3},{id: 4},{id: 5},{id: 6},{id: 7},{id: 8},{id: 9},{id: 10},{id: 11},{id: 12},{id: 13},{id: 14},{id: 15}]


  let projectButtons =  buttonsArrayStudentProjects.map((item, index) => {
    return (
      <div className={styles.circle_outer} key={index}>
        <div className={3 === item.id || 8 ===item.id ? styles.circle_selected : styles.circle}><p className={styles.circle_text}>{item.id}</p></div>
      </div>
    )});


//---------------------DATA ON NAME AND NUMBER OF TASKS COMPLETED--------------------//
    useEffect(() => {
      fetch("http://localhost:4000/teacherDashboard/progress_tracker")
      .then((res) =>res.json())
      .then((resultsData) =>{
        console.log('num of projects completed', resultsData)
        setCardData(resultsData)
      });
    }, []);

//---------------------DATA ON PROJECTS COMPLETED BY EACH STUDENT--------------------//
    // useEffect(() => {
    //   fetch("http://localhost:4000/teacherDashboard/progress_tracker/completed")
    //   .then((res) =>res.json())
    //   .then((resultsData) =>{
    //     console.log('this is the tasks each student completed', resultsData)
    //     setProjectsDone(resultsData)
    //   });
    // }, []);


  //NONE OF THIS IS WORKING
    // useEffect(() => {
    //   projectsDone.map((student)=> {
    //     if (student.student_id === 1){
    //       console.log(student.project_id)
    //       setStudentArray(...studentArray, [{[student.name]: student.project_id}])
    //     }
    //   })
    // }, [projectsDone]);


    // useEffect(() => {
    //   console.log(studentArray)

     
    // }, [studentArray]);
const [whoIsIt, setWhoIsIt]= useState([])

   

//------------INDIVIDUAL RESULTS ON WHAT PROJECTS ARE DONE V2----------------//

// useEffect(() => {
//   fetch("http://localhost:4000/teacherDashboard/progress_tracker/completed/v2")
//   .then((res) =>res.json())
//   .then((resultsData) =>{
//     console.log('this is the tasks that student 1 completed', resultsData)
//     setProjectsDoneV2(resultsData)
//   });
// }, []);
  

//********************RETURN AREA*************************/
  return (
    <div className={styles.outermost_container}>



      <div className={styles.header}>
        <p className={styles.title}>BEGINNER COURSE</p>
        <span><img src={ExportIcon} className={styles.export_icon}/><p className={styles.subheading}>EXPORT AS SPREADSHEET</p></span>
      </div>

      <div className={styles.outer_container}>

      {cardData && cardData.map((student, index) => {
       
        return(
          
          <div className={styles.card} key={index}>
            <div className={styles.card_text}>
              <p className={styles.large_text}>{(student.name).toUpperCase()}</p>
              <p className={styles.small_text}>{student.total_tasks_completed}/15 Projects Completed</p>
            </div>
            
           {projectsDone.map((pupil, index)=> {
              if (pupil.student_id === 4)
              return console.log(`It's ${pupil.name} `)
              }
            )} 
            
            {/* Maybe add a useEffect in here that will select the specific projects that one student has done.  */}

            {projectButtons}
        </div>
        )})}
      


    

  
      
      </div>

    </div>
  )
}
