import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import DummyNavBar from "./components/DummyNavBar";
import StudentDashboard from "./pages/StudentDashboard";
import StudentProjectLibrary from "./pages/StudentProjectLibrary";
import StudentProfileViewer from "./pages/StudentProfileViewer";
import TeacherDashboard from "./pages/TeacherDashboard"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DummyNavBar />
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
