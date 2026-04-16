export default function Contact() {
  const containerStyle = {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "40px",
    textAlign: "center"
  };

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "32px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    border: "1px solid #eee"
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: "36px", marginBottom: "40px" }}>Contact Me</h1>
      
      <div style={cardStyle}>
        <div style={{ marginBottom: "24px", padding: "16px", backgroundColor: "#f8f9fa", borderRadius: "8px" }}>
          <div style={{ fontSize: "14px", color: "#888", marginBottom: "8px" }}>EMAIL</div>
          <div><a href="mailto:dikeojo.ifeanyi001@gmail.com" style={{ color: "#0d6efd" }}>dikeojo.ifeanyi001@gmail.com</a></div>
        </div>

        <div style={{ marginBottom: "24px", padding: "16px", backgroundColor: "#f8f9fa", borderRadius: "8px" }}>
          <div style={{ fontSize: "14px", color: "#888", marginBottom: "8px" }}>GITHUB</div>
          <div><a href="https://github.com/dikeojoifeanyi001-hub" target="_blank" style={{ color: "#0d6efd" }}>github.com/dikeojoifeanyi001-hub</a></div>
        </div>

        <div style={{ padding: "16px", backgroundColor: "#f8f9fa", borderRadius: "8px" }}>
          <div style={{ fontSize: "14px", color: "#888", marginBottom: "8px" }}>OPEN TO</div>
          <div>Junior Backend Engineer • Software Engineer</div>
        </div>

        <div style={{ marginTop: "24px", padding: "16px", backgroundColor: "#e9ecef", borderRadius: "8px", fontSize: "14px" }}>
          📍 Available for remote opportunities worldwide.
        </div>
      </div>
    </div>
  );
}