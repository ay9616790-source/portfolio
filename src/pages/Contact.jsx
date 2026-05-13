import { useState } from 'react';
import resumePdf from '../components/Resume/resume (5).pdf';

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
    desc: 'ay9616790@gmail.com',
    url: 'mailto:ay9616790@gmail.com'
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'df8446b6-bfca-4c23-aec0-25a573470655', // User needs to replace this
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio Contact: Message from ${form.name}`,
          from_name: 'Portfolio Website',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const btnText = {
    idle: 'Send Message →',
    sending: '⏳ Sending...',
    sent: '✅ Sent Successfully!',
    error: '❌ Failed — Try Again',
  };

  return (
    <section className="section">
        <div className="section-header fade-in">
          <p className="section-label">Let's Talk</p>
          <h2 className="section-title">Get In Touch</h2>
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
            <button
              type="submit"
              className="btn-primary contact-submit-btn"
              disabled={status === 'sending'}
              style={{ opacity: status === 'sending' ? 0.7 : 1 }}
            >
              {btnText[status]}
            </button>
          </form>

          {/* Right — Info */}
          <div className="contact-info fade-in fade-in-delay-2">
            <p className="contact-info-text">
              I'm always open to discussing projects, internship opportunities,
              collaboration ideas, or just geeking out about technology. Don't hesitate to reach out!
            </p>
            
            <div style={{ marginBottom: '16px' }}>
              <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ display: 'inline-flex', gap: '8px', alignItems: 'center', padding: '10px 24px' }}>
                📄 Download Resume
              </a>
            </div>

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
  );
}
