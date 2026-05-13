import Navbar from './components/Navbar';
import ScrollDots from './components/ScrollDots';
import ChatBot from './components/ChatBot';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="app-wrapper">
      {/* Background gradient orbs */}
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>

      <Navbar />
      <ScrollDots />

      {/* All sections in a single scrollable page */}
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <footer className="footer">
        <p>{'©'} 2026 <span className="accent">Abhishek Kumar</span>. All rights reserved.</p>
        <p>Built with <span className="accent">React</span> {'&'} <span className="accent">Three.js</span></p>
      </footer>

      {/* AI Chatbot — floats above all content */}
      <ChatBot />
    </div>
  );
}

export default App;

