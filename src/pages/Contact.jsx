export default function Contact() {
  return (
    <div className="container" style={{ maxWidth: "600px", textAlign: "center" }}>
      <h1>Contact Me</h1>
      
      <div className="card">
        <div style={{ marginBottom: "24px", padding: "16px", backgroundColor: "#f8f9fa", borderRadius: "8px" }}>
          <div style={{ fontSize: "13px", fontWeight: "700", color: "#0d6efd", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "1px" }}>Email</div>
          <div><a href="mailto:dikeojo.ifeanyi001@gmail.com">dikeojo.ifeanyi001@gmail.com</a></div>
        </div>

        <div style={{ marginBottom: "24px", padding: "16px", backgroundColor: "#f8f9fa", borderRadius: "8px" }}>
          <div style={{ fontSize: "13px", fontWeight: "700", color: "#0d6efd", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "1px" }}>GitHub</div>
          <div><a href="https://github.com/dikeojoifeanyi001-hub" target="_blank" rel="noopener noreferrer">github.com/dikeojoifeanyi001-hub</a></div>
        </div>

        <div style={{ marginBottom: "24px", padding: "16px", backgroundColor: "#f8f9fa", borderRadius: "8px" }}>
          <div style={{ fontSize: "13px", fontWeight: "700", color: "#0d6efd", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "1px" }}>Open To</div>
          <div>Backend Engineer • Software Engineer • Systems Engineer</div>
        </div>

        <div style={{ marginTop: "24px", padding: "16px", backgroundColor: "#e9ecef", borderRadius: "8px", fontSize: "14px" }}>
          📍 Available for remote opportunities worldwide.
        </div>
      </div>
    </div>
  );
}