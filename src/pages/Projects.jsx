const projects = [
  {
    title: "DIFE SaaS API",
    description: "Multi-tenant logistics backend API with JWT authentication, driver/route management, and automatic risk scoring. Built with Node.js, Express, and PostgreSQL.",
    tech: ["Node.js", "Express", "PostgreSQL", "JWT"],
    live: "https://dife-saas-api-production.up.railway.app",
    github: "https://github.com/dikeojoifeanyi001-hub/dife-saas-api"
  },
  {
    title: "DIFE React Dashboard",
    description: "Professional admin dashboard for logistics operations. Features driver/route management, risk monitoring with color-coded levels, and real-time API integration.",
    tech: ["React", "Vite", "Axios", "React Router"],
    live: "https://dife-dashboard.pages.dev",
    github: "https://github.com/dikeojoifeanyi001-hub/dife-dashboard"
  },
  {
    title: "DIFE Automation System",
    description: "Background job system running on Cloudflare Workers with cron triggers. Automatically monitors routes for high-risk conditions and simulates company billing every 5 minutes.",
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
    marginBottom: "40px",
    color: "#1a1a2e"
  };

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "24px",
    marginBottom: "24px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    border: "1px solid #eee"
  };

  const projectTitleStyle = {
    fontSize: "24px",
    marginBottom: "12px",
    color: "#1a1a2e"
  };

  const descriptionStyle = {
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
    padding: "4px 12px",
    borderRadius: "20px",
    fontSize: "12px",
    color: "#495057"
  };

  const linkStyle = {
    color: "#0d6efd",
    textDecoration: "none",
    marginRight: "20px"
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Projects</h1>

      {projects.map((project, index) => (
        <div key={index} style={cardStyle}>
          <h2 style={projectTitleStyle}>{project.title}</h2>
          <p style={descriptionStyle}>{project.description}</p>
          
          <div style={techStyle}>
            {project.tech.map((tech, i) => (
              <span key={i} style={techBadgeStyle}>{tech}</span>
            ))}
          </div>
          
          <div>
            <a href={project.live} style={linkStyle} target="_blank" rel="noopener noreferrer">
              🔗 Live Demo
            </a>
            <a href={project.github} style={linkStyle} target="_blank" rel="noopener noreferrer">
              📁 GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}