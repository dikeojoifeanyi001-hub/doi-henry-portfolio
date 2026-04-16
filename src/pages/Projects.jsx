const projects = [
  {
    title: "DIFE SaaS API",
    problem: "Logistics companies needed a secure, multi-tenant backend system to manage drivers, routes, and risk assessment across multiple organizations.",
    solution: "Built a production-grade REST API with JWT authentication, multi-tenant architecture, and an automated risk scoring engine.",
    tech: ["Node.js", "Express", "PostgreSQL", "JWT", "Railway"],
    features: [
      "Multi-tenant company system (each company manages its own data)",
      "JWT authentication with role-based access control",
      "Driver and route management (full CRUD operations)",
      "Risk scoring engine (0-100 based on route characteristics)",
      "Production deployment on Railway with PostgreSQL"
    ],
    live: "https://dife-saas-api-production.up.railway.app",
    github: "https://github.com/dikeojoifeanyi001-hub/dife-saas-api"
  },
  {
    title: "DIFE React Dashboard",
    problem: "Operations teams required a visual interface to manage logistics data, monitor routes, and quickly identify high-risk activities.",
    solution: "Built a responsive admin dashboard connected to the live API with real-time data, risk visualization, and intuitive management tools.",
    tech: ["React", "Vite", "Axios", "React Router", "Cloudflare Pages"],
    features: [
      "Secure JWT authentication with protected routes",
      "Dashboard with 4 key metric cards (drivers, routes, high risk, average risk)",
      "Driver and route management with add/edit functionality",
      "Risk monitoring with color-coded levels (Green/Yellow/Red)",
      "Responsive design for desktop and tablet devices"
    ],
    live: "https://dife-dashboard.pages.dev",
    github: "https://github.com/dikeojoifeanyi001-hub/dife-dashboard"
  },
  {
    title: "DIFE Automation System",
    problem: "Manual monitoring of routes for high-risk conditions was inefficient. Companies needed automated billing and alert systems.",
    solution: "Built a Cloudflare Worker with cron triggers that automatically checks routes every 2 minutes and calculates billing every 5 minutes.",
    tech: ["Cloudflare Workers", "Cron Jobs", "Fetch API", "GitHub Actions"],
    features: [
      "Automatic risk detection (alerts when risk_score > 70)",
      "Billing simulation ($5 per route per company)",
      "Debug endpoint (/run-jobs) returning complete JSON results",
      "Runs 24/7 with zero manual intervention",
      "Company-level billing breakdown and logging"
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
    marginBottom: "40px",
    color: "#1a1a2e",
    letterSpacing: "-0.5px"
  };

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "32px",
    marginBottom: "40px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
    border: "1px solid #eee"
  };

  const projectTitleStyle = {
    fontSize: "28px",
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
    marginBottom: "20px"
  };

  const techStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
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

  const featureStyle = {
    marginBottom: "24px",
    paddingLeft: "20px"
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
          
          <div style={sectionLabelStyle}>Tech Stack</div>
          <div style={techStyle}>
            {project.tech.map((tech, i) => (
              <span key={i} style={techBadgeStyle}>{tech}</span>
            ))}
          </div>
          
          <div style={sectionLabelStyle}>Key Features</div>
          <ul style={featureStyle}>
            {project.features.map((feature, i) => (
              <li key={i} style={{ marginBottom: "8px", color: "#555", lineHeight: "1.5" }}>{feature}</li>
            ))}
          </ul>
          
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