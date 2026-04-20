export default function Contact() {
  const containerStyle = {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "60px 40px"
  };

  const titleStyle = {
    fontSize: "36px",
    fontWeight: "700",
    marginBottom: "40px",
    color: "#1a1a2e",
    textAlign: "center"
  };

  const cardsContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "24px",
    justifyContent: "center",
    marginBottom: "32px"
  };

  const cardStyle = {
    flex: "1",
    minWidth: "220px",
    backgroundColor: "white",
    padding: "28px",
    borderRadius: "12px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
    border: "1px solid #eee",
    textAlign: "center"
  };

  const labelStyle = {
    fontSize: "13px",
    fontWeight: "700",
    color: "#0d6efd",
    marginBottom: "12px",
    textTransform: "uppercase",
    letterSpacing: "1px"
  };

  const valueStyle = {
    fontSize: "16px",
    color: "#1a1a2e",
    wordBreak: "break-word"
  };

  const linkStyle = {
    color: "#0d6efd",
    textDecoration: "none",
    fontWeight: "500"
  };

  const noteStyle = {
    backgroundColor: "#e9ecef",
    padding: "20px",
    borderRadius: "8px",
    fontSize: "14px",
    color: "#555",
    textAlign: "center",
    marginTop: "20px"
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Contact Me</h1>
      
      <div style={cardsContainerStyle}>
        <div style={cardStyle}>
          <div style={labelStyle}>Email</div>
          <div style={valueStyle}>
            <a href="mailto:dikeojo.ifeanyi001@gmail.com" style={linkStyle}>
              dikeojo.ifeanyi001@gmail.com
            </a>
          </div>
        </div>

        <div style={cardStyle}>
          <div style={labelStyle}>GitHub</div>
          <div style={valueStyle}>
            <a href="https://github.com/dikeojoifeanyi001-hub" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              github.com/dikeojoifeanyi001-hub
            </a>
          </div>
        </div>

        <div style={cardStyle}>
          <div style={labelStyle}>Open To</div>
          <div style={valueStyle}>
            Backend Engineer • Software Engineer • Systems Engineer
          </div>
        </div>
      </div>

      <div style={noteStyle}>
        📍 Available for remote opportunities worldwide.<br />
        I respond within 24 hours.
      </div>
    </div>
  );
}