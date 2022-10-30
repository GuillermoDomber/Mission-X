const express = require('express');
const { pool } = require('../db/dbconfig');
const router = express.Router();


// CONSIDER TRYING TO MAKE THESE ENDPOINT AND QUERY DYNAMIC DEPENDING ON WHAT PROJECT IS SELECTED.

//**********DISPLAY LEARNING OBJECTIVES*************/
// router.get("/studentDashboard/learningObjective", (req, res) => {
//     console.log("/studentDashboard/video ENDPOINT was hit! 🎯");
   
//     pool.query("SELECT * FROM project WHERE project_id = 1;", (err, result) => {
//       if (err) return console.log(err);
//       console.log(result);
//       res.send(result);
//     });
//   });

//**********DISPLAY NAME AND NUMBER OF TASKS COMPLETED************/
router.get("/teacherDashboard/progress_tracker", (req, res) => {
  console.log("/teacherDashboard/progress_tracker ENDPOINT was hit! 🎯");
 
  pool.query("select student.name, count(*) AS total_tasks_completed from student_projects inner join student using (student_id) WHERE student_projects.date_completed IS NOT NULL group by student.name;", (err, result) => {
    if (err) return console.log(err);
    // console.log(result);
    res.send(result);
  });
});



//**********DISPLAY ACTUAL TASKS COMPLETED*************/
router.get("/teacherDashboard/progress_tracker/completed", (req, res) => {
    console.log("/teacherDashboard/progress_tracker/completed ENDPOINT was hit! 🎯");
   
    pool.query("SELECT student.name, student_projects.student_id, student_projects.project_id FROM student_projects INNER JOIN student using (student_id) where student_projects.date_completed IS NOT NULL ORDER BY student_id, student_projects.project_id;", (err, result) => {
      if (err) return console.log(err);
      console.log(result);
      res.send(result);
    });
  });

  //**********DISPLAY ACTUAL TASKS COMPLETED V2*************/
  router.get("/teacherDashboard/student_profiles", (req, res) => {
    console.log("/teacherDashboard/student_profiles ENDPOINT was hit! 🎯");
   
    pool.query("SELECT student_id, name, profile_pic FROM student;", (err, result) => {
      if (err) return console.log(err);
      console.log(result);
      res.status(200).send(result);
    });
  });

   //**********DISPLAY STUDENT PROFILES*************/



  



  module.exports = router;