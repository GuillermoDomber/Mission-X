const express = require('express');
const { pool } = require('../db/dbconfig');
const router = express.Router();


router.get("/studentprofileviewer", (req, res) => {
    console.log("/studentprofile checkpoint   ! 🙌");
    pool.query("SELECT *FROM student INNER JOIN teacher using (teacher_id) WHERE student_id=12;", (err, result) => {
      if (err) return console.log("something is wrong",err);
      console.log(result);
      res.send(result);
    });
  });


module.exports = router;