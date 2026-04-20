const projects = [
  {
    title: "DIFE SaaS API",
    impact: "Simulates a real SaaS logistics system with authentication, routing, and risk analysis.",
    problem: "Businesses needed a scalable multi-tenant logistics system with authentication, routing, and risk intelligence.",
    solution: "Built a production-ready REST API with JWT authentication, company isolation (multi-tenant architecture), and automated risk scoring engine.",
    systemArchitecture: "Node.js + Express API → PostgreSQL database → React dashboard → automation engine",
    engineeringDecisions: [
      "Separated services for scalability (controller/service pattern)",
      "Implemented stateless authentication using JWT",
      "Designed multi-tenant isolation per company",
      "Built deterministic risk scoring algorithm (0–100)"
    ],
    tech: ["Node.js", "Express", "PostgreSQL", "JWT", "Railway"],
    edgeCases: [
      "Handled invalid or missing input data in API requests to prevent system crashes",
      "Ensured authentication protection for all protected routes using JWT validation middleware",
      "Designed fallback responses for failed database queries and API failures",
      "Implemented safe defaults for risk scoring when route data is incomplete",
      "Ensured system continues functioning even when external API requests fail"
    ],
    tradeoffs: [
      "Chose JWT authentication instead of session-based auth for stateless scalability across services",
      "Used Node.js + Express for fast API development instead of heavier frameworks",
      "Selected a monolithic backend structure over microservices to reduce deployment complexity",
      "Risk scoring logic is simplified (0–100 formula) to simulate real-world behavior",
      "Used REST instead of GraphQL to keep system simple and predictable"
    ],
    performance: [
      "API responses are lightweight JSON payloads to reduce network overhead",
      "Authentication middleware avoids unnecessary database calls for invalid tokens",
      "Stateless backend design enables horizontal scaling",
      "Database queries are structured to minimize joins and improve response time"
    ],
    scaleLimits: [
      "No caching layer → repeated API calls hit database directly",
      "No queue system → background jobs run synchronously under load",
      "No rate limiting → API could be abused under high traffic",
      "Single database instance → potential bottleneck under heavy read/write load"
    ],
    live: "https://dife-saas-api-production.up.railway.app",
    github: "https://github.com/dikeojoifeanyi001-hub/dife-saas-api"
  },
  {
    title: "DIFE React Dashboard",
    impact: "Provides operations teams with real-time visibility into drivers, routes, and risk levels.",
    problem: "Operations teams needed a visual interface to manage logistics data and monitor route risk in real-time.",
    solution: "Built a responsive admin dashboard with secure authentication, real-time API integration, and risk visualization.",
    systemArchitecture: "React + Vite frontend → Axios API client → DIFE SaaS API → Cloudflare Pages deployment",
    engineeringDecisions: [
      "Implemented protected routes with JWT token validation",
      "Created reusable components for tables, forms, and cards",
      "Built color-coded risk levels (Green/Yellow/Red)",
      "Optimized API calls with axios interceptors"
    ],
    tech: ["React", "Vite", "Axios", "React Router", "Cloudflare Pages"],
    edgeCases: [
      "Handled API request failures with user-friendly error messages",
      "Implemented loading states for all async operations",
      "Displayed empty states when no drivers or routes exist",
      "Managed token expiration with automatic logout redirect",
      "Gracefully handled network disconnections during API calls"
    ],
    tradeoffs: [
      "Chose React over Vue/Angular for ecosystem maturity and component reusability",
      "Used Vite instead of Create React App for faster build times",
      "Selected Axios over fetch for built-in interceptors",
      "Used client-side routing instead of server-side for faster navigation",
      "Simplified state management with React hooks instead of Redux"
    ],
    live: "https://dife-dashboard.pages.dev",
    github: "https://github.com/dikeojoifeanyi001-hub/dife-dashboard"
  },
  {
    title: "DIFE Automation System",
    impact: "Automates risk monitoring and billing simulation using serverless cron jobs.",
    problem: "Manual monitoring of routes for high-risk conditions was inefficient. Companies needed automated alerting and billing.",
    solution: "Built a Cloudflare Worker with cron triggers that automatically checks routes every 2 minutes and calculates billing every 5 minutes.",
    systemArchitecture: "Cloudflare Workers → cron triggers → API integration → JSON logging",
    engineeringDecisions: [
      "Designed stateless job execution for reliability",
      "Implemented automatic retry logic for API failures",
      "Built debug endpoint (/run-jobs) for manual testing",
      "Added structured logging for observability"
    ],
    tech: ["Cloudflare Workers", "Cron Jobs", "Fetch API", "GitHub Actions"],
    edgeCases: [
      "Handled API authentication failures with proper error logging",
      "Implemented retry logic for transient network failures",
      "Ensured cron jobs don't overlap or run concurrently",
      "Added timeout handling for slow API responses",
      "Designed graceful degradation when database is unavailable"
    ],
    tradeoffs: [
      "Chose Cloudflare Workers over AWS Lambda for simpler deployment",
      "Used cron triggers instead of real-time events to reduce complexity",
      "Selected JSON logging over structured logging for simplicity",
      "Implemented manual debug endpoint instead of full monitoring dashboard",
      "Used polling (cron) instead of webhooks to avoid external infrastructure"
    ],
    live: "https://dife-automation.dikeojo-ifeanyi001.workers.dev/run-jobs",
    github: "https://github.com/dikeojoifeanyi001-hub/dife-automation"
  }
];

