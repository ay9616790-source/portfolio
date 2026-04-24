import React, { useState } from 'react';

const socials = [
  {
    icon: '🐙',
    name: 'GitHub',
    desc: 'Check out my code & open-source work',
    url: 'https://github.com/ay9616790-source'
  },
  {
    icon: '💼',
    name: 'LinkedIn',
    desc: 'Connect with me professionally',
    url: 'https://www.linkedin.com/in/abhishek-kumar-462095369'
  },
  {
    icon: '📧',
    name: 'Email',
    desc: 'ay961690@gmail.com',
    url: 'mailto:ay961690@gmail.com'
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="page">
      <section className="section">
        <div className="section-header fade-in">
          <p className="section-label">Let's Talk</p>
          <h1 className="section-title">Get In Touch</h1>
          <div className="section-line"></div>
        </div>

        <div className="contact-grid">
          {/* Left — Form */}
          <form className="contact-form fade-in fade-in-delay-1" onSubmit={handleSubmit}>
            <input
              className="form-input"
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              className="form-textarea"
              name="message"
              placeholder="Your Message..."
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
              {sent ? '✅ Sent Successfully!' : 'Send Message →'}
            </button>
          </form>

          {/* Right — Info */}
          <div className="contact-info fade-in fade-in-delay-2">
            <p className="contact-info-text">
              I'm always open to discussing AI projects, internship opportunities,
              collaboration ideas, or just geeking out about technology. Don't hesitate to reach out!
            </p>

            {socials.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="social-link">
                <div className="social-icon">{s.icon}</div>
                <div className="social-link-text">
                  <h4>{s.name}</h4>
                  <p>{s.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
