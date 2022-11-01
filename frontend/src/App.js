import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { redirect } from "react-router-dom";
import axios from "axios"
import "./App.css";

import Home from "./pages/Home";
import DummyNavBar from "./components/DummyNavBar";
import StudentDashboard from "./pages/StudentDashboard";
import StudentProjectLibrary from "./pages/StudentProjectLibrary";
import StudentProfileViewer from "./pages/StudentProfileViewer";
import TeacherDashboard from "./pages/TeacherDashboard"
import PageNotFound from "./components/404PageNotFound";

function App() {

//TESTING THE CONNECTION TO THE FRONT END-------------//
const test = () => {
  axios.get("http://localhost:4000/test")
  .then(() => {
    console.log(`connected: `)
})
}
//----------------------------------------------------//

  return (
    <div className="App">
      <BrowserRouter>
        <DummyNavBar test={test}/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/StudentDashboard" element={<StudentDashboard />} />
          <Route
            path="/StudentProjectLibrary"
            element={<StudentProjectLibrary />}
          />
          <Route
            path="/StudentProfileViewer"
            element={<StudentProfileViewer />}
          />
          <Route path="/TeacherDashboard" element={<TeacherDashboard />} />
          <Route path="/404_page_not_found" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

  }
export default App;
