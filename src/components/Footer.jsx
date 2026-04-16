export default function Footer() {
  const footerStyle = {
    backgroundColor: "#1a1a2e",
    color: "#888",
    textAlign: "center",
    padding: "20px",
    marginTop: "auto",
    fontSize: "14px"
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} D.O.I Henry. All rights reserved.</p>
    </footer>
  );
}