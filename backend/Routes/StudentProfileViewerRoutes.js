const express = require('express');
const { pool } = require('../db/dbconfig');
const router = express.Router();


router.get("/studentprofileviewer", (req, res) => {
    console.log("/studentprofile checkpoint   ! 🙌");
    pool.query("SELECT student.name AS student_name, teacher.name AS teacher_name,course,student.email AS student_email,student.date_of_birth AS student_date_of_birth,student.contact_number AS student_contact_number, student.profile_pic AS student_profile_pic FROM student INNER JOIN teacher ON student.teacher_id=teacher.teacher_id where student_id=54;", (err, result) => {
      if (err) return console.log("something is wrong",err);
    //   pool.query("SELECT student.name, student.teacher_id,course,student.email,student.date_of_birth,student.contact_number FROM student LEFT JOIN teacher ON student.teacher_id=teacher.teacher_id where student_id=54;", (err, result) => {
    //     if (err) return console.log("something is wrong",err);

      console.log(result);
      res.send(result);
    });
  });


module.exports = router;