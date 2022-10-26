const express = require ('express')
const mysql = require('mysql2')
require('dotenv').config()
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json())

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password:process.env.MYSQL_PASS,
    database:process.env.MYSQL_DATABASE,    
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0,
    })


//BONNIE 













//GUILLERMO













//JERVIN











    const PORT = process.env.PORT;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else console.log(`It's working yo, at http://localhost:${PORT}`);
});