export default function Projects() {
  const containerStyle = {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "60px 40px"
  };

  const titleStyle = {
    fontSize: "36px",
    fontWeight: "700",
    marginBottom: "40px",
    color: "#1a1a2e",
    letterSpacing: "-0.5px"
  };

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "32px",
    marginBottom: "70px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
    border: "1px solid #eee"
  };

  const projectTitleStyle = {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "12px",
    color: "#1a1a2e",
    letterSpacing: "-0.5px"
  };

  const impactStyle = {
    fontSize: "16px",
    fontWeight: "500",
    color: "#0d6efd",
    marginBottom: "20px",
    paddingBottom: "12px",
    borderBottom: "1px solid #eee"
  };

  const sectionLabelStyle = {
    fontSize: "13px",
    fontWeight: "700",
    color: "#0d6efd",
    marginBottom: "8px",
    textTransform: "uppercase",
    letterSpacing: "1px"
  };

  const textStyle = {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#444",
    marginBottom: "16px"
  };

  const techStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginTop: "16px",
    marginBottom: "24px"
  };

  const techBadgeStyle = {
    backgroundColor: "#e9ecef",
    padding: "6px 14px",
    borderRadius: "20px",
    fontSize: "13px",
    color: "#495057",
    fontWeight: "500"
  };

  const decisionsStyle = {
    backgroundColor: "#f8f9fa",
    padding: "20px",
    borderRadius: "8px",
    marginTop: "16px",
    marginBottom: "24px"
  };

  const edgeCasesStyle = {
    backgroundColor: "#fff8e7",
    padding: "20px",
    borderRadius: "8px",
    marginTop: "16px",
    marginBottom: "24px",
    borderLeft: "4px solid #ffc107"
  };

  const tradeoffsStyle = {
    backgroundColor: "#e7f3ff",
    padding: "20px",
    borderRadius: "8px",
    marginTop: "16px",
    marginBottom: "24px",
    borderLeft: "4px solid #0d6efd"
  };

  const performanceStyle = {
    backgroundColor: "#e8f5e9",
    padding: "20px",
    borderRadius: "8px",
    marginTop: "16px",
    marginBottom: "24px",
    borderLeft: "4px solid #28a745"
  };

  const linkStyle = {
    color: "#0d6efd",
    textDecoration: "none",
    marginRight: "24px",
    fontWeight: "600",
    fontSize: "15px"
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Engineering Case Studies</h1>

      {projects.map((project, index) => (
        <div key={index} style={cardStyle}>
          <h2 style={projectTitleStyle}>{project.title}</h2>
          
          {/* IMPACT SUMMARY */}
          <p style={impactStyle}><strong>Impact:</strong> {project.impact}</p>
          
          <div style={sectionLabelStyle}>Problem</div>
          <p style={textStyle}>{project.problem}</p>
          
          <div style={sectionLabelStyle}>Solution</div>
          <p style={textStyle}>{project.solution}</p>
          
          <div style={sectionLabelStyle}>System Architecture</div>
          <p style={textStyle}>{project.systemArchitecture}</p>
          
          <div style={sectionLabelStyle}>Engineering Decisions</div>
          <div style={decisionsStyle}>
            <ul style={{ margin: 0, paddingLeft: "20px" }}>
              {project.engineeringDecisions.map((decision, i) => (
                <li key={i} style={{ marginBottom: "8px", color: "#555", lineHeight: "1.5" }}>{decision}</li>
              ))}
            </ul>
          </div>
          
          <div style={sectionLabelStyle}>Complexity & Edge Case Handling</div>
          <div style={edgeCasesStyle}>
            <ul style={{ margin: 0, paddingLeft: "20px" }}>
              {project.edgeCases.map((edgeCase, i) => (
                <li key={i} style={{ marginBottom: "8px", color: "#555", lineHeight: "1.5" }}>{edgeCase}</li>
              ))}
            </ul>
            <p style={{ marginTop: "12px", marginBottom: 0, fontSize: "14px", color: "#666" }}>
              The system is designed to remain stable under real-world failure conditions, not just ideal test scenarios.
            </p>
          </div>
          
          <div style={sectionLabelStyle}>Engineering Trade-offs</div>
          <div style={tradeoffsStyle}>
            <ul style={{ margin: 0, paddingLeft: "20px" }}>
              {project.tradeoffs.map((tradeoff, i) => (
                <li key={i} style={{ marginBottom: "8px", color: "#555", lineHeight: "1.5" }}>{tradeoff}</li>
              ))}
            </ul>
            <p style={{ marginTop: "12px", marginBottom: 0, fontSize: "14px", color: "#666" }}>
              These decisions were made to balance simplicity, scalability, and production readiness.
            </p>
          </div>
          
          {project.performance && (
            <>
              <div style={sectionLabelStyle}>Performance & Optimization Considerations</div>
              <div style={performanceStyle}>
                <ul style={{ margin: 0, paddingLeft: "20px" }}>
                  {project.performance.map((item, i) => (
                    <li key={i} style={{ marginBottom: "8px", color: "#555", lineHeight: "1.5" }}>{item}</li>
                  ))}
                </ul>
                <p style={{ marginTop: "12px", marginBottom: 0, fontSize: "14px", color: "#666" }}>
                  Future improvements would include caching frequent requests using Redis and implementing pagination for large datasets.
                </p>
              </div>
            </>
          )}
          
          {project.scaleLimits && (
            <>
              <div style={sectionLabelStyle}>What Would Break at Scale</div>
              <div style={edgeCasesStyle}>
                <ul style={{ margin: 0, paddingLeft: "20px" }}>
                  {project.scaleLimits.map((item, i) => (
                    <li key={i} style={{ marginBottom: "8px", color: "#555", lineHeight: "1.5" }}>{item}</li>
                  ))}
                </ul>
                <p style={{ marginTop: "12px", marginBottom: 0, fontSize: "14px", color: "#666" }}>
                  These limitations are expected at early-stage architecture and would be resolved using Redis caching, job queues, and database scaling strategies.
                </p>
              </div>
            </>
          )}
          
          <div style={sectionLabelStyle}>Tech Stack</div>
          <div style={techStyle}>
            {project.tech.map((tech, i) => (
              <span key={i} style={techBadgeStyle}>{tech}</span>
            ))}
          </div>
          
          <div>
            <a href={project.live} style={linkStyle} target="_blank" rel="noopener noreferrer">
              🔗 Live Demo →
            </a>
            <a href={project.github} style={linkStyle} target="_blank" rel="noopener noreferrer">
              📁 GitHub Repository
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}