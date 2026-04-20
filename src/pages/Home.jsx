export default function Home() {
  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "60px 40px"
  };

  const heroStyle = {
    marginBottom: "60px"
  };

  const titleStyle = {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#1a1a2e"
  };

  const descriptionStyle = {
    fontSize: "18px",
    lineHeight: "1.7",
    color: "#444",
    maxWidth: "700px",
    marginBottom: "20px"
  };

  const focusStatementStyle = {
    fontSize: "18px",
    fontWeight: "500",
    color: "#0d6efd",
    marginBottom: "35px",
    fontStyle: "italic"
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

  const cardsContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "24px",
    marginBottom: "40px",
    justifyContent: "center"
  };

  const cardStyle = {
    flex: "1",
    minWidth: "280px",
    backgroundColor: "#f8f9fa",
    padding: "24px",
    borderRadius: "12px",
    borderLeft: "4px solid #0d6efd",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
  };

  const reliabilityCardStyle = {
    flex: "1",
    minWidth: "280px",
    backgroundColor: "#fff8e7",
    padding: "24px",
    borderRadius: "12px",
    borderLeft: "4px solid #ffc107",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
  };

  const scaleCardStyle = {
    flex: "1",
    minWidth: "280px",
    backgroundColor: "#e7f3ff",
    padding: "24px",
    borderRadius: "12px",
    borderLeft: "4px solid #0d6efd",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
  };

  const listStyle = {
    paddingLeft: "20px",
    lineHeight: "1.8",
    marginTop: "12px",
    marginBottom: 0
  };

  const footerStyle = {
    marginTop: "60px",
    paddingBottom: "40px",
    textAlign: "center",
    borderTop: "1px solid #eee",
    paddingTop: "40px"
  };

  return (
    <div style={containerStyle}>
      {/* HERO SECTION */}
      <div style={heroStyle}>
        <h1 style={titleStyle}>Software Engineer — Backend Systems • SaaS Architecture • Automation Engineering</h1>
        <p style={descriptionStyle}>
          I build production-grade backend systems that power real workflows —
          including multi-tenant SaaS APIs, automation engines, and analytics dashboards.
        </p>
        <p style={focusStatementStyle}>
          "I focus on building systems that reflect real-world engineering challenges."
        </p>
        <div style={buildingStyle}>
          Currently building: Distributed SaaS systems • Automation pipelines • Logistics intelligence platforms
        </div>
        <div>
          <a href="/projects" style={linkStyle}>View Engineering Case Studies →</a>
        </div>
      </div>

      {/* SYSTEM ARCHITECTURE THINKING */}
      <h2 style={sectionTitleStyle}>System Architecture Thinking</h2>
      <div style={cardsContainerStyle}>
        <div style={cardStyle}>
          <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "16px", fontWeight: "bold" }}>
            API Layer
          </p>
          <p style={{ fontSize: "14px", lineHeight: "1.5", color: "#555", marginBottom: 0 }}>
            Handles authentication, business logic, and data integrity
          </p>
        </div>
        <div style={cardStyle}>
          <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "16px", fontWeight: "bold" }}>
            Frontend Layer
          </p>
          <p style={{ fontSize: "14px", lineHeight: "1.5", color: "#555", marginBottom: 0 }}>
            Provides operational dashboards and control systems
          </p>
        </div>
        <div style={cardStyle}>
          <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "16px", fontWeight: "bold" }}>
            Automation Layer
          </p>
          <p style={{ fontSize: "14px", lineHeight: "1.5", color: "#555", marginBottom: 0 }}>
            Executes background jobs, monitoring, and billing logic
          </p>
        </div>
      </div>

      {/* SYSTEM RELIABILITY THINKING */}
      <h2 style={sectionTitleStyle}>System Reliability Thinking</h2>
      <div style={cardsContainerStyle}>
        <div style={reliabilityCardStyle}>
          <p style={{ fontSize: "14px", lineHeight: "1.5", marginBottom: "12px" }}>
            API endpoints validate all incoming data before processing
          </p>
          <p style={{ fontSize: "14px", lineHeight: "1.5", marginBottom: "12px" }}>
            System prevents unauthorized access using middleware-based authentication
          </p>
          <p style={{ fontSize: "14px", lineHeight: "1.5", marginBottom: 0 }}>
            External API failures do not crash the application
          </p>
        </div>
        <div style={reliabilityCardStyle}>
          <p style={{ fontSize: "14px", lineHeight: "1.5", marginBottom: "12px" }}>
            Database operations are structured to avoid inconsistent states
          </p>
          <p style={{ fontSize: "14px", lineHeight: "1.5", marginBottom: "12px" }}>
            Frontend handles loading, error, and empty states gracefully
          </p>
          <p style={{ fontSize: "14px", lineHeight: "1.5", marginBottom: 0 }}>
            The system is designed to remain stable under real-world failure conditions
          </p>
        </div>
      </div>

      {/* SCALE & SYSTEM LIMITS */}
      <h2 style={sectionTitleStyle}>System Scale & Architecture Limits</h2>
      <div style={cardsContainerStyle}>
        <div style={scaleCardStyle}>
          <p style={{ fontSize: "14px", lineHeight: "1.5", marginBottom: "12px" }}>
            Current architecture can handle ~1,000–5,000 requests/day
          </p>
          <p style={{ fontSize: "14px", lineHeight: "1.5", marginBottom: "12px" }}>
            Database can scale horizontally with indexing + replication
          </p>
          <p style={{ fontSize: "14px", lineHeight: "1.5", marginBottom: 0 }}>
            API design is stateless, enabling horizontal scaling via load balancers
          </p>
        </div>
        <div style={scaleCardStyle}>
          <p style={{ fontSize: "14px", lineHeight: "1.5", marginBottom: "12px" }}>
            Risk scoring logic runs in O(1) time per request
          </p>
          <p style={{ fontSize: "14px", lineHeight: "1.5", marginBottom: 0 }}>
            If scaled to production level: caching (Redis), queue workers, and read replicas
          </p>
        </div>
      </div>

      {/* FOOTER */}
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