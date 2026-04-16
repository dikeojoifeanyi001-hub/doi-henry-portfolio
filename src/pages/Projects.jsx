const projects = [
  {
    title: "DIFE SaaS API",
    problem: "Logistics companies need a centralized backend to manage drivers, routes, and risk assessment across multiple tenants.",
    solution: "Built a multi-tenant REST API with JWT authentication, driver/route CRUD operations, and automatic environmental risk scoring.",
    tech: ["Node.js", "Express", "PostgreSQL", "JWT", "Railway"],
    features: [
      "Multi-tenant architecture (companies manage their own data)",
      "JWT authentication with role-based access",
      "Automatic risk scoring (0-100 based on route characteristics)",
      "Full CRUD for drivers and routes"
    ],
    live: "https://dife-saas-api-production.up.railway.app",
    github: "https://github.com/dikeojoifeanyi001-hub/dife-saas-api"
  },
  {
    title: "DIFE React Dashboard",
    problem: "Operations teams need a visual interface to manage drivers, monitor routes, and identify high-risk logistics activities.",
    solution: "Built a responsive admin dashboard that connects to the live API with real-time data, risk color coding, and interactive tables.",
    tech: ["React", "Vite", "Axios", "React Router", "Cloudflare Pages"],
    features: [
      "JWT authentication with protected routes",
      "Dashboard with 4 metric cards (drivers, routes, high risk, avg risk)",
      "Driver and route management with forms",
      "Risk monitoring with color-coded levels (Green/Yellow/Red)"
    ],
    live: "https://dife-dashboard.pages.dev",
    github: "https://github.com/dikeojoifeanyi001-hub/dife-dashboard"
  },
  {
    title: "DIFE Automation System",
    problem: "Manual monitoring of routes for high-risk conditions is inefficient. Companies need automated billing and alert systems.",
    solution: "Built a Cloudflare Worker with cron triggers that automatically checks routes every 2 minutes and calculates billing every 5 minutes.",
    tech: ["Cloudflare Workers", "Cron Jobs", "Fetch API", "GitHub Actions"],
    features: [
      "Automatic risk detection (alerts when risk_score > 70)",
      "Billing simulation ($5 per route per company)",
      "Debug endpoint (/run-jobs) returning complete JSON results",
      "Runs 24/7 with zero manual intervention"
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
    color: "#1a1a2e"
  };

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "28px",
    marginBottom: "32px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    border: "1px solid #eee"
  };

  const projectTitleStyle = {
    fontSize: "28px",
    marginBottom: "12px",
    color: "#1a1a2e"
  };

  const sectionLabelStyle = {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#0d6efd",
    marginBottom: "8px",
    textTransform: "uppercase",
    letterSpacing: "1px"
  };

  const textStyle = {
    fontSize: "16px",
    lineHeight: "1.5",
    color: "#555",
    marginBottom: "16px"
  };

  const techStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "20px"
  };

  const techBadgeStyle = {
    backgroundColor: "#e9ecef",
    padding: "6px 14px",
    borderRadius: "20px",
    fontSize: "12px",
    color: "#495057"
  };

  const featureStyle = {
    marginBottom: "20px",
    paddingLeft: "20px"
  };

  const linkStyle = {
    color: "#0d6efd",
    textDecoration: "none",
    marginRight: "24px",
    fontWeight: "500"
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
              <li key={i} style={{ marginBottom: "8px", color: "#555" }}>{feature}</li>
            ))}
          </ul>
          
          <div>
            <a href={project.live} style={linkStyle} target="_blank" rel="noopener noreferrer">
              🔗 Live Demo →
            </a>
            <a href={project.github} style={linkStyle} target="_blank" rel="noopener noreferrer">
              📁 View GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}