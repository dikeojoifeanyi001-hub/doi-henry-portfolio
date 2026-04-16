export default function Home() {
  const containerStyle = {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "70px 40px"
  };

  const heroStyle = {
    marginBottom: "60px"
  };

  const nameStyle = {
    fontSize: "44px",
    fontWeight: "700",
    marginBottom: "16px",
    color: "#1a1a2e"
  };

  const titleStyle = {
    fontSize: "22px",
    color: "#444",
    marginBottom: "20px",
    fontWeight: "500"
  };

  const linkButtonStyle = {
    fontSize: "18px",
    fontWeight: "500",
    color: "#0d6efd",
    textDecoration: "none"
  };

  const sectionTitleStyle = {
    fontSize: "28px",
    marginBottom: "24px",
    color: "#1a1a2e"
  };

  const impactBoxStyle = {
    backgroundColor: "#f8f9fa",
    padding: "32px",
    borderRadius: "12px",
    marginBottom: "48px",
    borderLeft: "4px solid #0d6efd"
  };

  const systemBoxStyle = {
    backgroundColor: "#f8f9fa",
    padding: "32px",
    borderRadius: "12px",
    marginBottom: "48px",
    borderLeft: "4px solid #0d6efd"
  };

  const listStyle = {
    paddingLeft: "20px",
    lineHeight: "1.8",
    marginTop: "12px",
    marginBottom: "16px"
  };

  const ctaStyle = {
    backgroundColor: "#1a1a2e",
    color: "white",
    padding: "48px",
    borderRadius: "12px",
    textAlign: "center"
  };

  return (
    <div style={containerStyle}>
      {/* HERO SECTION - UPGRADED */}
      <div style={heroStyle}>
        <h1 style={nameStyle}>D.O.I Henry</h1>
        <h2 style={titleStyle}>Software Engineer — Backend • Systems • Full-Stack SaaS</h2>
        
        {/* UPGRADED HERO STATEMENT */}
        <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#444", maxWidth: "700px", marginBottom: "30px" }}>
          I am a Software Engineer specializing in backend systems, scalable APIs,
          and automation platforms. I design and build production-grade systems
          that simulate real-world SaaS operations and business workflows.
        </p>
        
        <div>
          <a href="/projects" style={linkButtonStyle}>View Engineering Work →</a>
        </div>
      </div>

      {/* ENGINEERING IMPACT SECTION - NEW */}
      <div>
        <h2 style={sectionTitleStyle}>Engineering Impact</h2>
        <div style={impactBoxStyle}>
          <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "16px" }}>
            I focus on building systems that solve real operational problems,
            not demo applications.
          </p>
          <ul style={listStyle}>
            <li>Designed a multi-tenant SaaS backend architecture</li>
            <li>Built automation system with background job execution</li>
            <li>Developed dashboard connected to live production APIs</li>
            <li>Implemented risk scoring logic for logistics operations</li>
          </ul>
          <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: 0 }}>
            My goal is to think like a systems engineer: API → Data → Automation → Business logic.
          </p>
        </div>
      </div>

      {/* SYSTEM THINKING SECTION */}
      <h2 style={sectionTitleStyle}>System Architecture</h2>
      <div style={systemBoxStyle}>
        <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "16px" }}>
          My projects are designed as a complete, production-ready SaaS ecosystem:
        </p>
        <ul style={listStyle}>
          <li><strong>API Layer</strong> → Handles business logic, authentication, and data management</li>
          <li><strong>Frontend Dashboard</strong> → Operational control system for real-time management</li>
          <li><strong>Automation Engine</strong> → Background intelligence, risk monitoring, and billing simulation</li>
        </ul>
        <p style={{ fontSize: "16px", lineHeight: "1.6", marginTop: "16px", marginBottom: 0 }}>
          This creates a full production-like SaaS ecosystem where each component works together seamlessly.
        </p>
      </div>

      {/* TRUST FOOTER / RECRUITER CONVERSION SECTION - UPGRADED */}
      <div style={ctaStyle}>
        <h3 style={{ fontSize: "24px", marginBottom: "16px", color: "white" }}>Open to Opportunities</h3>
        <p style={{ marginBottom: "16px", color: "#ccc", fontSize: "16px" }}>
          I am currently open to Backend, Full-Stack, and Systems Engineering roles.
        </p>
        <p style={{ marginBottom: "8px" }}>
          📧 <a href="mailto:dikeojo.ifeanyi001@gmail.com" style={{ color: "#0d6efd", fontSize: "16px" }}>
            dikeojo.ifeanyi001@gmail.com
          </a>
        </p>
        <p style={{ marginBottom: "16px" }}>
          🔗 <a href="https://github.com/dikeojoifeanyi001-hub" target="_blank" rel="noopener noreferrer" style={{ color: "#0d6efd", fontSize: "16px" }}>
            github.com/dikeojoifeanyi001-hub
          </a>
        </p>
        <p style={{ color: "#888", fontSize: "14px", marginTop: "24px" }}>
          Built with React, Node.js, PostgreSQL, Cloudflare & Railway.
        </p>
      </div>
    </div>
  );
}