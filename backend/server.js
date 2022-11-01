const express = require("express");
// const mysql = require("mysql2");
require("dotenv").config();
const cors = require("cors");

const app = express();

//----------------------MIDDLEWARE----------------//
app.use(cors());
app.use(express.json());


pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

// ------------------ENDPOINTS/ROUTES--------------------//

//BONNIE 

//Imported routes
const studentDashboardRoutes = require("./routes/studentDashboardRoutes");
const teacherDashboardRoutes = require("./routes/teacherDashboardRoutes");

//Using routes
app.use(studentDashboardRoutes);
app.use(teacherDashboardRoutes);

//GUILLERMO

//Imported routes
const authRouter = require("./routes/authRoutes");

//Using routes
app.use(authRouter);


//JERVIN
//student project library
app.get("/studentprojectlibrary", (req, res) => {
    console.log("/studentprojlib checkpoint   ! 🙌");
    pool.query("SELECT project_id,name, project_pic,course,activity_type FROM project;", (err, result) => {
      if (err) return console.log("something is wrong",err);
      console.log(result);
      res.send(result);
    });
  });
  //-----------testing beg-int-adv filter------------
  //Beginner
app.get("/studentprojectlibrary1", (req, res) => {
    console.log("/studentprojlib checkpoint   ! 🙌");
    pool.query("SELECT project_id,name, project_pic,course,activity_type FROM project WHERE course='Beginner';", (err, result) => {
      if (err) return console.log("something is wrong",err);
      console.log(result);
      res.send(result);
    });
  });
//intermediate
  app.get("/studentprojectlibrary2", (req, res) => {
    console.log("/studentprojlib checkpoint   ! 🙌");
    pool.query("SELECT project_id,name, project_pic,course,activity_type FROM project WHERE course='Intermediate';", (err, result) => {
      if (err) return console.log("something is wrong",err);
      console.log(result);
      res.send(result);
    });
  });
//advanced
  app.get("/studentprojectlibrary3", (req, res) => {
    console.log("/studentprojlib checkpoint   ! 🙌");
    pool.query("SELECT project_id,name, project_pic,course,activity_type FROM project WHERE course='Advanced';", (err, result) => {
      if (err) return console.log("something is wrong",err);
      console.log(result);
      res.send(result);
    });
  });

    //-----------^^^testing beg-int-adv filter^^^------------
  //student profile viewer

  app.get("/studentprofileviewer", (req, res) => {
    console.log("/studentprofile checkpoint   ! 🙌");
    pool.query("SELECT *FROM student INNER JOIN teacher using (teacher_id) WHERE student_id=12;", (err, result) => {
      if (err) return console.log("something is wrong",err);
      console.log(result);
      res.send(result);
    });
  });







//===============PORT CONNECTION================//

const PORT = process.env.PORT;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else console.log(`It's working yo, at http://localhost:${PORT}`);
});
