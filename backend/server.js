const express = require ('express')
const mysql = require('mysql2')
require('dotenv').config()
const cors = require("cors");
const app = express();

//----------------------MIDDLEWARE----------------//
app.use(cors());
app.use(express.json())
//may need to switch the order of cors and express.json???

// -------------CONNECTING TO DATABASE-------------//
//I have moved this into ../db/dbconfig.js
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password:process.env.MYSQL_PASS,
    database:process.env.MYSQL_DATABASE,    
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0,
    })

//TESTING CONNECTION TO THE FRONT END
    app.get("/test", (req, res) => {
        const date = new Date();
        console.log(`connected to frontend at ${date}`)

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













//JERVIN










//===============PORT CONNECTION================//
const PORT = process.env.PORT;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else console.log(`It's working yo, at http://localhost:${PORT}`);
});