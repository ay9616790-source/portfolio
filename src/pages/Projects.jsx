import React from 'react';

const projects = [
  {
    icon: '🤖',
    title: 'AI Chatbot',
    description: 'An intelligent chatbot powered by NLP that understands context and responds to natural language queries with high accuracy.',
    tags: ['Python', 'NLP', 'TensorFlow'],
    accentColor: '#ef4444',
  },
  {
    icon: '🖼️',
    title: 'Image Classifier',
    description: 'Deep learning model using Convolutional Neural Networks to classify images, trained on custom datasets with data augmentation techniques.',
    tags: ['Python', 'CNN', 'OpenCV'],
    accentColor: '#f97316',
  },
  {
    icon: '🌐',
    title: '3D Portfolio Website',
    description: 'This interactive 3D portfolio built with React Three Fiber, featuring a floating island, animated elements, and smooth transitions.',
    tags: ['React', 'Three.js', 'Framer Motion'],
    accentColor: '#ef4444',
  },
  {
    icon: '📊',
    title: 'Data Visualization Dashboard',
    description: 'Interactive analytics dashboard that transforms complex datasets into intuitive charts and graphs for actionable business insights.',
    tags: ['Python', 'Pandas', 'Matplotlib'],
    accentColor: '#f97316',
  },
  {
    icon: '🧠',
    title: 'Sentiment Analyzer',
    description: 'ML-powered tool that analyzes social media text to determine emotional tone and sentiment with over 90% accuracy.',
    tags: ['Python', 'NLTK', 'Scikit-Learn'],
    accentColor: '#ef4444',
  },
  {
    icon: '🔍',
    title: 'Object Detection System',
    description: 'Real-time object detection using YOLO architecture, capable of identifying and tracking multiple objects in video streams.',
    tags: ['Python', 'YOLO', 'OpenCV'],
    accentColor: '#f97316',
  },
];

export default function Projects() {
  return (
    <div className="page">
      <section className="section">
        <div className="section-header fade-in">
          <p className="section-label">My Work</p>
          <h1 className="section-title">Projects</h1>
          <div className="section-line"></div>
          <p className="section-desc">
            A curated selection of projects showcasing my work in AI, machine learning, 
            and creative web development.
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
    </div>
  );
}
