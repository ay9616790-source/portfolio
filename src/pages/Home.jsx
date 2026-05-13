import Scene from '../components/Scene';
import resumePdf from '../components/Resume/resume (5).pdf';


const tags = ['Python', 'TensorFlow', 'Machine Learning', 'React', 'Three.js', 'Deep Learning'];

const scrollTo = (e, id) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

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
          <a href="#projects" onClick={(e) => scrollTo(e, 'projects')} className="btn-primary">
            View Projects →
          </a>
          <a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="btn-secondary">
            Get in Touch
          </a>
          <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            📄 Resume
          </a>
        </div>
      </div>

      <div className="home-3d fade-in fade-in-delay-3">
        <Scene />
      </div>
    </section>
  );
}
