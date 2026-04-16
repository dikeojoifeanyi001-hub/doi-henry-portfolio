export default function Home() {
  const containerStyle = {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "80px 40px"
  };

  const heroStyle = {
    marginBottom: "80px"
  };

  const nameStyle = {
    fontSize: "48px",
    fontWeight: "800",
    letterSpacing: "-1px",
    marginBottom: "16px",
    color: "#1a1a2e"
  };

  const titleStyle = {
    fontSize: "22px",
    marginTop: "10px",
    color: "#333",
    marginBottom: "25px"
  };

  const descriptionStyle = {
    fontSize: "18px",
    lineHeight: "1.7",
    color: "#444",
    maxWidth: "700px",
    marginBottom: "35px"
  };

  const buildingStyle = {
    fontWeight: "600",
    color: "#0d6efd",
    marginBottom: "40px",
    fontSize: "16px"
  };

  const linkStyle = {
    fontSize: "18px",
    fontWeight: "600",
    color: "#0d6efd",
    textDecoration: "none"
  };

  const sectionTitleStyle = {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "24px",
    color: "#1a1a2e"
  };

  const architectureBoxStyle = {
    backgroundColor: "#f8f9fa",
    padding: "32px",
    borderRadius: "12px",
    marginBottom: "60px",
    borderLeft: "4px solid #0d6efd"
  };

  const reliabilityBoxStyle = {
    backgroundColor: "#fff8e7",
    padding: "32px",
    borderRadius: "12px",
    marginBottom: "60px",
    borderLeft: "4px solid #ffc107"
  };

  const listStyle = {
    paddingLeft: "20px",
    lineHeight: "1.8",
    marginTop: "16px",
    marginBottom: "16px"
  };

  const footerStyle = {
    marginTop: "100px",
    paddingBottom: "50px",
    textAlign: "center",
    borderTop: "1px solid #eee",
    paddingTop: "50px"
  };

  return (
    <div style={containerStyle}>
      <div style={heroStyle}>
        <h1 style={nameStyle}>D.O.I Henry</h1>
        <h2 style={titleStyle}>Software Engineer — Backend Systems • SaaS Architecture • Automation Engineering</h2>
        <p style={descriptionStyle}>
          I build production-grade backend systems that power real workflows —
          including multi-tenant SaaS APIs, automation engines, and analytics dashboards.
          My focus is system design, scalability, and real-world engineering architecture.
        </p>
        <div style={buildingStyle}>
          Currently building: Distributed SaaS systems • Automation pipelines • Logistics intelligence platforms
        </div>
        <div>
          <a href="/projects" style={linkStyle}>View Engineering Case Studies →</a>
        </div>
      </div>

      <h2 style={sectionTitleStyle}>System Architecture Thinking</h2>
      <div style={architectureBoxStyle}>
        <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "16px" }}>
          I design systems as connected layers, not isolated applications:
        </p>
        <ul style={listStyle}>
          <li><strong>API Layer:</strong> Handles authentication, business logic, and data integrity</li>
          <li><strong>Frontend Layer:</strong> Provides operational dashboards and control systems</li>
          <li><strong>Automation Layer:</strong> Executes background jobs, monitoring, and billing logic</li>
        </ul>
        <p style={{ fontSize: "16px", lineHeight: "1.6", marginTop: "16px", marginBottom: 0 }}>
          This creates a complete SaaS ecosystem that mirrors real production architecture.
        </p>
      </div>

      <h2 style={sectionTitleStyle}>System Reliability Thinking</h2>
      <div style={reliabilityBoxStyle}>
        <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "16px" }}>
          I design systems with failure in mind, not just success cases.
        </p>
        <ul style={listStyle}>
          <li>API endpoints validate all incoming data before processing</li>
          <li>System prevents unauthorized access using middleware-based authentication</li>
          <li>External API failures do not crash the application</li>
          <li>Database operations are structured to avoid inconsistent states</li>
          <li>Frontend handles loading, error, and empty states gracefully</li>
        </ul>
        <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: 0 }}>
          The system is designed to remain stable under real-world failure conditions.
        </p>
      </div>

      <div style={footerStyle}>
        <h3 style={{ fontSize: "22px", marginBottom: "16px" }}>Open to Software Engineering Roles</h3>
        <p style={{ marginBottom: "16px", color: "#555" }}>
          I specialize in backend systems, scalable APIs, and automation engineering.
        </p>
        <p style={{ marginBottom: "8px" }}>
          📧 <a href="mailto:dikeojo.ifeanyi001@gmail.com" style={{ color: "#0d6efd", textDecoration: "none" }}>
            dikeojo.ifeanyi001@gmail.com
          </a>
        </p>
        <p style={{ marginBottom: "16px" }}>
          🔗 <a href="https://github.com/dikeojoifeanyi001-hub" target="_blank" rel="noopener noreferrer" style={{ color: "#0d6efd", textDecoration: "none" }}>
            github.com/dikeojoifeanyi001-hub
          </a>
        </p>
        <p style={{ fontSize: "14px", color: "#666", marginTop: "24px" }}>
          Built with React, Node.js, PostgreSQL, Cloudflare, and Railway
        </p>
      </div>
    </div>
  );
}