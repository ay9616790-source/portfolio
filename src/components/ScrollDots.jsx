import { useState, useEffect } from 'react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function ScrollDots() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="scroll-dots" aria-label="Section navigation">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          className={`scroll-dot ${activeSection === id ? 'active' : ''}`}
          onClick={() => scrollTo(id)}
          aria-label={`Scroll to ${label}`}
          title={label}
        >
          <span className="scroll-dot-tooltip">{label}</span>
        </button>
      ))}
    </nav>
  );
}
