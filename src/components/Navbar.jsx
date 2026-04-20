import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">D.O.I Henry</Link>

        {/* Desktop Menu */}
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        {/* Hamburger Button - mobile only */}
        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          ☰
        </div>
      </div>

      {/* Mobile Menu - slide in panel */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="menu-header">
          <span className="close-btn" onClick={closeMenu}>✕</span>
        </div>
        <Link to="/" className="mobile-link" onClick={closeMenu}>Home</Link>
        <Link to="/projects" className="mobile-link" onClick={closeMenu}>Projects</Link>
        <Link to="/contact" className="mobile-link" onClick={closeMenu}>Contact</Link>
      </div>
    </header>
  );
}