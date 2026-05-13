import SkillsSphere from '../components/SkillsSphere';

export default function About() {
  return (
    <section className="section">
        <div className="section-header fade-in">
          <p className="section-label">Who I Am</p>
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </div>

        <div className="about-grid">
          {/* Left — Bio */}
          <div className="about-text fade-in fade-in-delay-1">
            <p>
              Hey! I'm <strong>Abhishek Kumar</strong>, a <span className="accent">B.Tech student</span> in 
              my <strong>4th Semester</strong> at <span className="accent">Galgotias University</span>, Greater Noida, 
              specializing in <span className="accent">Artificial Intelligence</span>.
            </p>
            <p>
              I'm deeply passionate about building intelligent systems — from training machine learning 
              models to crafting interactive 3D web experiences. I love exploring the intersection 
              of <strong>AI</strong> and <strong>creative development</strong>, turning complex algorithms 
              into beautiful, user-facing products.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new research papers, experimenting with 
              generative AI, or contributing to open-source projects.
            </p>

            {/* Education Card */}
            <div className="edu-card" style={{ marginTop: '28px' }}>
              <h3>🎓 Galgotias University</h3>
              <p>Greater Noida, Uttar Pradesh</p>
              <p className="edu-degree">B.Tech — Specialization in Artificial Intelligence</p>
              <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.82rem', marginTop: '4px' }}>
                Semester 4 • 2024 — 2028
              </p>
            </div>
          </div>

          {/* Right — 3D Skills Sphere */}
          <div className="about-right fade-in fade-in-delay-2">
            <h3 style={{ 
              fontSize: '1.1rem', 
              color: '#f87171', 
              fontWeight: '600', 
              textAlign: 'center',
              marginBottom: '-10px',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}>
              🛠️ Skills & Technologies
            </h3>
            <SkillsSphere />
          </div>
        </div>
    </section>
  );
}
