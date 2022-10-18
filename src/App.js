import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import DummyNavBar from "./components/DummyNavBar";
import "./App.css";
import Home from "./pages/Home";
import StudentDashboard from "./pages/StudentDashboard";
import StudentProjectLibrary from "./pages/StudentProjectLibrary";

import StudentProfileViewer from "./pages/StudentProfileViewer";



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
            element={<StudentProfileViewer></StudentProfileViewer>}
          ></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
