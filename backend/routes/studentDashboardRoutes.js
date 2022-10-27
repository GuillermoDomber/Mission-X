const express = require('express');
const { pool } = require('../db/dbconfig');
const router = express.Router();


// CONSIDER TRYING TO MAKE THESE ENDPOINT AND QUERY DYNAMIC DEPENDING ON WHAT PROJECT IS SELECTED.

//**********DISPLAY LEARNING OBJECTIVES*************/
router.get("/studentDashboard/learningObjective", (req, res) => {
    console.log("/studentDashboard/video ENDPOINT was hit! 🎯");
   
    pool.query("SELECT * FROM project WHERE project_id = 1;", (err, result) => {
      if (err) return console.log(err);
      console.log(result);
      res.send(result);
    });
  });

//**********DISPLAY VIDEO*************/
router.get("/studentDashboard/video", (req, res) => {
    console.log("/studentDashboard/video ENDPOINT was hit! 🎯");
   
    pool.query("SELECT video FROM project WHERE project_id = 1;", (err, result) => {
      if (err) return console.log(err);
      console.log(result);
      res.send(result);
    });
  });



  



  module.exports = router;