const projects = [
  {
    title: "DIFE SaaS API",
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
    live: "https://dife-saas-api-production.up.railway.app",
    github: "https://github.com/dikeojoifeanyi001-hub/dife-saas-api"
  },
  {
    title: "DIFE React Dashboard",
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
    live: "https://dife-dashboard.pages.dev",
    github: "https://github.com/dikeojoifeanyi001-hub/dife-dashboard"
  },
  {
    title: "DIFE Automation System",
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
    marginBottom: "20px",
    color: "#1a1a2e",
    letterSpacing: "-0.5px"
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