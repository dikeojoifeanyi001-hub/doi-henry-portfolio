export default function Contact() {
  const containerStyle = {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "60px 40px",
    textAlign: "center"
  };

  const titleStyle = {
    fontSize: "36px",
    marginBottom: "40px",
    color: "#1a1a2e",
    letterSpacing: "-0.5px"
  };

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "40px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
    border: "1px solid #eee"
  };

  const infoBlockStyle = {
    marginBottom: "24px",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px"
  };

  const labelStyle = {
    fontSize: "13px",
    fontWeight: "700",
    color: "#0d6efd",
    marginBottom: "8px",
    textTransform: "uppercase",
    letterSpacing: "1px"
  };

  const valueStyle = {
    fontSize: "18px",
    color: "#1a1a2e"
  };

  const linkStyle = {
    color: "#0b57d0",
    textDecoration: "none",
    fontWeight: "500"
  };

  const noteStyle = {
    marginTop: "32px",
    padding: "20px",
    backgroundColor: "#e9ecef",
    borderRadius: "8px",
    fontSize: "14px",
    color: "#555"
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Contact Me</h1>
      
      <div style={cardStyle}>
        <div style={infoBlockStyle}>
          <div style={labelStyle}>Email</div>
          <div style={valueStyle}>
            <a href="mailto:dikeojo.ifeanyi001@gmail.com" style={linkStyle}>
              dikeojo.ifeanyi001@gmail.com
            </a>
          </div>
        </div>

        <div style={infoBlockStyle}>
          <div style={labelStyle}>GitHub</div>
          <div style={valueStyle}>
            <a href="https://github.com/dikeojoifeanyi001-hub" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              github.com/dikeojoifeanyi001-hub
            </a>
          </div>
        </div>

        <div style={infoBlockStyle}>
          <div style={labelStyle}>Open To</div>
          <div style={valueStyle}>
            Backend Engineer • Software Engineer • Systems Engineer
          </div>
        </div>

        <div style={noteStyle}>
          📍 Available for remote opportunities worldwide.<br />
          I respond within 24 hours.
        </div>
      </div>
    </div>
  );
}