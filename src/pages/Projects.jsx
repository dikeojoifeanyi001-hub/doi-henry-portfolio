const projects = [
  {
    title: "DIFE SaaS API",
    impact: "Simulates a real SaaS logistics system with authentication, routing, and risk analysis.",
    problem: "Businesses needed a scalable multi-tenant logistics system with authentication, routing, and risk intelligence.",
    solution: "Built a production-ready REST API with JWT authentication, company isolation, and automated risk scoring.",
    tech: ["Node.js", "Express", "PostgreSQL", "JWT", "Railway"],
    live: "https://dife-saas-api-production.up.railway.app",
    github: "https://github.com/dikeojoifeanyi001-hub/dife-saas-api"
  },
  {
    title: "DIFE React Dashboard",
    impact: "Provides operations teams with real-time visibility into drivers, routes, and risk levels.",
    problem: "Operations teams needed a visual interface to manage logistics data and monitor route risk.",
    solution: "Built a responsive admin dashboard with secure authentication and real-time API integration.",
    tech: ["React", "Vite", "Axios", "React Router", "Cloudflare Pages"],
    live: "https://dife-dashboard.pages.dev",
    github: "https://github.com/dikeojoifeanyi001-hub/dife-dashboard"
  },
  {
    title: "DIFE Automation System",
    impact: "Automates risk monitoring and billing simulation using serverless cron jobs.",
    problem: "Manual monitoring of routes for high-risk conditions was inefficient.",
    solution: "Built a Cloudflare Worker with cron triggers that automatically checks routes every 2 minutes.",
    tech: ["Cloudflare Workers", "Cron Jobs", "Fetch API", "GitHub Actions"],
    live: "https://dife-automation.dikeojo-ifeanyi001.workers.dev/run-jobs",
    github: "https://github.com/dikeojoifeanyi001-hub/dife-automation"
  }
];

export default function Projects() {
  return (
    <div className="container">
      <h1>Engineering Case Studies</h1>

      <div className="grid">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "12px" }}>{project.title}</h2>
            <p style={{ color: "#0d6efd", fontWeight: "500", marginBottom: "16px" }}>Impact: {project.impact}</p>
            <p><strong>Problem:</strong> {project.problem}</p>
            <p><strong>Solution:</strong> {project.solution}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "16px", marginBottom: "16px" }}>
              {project.tech.map((tech, i) => (
                <span key={i} style={{ backgroundColor: "#e9ecef", padding: "4px 12px", borderRadius: "20px", fontSize: "12px" }}>{tech}</span>
              ))}
            </div>
            <div>
              <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ marginRight: "20px", fontWeight: "600" }}>
                🔗 Live Demo →
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ fontWeight: "600" }}>
                📁 GitHub Repository
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}