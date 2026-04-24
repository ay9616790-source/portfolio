import React from 'react';
import { Link } from 'react-router-dom';
import Scene from '../components/Scene';

const tags = ['Python', 'TensorFlow', 'Machine Learning', 'React', 'Three.js', 'Deep Learning'];

export default function Home() {
  return (
    <section className="home-section">
      <div className="home-content">
        <div className="home-badge fade-in">
          🎓 B.Tech in AI — Galgotias University
        </div>

        <h1 className="home-title fade-in fade-in-delay-1">
          Hi, I'm{' '}
          <span className="highlight">Abhishek Kumar</span>
          <span style={{ display: 'inline-block', animation: 'wave 1.5s infinite', marginLeft: '12px' }}>👋</span>
        </h1>

        <p className="home-subtitle fade-in fade-in-delay-2">
          Aspiring AI Engineer & Creative Developer building intelligent systems 
          and immersive web experiences. Currently in Semester 4, specializing in 
          Artificial Intelligence.
        </p>

        <div className="home-tags fade-in fade-in-delay-3">
          {tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <div className="home-cta fade-in fade-in-delay-4">
          <Link to="/projects" className="btn-primary">
            View Projects →
          </Link>
          <Link to="/contact" className="btn-secondary">
            Get in Touch
          </Link>
        </div>
      </div>

      <div className="home-3d fade-in fade-in-delay-3">
        <Scene />
      </div>
    </section>
  );
}
