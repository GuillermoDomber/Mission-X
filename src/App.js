import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import DummyNavBar from "./components/DummyNavBar";
import "./App.css";
import Home from "./pages/Home";
import StudentDashboard from "./pages/StudentDashboard";
import StudentProjectLibrary from "./pages/StudentProjectLibrary";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
