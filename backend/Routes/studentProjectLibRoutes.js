const express = require('express');
const { pool } = require('../db/dbconfig');
const router = express.Router();


//student project library
router.get("/studentprojectlibrary", (req, res) => {
    console.log("/studentprojlib checkpoint   ! 🙌");
    pool.query("SELECT project_id,name, project_pic,course,activity_type FROM project;", (err, result) => {
      if (err) return console.log("something is wrong",err);
      console.log(result);
      res.send(result);
    });
  });
  //-----------testing beg-int-adv filter------------
  //Beginner
router.get("/studentprojectlibrary1", (req, res) => {
    console.log("/studentprojlib checkpoint   ! 🙌");
    pool.query("SELECT project_id,name, project_pic,course,activity_type FROM project WHERE course='Beginner';", (err, result) => {
      if (err) return console.log("something is wrong",err);
      console.log(result);
      res.send(result);
    });
  });
//intermediate
  router.get("/studentprojectlibrary2", (req, res) => {
    console.log("/studentprojlib checkpoint   ! 🙌");
    pool.query("SELECT project_id,name, project_pic,course,activity_type FROM project WHERE course='Intermediate';", (err, result) => {
      if (err) return console.log("something is wrong",err);
      console.log(result);
      res.send(result);
    });
  });
//advanced
  router.get("/studentprojectlibrary3", (req, res) => {
    console.log("/studentprojlib checkpoint   ! 🙌");
    pool.query("SELECT project_id,name, project_pic,course,activity_type FROM project WHERE course='Advanced';", (err, result) => {
      if (err) return console.log("something is wrong",err);
      console.log(result);
      res.send(result);
    });
  });

  module.exports = router;