

const projects = [
  {
    icon: '⏱️',
    title: 'Project Management Time Tracker',
    description: 'Engineered a desktop application with role-based access control supporting 3 user roles (Admin, PM, Team Member) for task assignment, time logging, and progress monitoring. Implemented DAO and service layers following the MVC pattern, with an embedded H2 database handling 10+ CRUD operations and real-time data visualization charts.',
    tags: ['Java', 'JavaFX 21', 'Maven', 'H2 Database', 'FXML'],
    accentColor: '#ef4444',
    github: 'https://github.com/ay9616790-source',
  },
  {
    icon: '🌐',
    title: '3D Portfolio Website',
    description: 'Built a responsive 3D portfolio website using React.js and Three.js, rendering WebGL scenes with smooth animations and glassmorphism UI components. Integrated a contact form and social media APIs, achieving optimized page load times under 3 seconds across devices.',
    tags: ['React.js', 'Three.js', 'JavaScript', 'HTML5', 'CSS3'],
    accentColor: '#f97316',
    github: 'https://github.com/ay9616790-source',
  },
  {
    icon: '🎙️',
    title: 'Voice Command Calculator',
    description: 'Developed a voice-activated calculator leveraging the Web Speech API, enabling hands-free arithmetic operations through natural language processing.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Web Speech API'],
    accentColor: '#ef4444',
    github: 'https://github.com/ay9616790-source',
  },
];

export default function Projects() {
  return (
    <section className="section">
        <div className="section-header fade-in">
          <p className="section-label">My Work</p>
          <h2 className="section-title">Projects</h2>
          <div className="section-line"></div>
          <p className="section-desc">
            A curated selection of projects showcasing my work in full-stack development, 
            desktop application engineering, and creative web experiences.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className={`project-card fade-in fade-in-delay-${Math.min(index + 1, 5)}`}
              style={{ '--accent-color': project.accentColor }}
            >
              <div className="project-icon">{project.icon}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="project-tag"
                    style={{ 
                      '--tag-bg': `${project.accentColor}15`,
                      '--tag-color': project.accentColor 
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}
