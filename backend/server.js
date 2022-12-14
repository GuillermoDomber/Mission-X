const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();

//----------------------MIDDLEWARE----------------//
app.use(cors());
app.use(express.json());

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

//Imported routes
const studentProjectlibRoutes = require("./routes/studentProjectLibRoutes")
const studentProfileViewerRoutes = require("./routes/StudentProfileViewerRoutes")
//using routes

app.use(studentProjectlibRoutes)
app.use(studentProfileViewerRoutes)


//===============PORT CONNECTION================//

const PORT = process.env.PORT;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else console.log(`It's working yo, at http://localhost:${PORT}`);
});
