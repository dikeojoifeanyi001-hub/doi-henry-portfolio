export default function Home() {
  return (
    <div className="container">
      {/* HERO SECTION */}
      <div style={{ marginBottom: "60px" }}>
        <h1>D.O.I Henry</h1>
        <h2>Software Engineer — Backend Systems • SaaS Architecture • Automation Engineering</h2>
        <p>
          I build production-grade backend systems that power real workflows —
          including multi-tenant SaaS APIs, automation engines, and analytics dashboards.
          My focus is system design, scalability, and real-world engineering architecture.
        </p>
        <div style={{ fontWeight: "600", color: "#0d6efd", marginBottom: "40px", fontSize: "16px" }}>
          Currently building: Distributed SaaS systems • Automation pipelines • Logistics intelligence platforms
        </div>
        <div>
          <a href="/projects" style={{ fontSize: "18px", fontWeight: "600", color: "#0d6efd", textDecoration: "none" }}>
            View Engineering Case Studies →
          </a>
        </div>
      </div>

      {/* SYSTEM ARCHITECTURE THINKING */}
      <h2>System Architecture Thinking</h2>
      <div className="info-box">
        <p style={{ marginBottom: "16px" }}>
          I design systems as connected layers, not isolated applications:
        </p>
        <ul>
          <li><strong>API Layer:</strong> Handles authentication, business logic, and data integrity</li>
          <li><strong>Frontend Layer:</strong> Provides operational dashboards and control systems</li>
          <li><strong>Automation Layer:</strong> Executes background jobs, monitoring, and billing logic</li>
        </ul>
        <p style={{ marginBottom: 0 }}>
          This creates a complete SaaS ecosystem that mirrors real production architecture.
        </p>
      </div>

      {/* SYSTEM RELIABILITY THINKING */}
      <h2>System Reliability Thinking</h2>
      <div className="reliability-box">
        <p style={{ marginBottom: "16px" }}>
          I design systems with failure in mind, not just success cases.
        </p>
        <ul>
          <li>API endpoints validate all incoming data before processing</li>
          <li>System prevents unauthorized access using middleware-based authentication</li>
          <li>External API failures do not crash the application</li>
          <li>Database operations are structured to avoid inconsistent states</li>
          <li>Frontend handles loading, error, and empty states gracefully</li>
        </ul>
        <p style={{ marginBottom: 0 }}>
          The system is designed to remain stable under real-world failure conditions.
        </p>
      </div>

      {/* SCALE & SYSTEM LIMITS */}
      <h2>System Scale & Architecture Limits</h2>
      <div className="scale-box">
        <p style={{ marginBottom: "16px" }}>
          These systems are designed as production-grade prototypes that can scale
          with additional infrastructure improvements.
        </p>
        <ul>
          <li>Current architecture can handle ~1,000–5,000 requests/day in a single instance deployment</li>
          <li>Database is optimized for small-to-medium SaaS workloads (can scale horizontally with indexing + replication)</li>
          <li>API design is stateless, enabling horizontal scaling via load balancers</li>
          <li>Risk scoring logic runs in O(1) time per request (constant-time computation)</li>
        </ul>
        <p style={{ marginBottom: 0 }}>
          If scaled to production level, I would introduce caching (Redis), queue workers,
          and read replicas for database scaling.
        </p>
      </div>

      {/* FOOTER */}
      <div className="footer">
        <h3 style={{ fontSize: "22px", marginBottom: "16px" }}>Open to Software Engineering Roles</h3>
        <p style={{ marginBottom: "16px", color: "#555" }}>
          I specialize in backend systems, scalable APIs, and automation engineering.
        </p>
        <p style={{ marginBottom: "8px" }}>
          📧 <a href="mailto:dikeojo.ifeanyi001@gmail.com">dikeojo.ifeanyi001@gmail.com</a>
        </p>
        <p style={{ marginBottom: "16px" }}>
          🔗 <a href="https://github.com/dikeojoifeanyi001-hub" target="_blank" rel="noopener noreferrer">github.com/dikeojoifeanyi001-hub</a>
        </p>
        <p style={{ fontSize: "14px", color: "#666", marginTop: "24px" }}>
          Built with React, Node.js, PostgreSQL, Cloudflare, and Railway
        </p>
      </div>
    </div>
  );
}