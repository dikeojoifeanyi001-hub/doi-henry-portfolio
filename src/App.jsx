import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const navStyle = {
    backgroundColor: "#1a1a2e",
    padding: "16px 40px",
    display: "flex",
    gap: "20px",
    marginBottom: "20px"
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "16px"
  };

  return (
    <BrowserRouter>
      <div>
        <nav style={navStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/projects" style={linkStyle}>Projects</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;