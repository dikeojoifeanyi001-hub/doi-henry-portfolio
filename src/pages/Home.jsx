export default function Home() {
  const containerStyle = {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "60px 40px"
  };

  const heroStyle = {
    marginBottom: "60px"
  };

  const nameStyle = {
    fontSize: "48px",
    marginBottom: "16px",
    color: "#1a1a2e"
  };

  const titleStyle = {
    fontSize: "24px",
    color: "#0d6efd",
    marginBottom: "24px",
    fontWeight: "500"
  };

  const descriptionStyle = {
    fontSize: "18px",
    lineHeight: "1.6",
    color: "#444",
    maxWidth: "600px",
    marginBottom: "30px"
  };

  const buttonStyle = {
    display: "inline-block",
    backgroundColor: "#0d6efd",
    color: "white",
    padding: "12px 24px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "500"
  };

  const sectionTitleStyle = {
    fontSize: "28px",
    marginBottom: "24px",
    color: "#1a1a2e"
  };

  const listStyle = {
    paddingLeft: "20px",
    lineHeight: "1.8",
    marginBottom: "40px"
  };

  const proofBoxStyle = {
    backgroundColor: "#f8f9fa",
    padding: "24px",
    borderRadius: "12px",
    marginBottom: "40px",
    borderLeft: "4px solid #0d6efd"
  };

  const ctaStyle = {
    backgroundColor: "#1a1a2e",
    color: "white",
    padding: "40px",
    borderRadius: "12px",
    textAlign: "center",
    marginTop: "40px"
  };

  const linkStyle = {
    color: "#0d6efd",
    textDecoration: "none"
  };

  return (
    <div style={containerStyle}>
      {/* HERO SECTION */}
      <div style={heroStyle}>
        <h1 style={nameStyle}>D.O.I Henry</h1>
        <h2 style={titleStyle}>Software Engineer (Backend • Systems • Full-Stack)</h2>
        <p style={descriptionStyle}>
          I build production-ready systems: scalable APIs, automation engines,
          and dashboards that solve real logistics and business problems.
        </p>
        <a href="/projects" style={buttonStyle}>View My Work →</a>
      </div>

      {/* WHAT I BUILD SECTION */}
      <h3 style={sectionTitleStyle}>What I Build</h3>
      <ul style={listStyle}>
        <li>Multi-tenant SaaS backend systems with JWT authentication</li>
        <li>Real-time dashboards with live API integration</li>
        <li>Automation systems with background jobs and cron scheduling</li>
        <li>End-to-end full-stack applications deployed to production</li>
      </ul>

      {/* ENGINEERING PROOF SECTION */}
      <h3 style={sectionTitleStyle}>Engineering Focus</h3>
      <div style={proofBoxStyle}>
        <p style={{ fontSize: "16px", lineHeight: "1.6", margin: 0 }}>
          I don't build demo apps. I build systems with real architecture:<br/>
          <strong>API → Frontend → Automation → Data processing.</strong><br/>
          All deployed, all working, all production-ready.
        </p>
      </div>

      {/* SYSTEM DESIGN SECTION */}
      <h3 style={sectionTitleStyle}>System Design</h3>
      <div style={proofBoxStyle}>
        <p style={{ fontSize: "16px", lineHeight: "1.6", margin: 0 }}>
          My projects work together as a complete logistics platform:
        </p>
        <ul style={{ marginTop: "12px", paddingLeft: "20px" }}>
          <li><strong>SaaS API</strong> – Handles data, authentication, and business logic</li>
          <li><strong>Dashboard</strong> – Visualizes and manages operations in real-time</li>
          <li><strong>Automation System</strong> – Runs background intelligence (risk monitoring + billing)</li>
        </ul>
      </div>

      {/* RECRUITER CTA */}
      <div style={ctaStyle}>
        <h3 style={{ fontSize: "24px", marginBottom: "16px", color: "white" }}>Let's Work</h3>
        <p style={{ marginBottom: "16px", color: "#ccc" }}>
          I'm open to Backend, Full-Stack, and Systems Engineering roles.
        </p>
        <p>
          <a href="mailto:dikeojo.ifeanyi001@gmail.com" style={{ color: "#0d6efd" }}>
            dikeojo.ifeanyi001@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}