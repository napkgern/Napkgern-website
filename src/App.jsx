import './App.css';
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import { Routes, Route, Link } from "react-router-dom";

function Landing() {
  return (
    <div className="container">
      <div className="image-wrap">
        <img id="profileImg" src="/ngern.png" alt="profile" />
      </div>

      <h1 id="Myname1">PAPHANGKORN DUWWAODAM</h1>
      <p id="Myco">Computer Science Student</p>

      <Link to="/home">
        <button id="Mybutton1">View</button>
      </Link>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default App;