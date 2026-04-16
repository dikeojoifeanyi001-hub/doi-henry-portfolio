import { Link } from "react-router-dom";

export default function Navbar() {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    padding: "8px 16px",
    borderRadius: "4px",
  };

  const navStyle = {
    backgroundColor: "#1a1a2e",
    padding: "16px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap"
  };

  const logoStyle = {
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
    textDecoration: "none"
  };

  const linksStyle = {
    display: "flex",
    gap: "20px"
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={logoStyle}>D.O.I Henry</Link>
      <div style={linksStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/projects" style={linkStyle}>Projects</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>
    </nav>
  );
}