import { useState, useRef, useEffect } from 'react';
import resumePdf from './Resume/resume (5).pdf';

/* ─────────────────────────────────────────────
   KNOWLEDGE BASE — everything about Abhishek
───────────────────────────────────────────── */
const KB = {
  name: 'Abhishek Kumar',
  phone: '+91-8447942120',
  role: 'Full-Stack Developer & CS Undergraduate',
  university: 'Galgotias University, Greater Noida, India',
  degree: 'B.Tech in Computer Science & Engineering',
  cgpa: '7.9/10.0',
  semester: '4th Semester (2024 – 2028)',
  location: 'Greater Noida, Uttar Pradesh, India',
  email: 'ay9616790@gmail.com',
  github: 'https://github.com/ay9616790-source',
  linkedin: 'https://www.linkedin.com/in/abhishek-kumar-462095369',
  leetcode: 'LeetCode Profile',
  resumeLink: resumePdf,
  objective: 'Detail-oriented Computer Science undergraduate (graduating 2028) with hands-on experience in full-stack web development, desktop application engineering, and database management. Proficient in Java, JavaScript, React.js, and SQL, with practical knowledge of REST API design and service-oriented architectures. Passionate about building scalable, user-centric software solutions and continuously improving through competitive programming.',
  education: [
    { institution: 'Galgotias University', location: 'Greater Noida, India', degree: 'B.Tech in Computer Science & Engineering', detail: 'CGPA: 7.9/10.0', duration: '2024 – Present' },
    { institution: 'Senior Secondary (XII)', location: 'India', degree: 'Haryana Board of School Education (HBSE)', detail: 'Percentage: 73%', duration: '2023 – 2024' },
    { institution: 'Secondary (X)', location: 'India', degree: 'Haryana Board of School Education (HBSE)', detail: 'Percentage: 74%', duration: '2022 – 2023' },
  ],
  skills: {
    languages: ['Java', 'C/C++', 'JavaScript', 'Python', 'HTML5', 'CSS3', 'SQL'],
    frameworks: ['React.js', 'Redux', 'Node.js', 'Express.js', 'Three.js', 'JavaFX'],
    tools: ['Git', 'GitHub', 'Maven', 'Docker', 'VS Code', 'IntelliJ IDEA'],
    databases: ['MySQL', 'H2', 'MongoDB'],
    concepts: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Design Patterns', 'MVC Architecture', 'REST APIs', 'Agile Methodology'],
  },
  projects: [
    {
      title: 'Project Management Time Tracker',
      description: 'A desktop application with role-based access control supporting 3 user roles (Admin, PM, Team Member) for task assignment, time logging, and progress monitoring. Implemented DAO and service layers following the MVC pattern, with an embedded H2 database handling 10+ CRUD operations and real-time data visualization charts.',
      tech: ['Java', 'JavaFX 21', 'Maven', 'H2 Database', 'FXML'],
    },
    {
      title: '3D Portfolio Website',
      description: 'A responsive 3D portfolio website using React.js and Three.js, rendering WebGL scenes with smooth animations and glassmorphism UI components. Integrated a contact form and social media APIs, achieving optimized page load times under 3 seconds across devices.',
      tech: ['React.js', 'Three.js', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
      title: 'Voice Command Calculator',
      description: 'A voice-activated calculator leveraging the Web Speech API, enabling hands-free arithmetic operations through natural language processing.',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'Web Speech API'],
    },
  ],
  achievements: [
    'LeetCode: Solved 100+ problems',
    'GeeksforGeeks: Institute Rank 2,195 | Coding Score: 113',
  ],
  certifications: [
    'React and Redux – KnowledgeGate (Score: 98%, Issued: May 2026)',
    'CSS (Basic) – HackerRank (Skill Certification, Issued: May 2026)',
    'Frontend Developer (React) – HackerRank (Role Certification, Issued: May 2026)',
  ],
  interests: [
    'Full-Stack Web Development', 'Desktop Application Engineering',
    '3D Web Experiences', 'Competitive Programming',
    'Open-Source Projects', 'REST API Design',
  ],
};

/* ─────────────────────────────────────────────
   INTENT → RESPONSE ENGINE
───────────────────────────────────────────── */
function getResponse(input) {
  const q = input.toLowerCase().trim();

  // Greetings
  if (/^(hi|hello|hey|yo|sup|what'?s up|howdy|greetings)/i.test(q)) {
    return `Hey there! 👋 I'm **Abhishek's AI assistant**. I can tell you anything about him — his education, skills, projects, resume, or how to contact him. What would you like to know?`;
  }

  // Who are you (bot identity)
  if (/who are you|what are you|your name|are you (a |an )?(ai|bot|robot|assistant)/i.test(q)) {
    return `I'm an AI assistant built into **Abhishek Kumar's portfolio**. I know everything about him — ask me anything! 🤖`;
  }

  // Name
  if (/\b(name|who is|who's abhishek|introduce|yourself)\b/i.test(q) && !/project|skill|contact|resume/i.test(q)) {
    return `His name is **Abhishek Kumar** — a detail-oriented **B.Tech student in Computer Science & Engineering** at Galgotias University. He's passionate about full-stack web development, desktop applications, and competitive programming. 🚀`;
  }

  // Education / university / CGPA
  if (/\b(educat|study|student|college|university|galgotias|degree|b\.?tech|semester|course|major|specializ|cgpa|gpa|marks|percentage|school|12th|10th|12|10|board|hbse|haryana|secondary|senior secondary|class|xii|xi|diploma)/i.test(q) || /\d+\s*%/.test(q)) {
    const eduList = KB.education.map(e => `**${e.institution}** — ${e.location}\n${e.degree} | ${e.detail} | ${e.duration}`).join('\n\n');
    return `📚 **Education**\n\n${eduList}`;
  }

  // Location
  if (/\b(locat|where|city|state|india|noida|based|live|from)\b/i.test(q)) {
    return `📍 Abhishek is based in **Greater Noida, Uttar Pradesh, India**. He's originally from Haryana.`;
  }

  // Skills
  if (/\b(skill|tech|stack|know|language|framework|tool|expert|proficien|capabilit)/i.test(q)) {
    return `🛠️ **Abhishek's Technical Skills**\n\n**💻 Languages:** ${KB.skills.languages.join(', ')}\n\n**🌐 Frameworks & Libraries:** ${KB.skills.frameworks.join(', ')}\n\n**🔧 Developer Tools:** ${KB.skills.tools.join(', ')}\n\n**🗄️ Databases:** ${KB.skills.databases.join(', ')}\n\n**📐 Core Concepts:** ${KB.skills.concepts.join(', ')}`;
  }

  // Java specific
  if (/\bjava\b/i.test(q) && !/javascript/i.test(q)) {
    return `Yes! Java is one of Abhishek's **strongest languages**. He's built a full **Project Management Time Tracker** desktop app using Java, JavaFX 21, and Maven with MVC architecture and H2 database. ☕`;
  }

  // Python specific
  if (/\bpython\b/i.test(q)) {
    return `Yes! Abhishek knows **Python** and uses it as one of his core programming languages. 🐍`;
  }

  // React / web dev
  if (/\b(react|web dev|frontend|javascript|three\.?js|vite|node|redux|express)\b/i.test(q)) {
    return `Abhishek is strong in **full-stack web development**:\n\n- **Frontend:** React.js, Redux, Three.js, HTML5, CSS3\n- **Backend:** Node.js, Express.js\n- **Tools:** Vite, Git, Docker\n\nThis very portfolio is built with **React + Three.js** with WebGL 3D scenes and glassmorphism UI! 🌐`;
  }

  // DSA / competitive programming / leetcode / gfg
  if (/\b(dsa|data structure|algorithm|leetcode|leet code|geeksforgeeks|gfg|competitive|coding score|problem|solved)/i.test(q)) {
    return `💡 **Competitive Programming**\n\n- **LeetCode:** Solved **100+ problems**\n- **GeeksforGeeks:** Institute Rank **2,195** | Coding Score: **113**\n\nAbhishek is strong in **Data Structures & Algorithms**, OOP, and Design Patterns. He actively practices competitive programming to sharpen his problem-solving skills! 🏆`;
  }

  // Projects (all)
  if (/\b(project|work|build|creat|develop|built|made)/i.test(q) && !/contact|reach|email/i.test(q)) {
    const list = KB.projects.map((p, i) =>
      `**${i + 1}. ${p.title}** — ${p.description}\n   🏷️ ${p.tech.join(' · ')}`
    ).join('\n\n');
    return `🚀 **Abhishek's Projects**\n\n${list}\n\nAsk me about any specific project for more details!`;
  }

  // Specific project lookups
  if (/time tracker|project manage|task|desktop app|javafx/i.test(q)) {
    const p = KB.projects[0];
    return `⏱️ **${p.title}**\n\n${p.description}\n\n🏷️ Tech: ${p.tech.join(', ')}`;
  }
  if (/3d portfolio|portfolio website|this site|this portfolio/i.test(q)) {
    const p = KB.projects[1];
    return `🌐 **${p.title}**\n\n${p.description}\n\n🏷️ Tech: ${p.tech.join(', ')}`;
  }
  if (/voice|calculator|speech/i.test(q)) {
    const p = KB.projects[2];
    return `🎙️ **${p.title}**\n\n${p.description}\n\n🏷️ Tech: ${p.tech.join(', ')}`;
  }

  // Resume
  if (/\b(resume|cv|curriculum|download resume|view resume|show resume|send resume)/i.test(q)) {
    return `📄 **Abhishek's Resume**\n\nHere's a quick summary:\n\n🎯 **Summary:** ${KB.objective}\n\n🎓 **Education:** ${KB.degree} — ${KB.university} (CGPA: ${KB.cgpa})\n\n🛠️ **Key Skills:** Java, JavaScript, React.js, Node.js, SQL, Three.js, Docker\n\n🏆 **Achievements:**\n${KB.achievements.map(a => `- ${a}`).join('\n')}\n\n📜 **Certifications:**\n${KB.certifications.map(c => `- ${c}`).join('\n')}\n\n👉 **[Click here to download the full resume](${KB.resumeLink})**`;
  }

  // Certifications
  if (/\b(certif|course|hackerrank|credential|training|knowledgegate)/i.test(q)) {
    return `📜 **Certifications**\n\n${KB.certifications.map((c, i) => `${i + 1}. ${c}`).join('\n')}\n\nThese certifications demonstrate Abhishek's expertise in React, Redux, CSS, and frontend development! 🎯`;
  }

  // Achievements
  if (/\b(achieve|accomplish|award|recognition|highlight)/i.test(q)) {
    return `🏆 **Achievements & Highlights**\n\n${KB.achievements.map(a => `- ${a}`).join('\n')}\n\nAbhishek is constantly pushing boundaries through competitive programming and building impactful projects! 💪`;
  }

  // Objective / goal / summary
  if (/\b(objective|goal|aim|aspir|career goal|summary|about him|tell me about)\b/i.test(q)) {
    return `🎯 **Professional Summary**\n\n${KB.objective}\n\nHe's currently in his **${KB.semester}** at **${KB.university}**, actively seeking internship opportunities in full-stack development. 🚀`;
  }

  // Contact
  if (/\b(contact|reach|email|mail|message|hire|connect|available|opportunit|internship|collaborat|talk|phone|number)/i.test(q)) {
    return `📬 **Contact Abhishek**\n\n📞 **Phone:** ${KB.phone}\n📧 **Email:** ${KB.email}\n🐙 **GitHub:** [ay9616790-source](${KB.github})\n💼 **LinkedIn:** [Abhishek Kumar](${KB.linkedin})\n\n📄 **[Download Resume](${KB.resumeLink})**\n\nHe's open to **internship opportunities**, project collaborations, and full-stack development roles! 🙌`;
  }

  // GitHub
  if (/\b(github|git hub|repo|code|open.?source)\b/i.test(q)) {
    return `🐙 **GitHub:** [github.com/ay9616790-source](${KB.github})\n\nYou can explore Abhishek's repositories and project code there!`;
  }

  // LinkedIn
  if (/\blinkedin\b/i.test(q)) {
    return `💼 **LinkedIn:** [Abhishek Kumar](${KB.linkedin})\n\nConnect with him professionally — he's open to networking and new opportunities!`;
  }

  // Interests / hobbies
  if (/\b(interest|hobby|passion|like|love|enjoy|free time|spare time|outside coding)/i.test(q)) {
    return `❤️ **Abhishek's Interests**\n\n- 🌐 Full-Stack Web Development\n- 🖥️ Desktop Application Engineering\n- 🎮 3D Web Experiences with Three.js\n- 💡 Competitive Programming (LeetCode, GFG)\n- 🔓 Contributing to open-source projects\n- 🔌 REST API Design & Architecture`;
  }

  // Experience / internship
  if (/\b(experience|intern|job|work experience|professional)\b/i.test(q)) {
    return `Abhishek is currently a **${KB.semester}** student actively looking for **internship opportunities** in full-stack web development and software engineering. He has hands-on project experience building desktop apps (Java/JavaFX), 3D web apps (React/Three.js), and voice-enabled applications. 💼\n\nFeel free to reach out at **${KB.email}** or call **${KB.phone}**!`;
  }

  // Age / year
  if (/\b(age|old|birth|year|how old)\b/i.test(q)) {
    return `Abhishek is a **4th semester B.Tech student** (2024–2028), so he's in his early 20s. 🎓`;
  }

  // Database
  if (/\b(database|mysql|mongodb|h2|sql)\b/i.test(q)) {
    return `🗄️ **Database Skills**\n\nAbhishek works with:\n- **MySQL** — Relational database management\n- **MongoDB** — NoSQL document database\n- **H2** — Embedded database (used in his Time Tracker project)\n- **SQL** — Querying and data management`;
  }

  // Thanks
  if (/\b(thank|thanks|thx|ty|awesome|great|cool|nice|good|perfect|amazing)\b/i.test(q)) {
    return `You're welcome! 😊 Feel free to ask me anything else about Abhishek. If you'd like to connect with him directly, just ask for his contact info!`;
  }

  // Goodbye
  if (/\b(bye|goodbye|cya|see ya|later|quit|exit|close)\b/i.test(q)) {
    return `Goodbye! 👋 Don't hesitate to come back if you have more questions about Abhishek. Have a great day!`;
  }

  // Fallback
  return `Hmm, I'm not sure about that specific question. Here's what I can tell you about Abhishek:\n\n- 🎓 **Education** — B.Tech CS&E @ Galgotias University (CGPA: 7.9)\n- 🛠️ **Skills** — Java, React.js, Node.js, Three.js, SQL, Docker\n- 🚀 **Projects** — Time Tracker, 3D Portfolio, Voice Calculator\n- 📄 **Resume** — Ask me to show it!\n- 📬 **Contact** — ${KB.email}\n\nTry asking: *"What are his skills?"* or *"Show me his resume"* or *"Tell me about his projects"*`;
}

/* ─────────────────────────────────────────────
   RENDER MARKDOWN-LIKE TEXT
───────────────────────────────────────────── */
function RenderMessage({ text }) {
  const lines = text.split('\n');
  return (
    <div className="chat-message-content">
      {lines.map((line, i) => {
        if (!line.trim()) return <br key={i} />;

        // Render inline bold and links
        const parts = line.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
        const rendered = parts.map((part, j) => {
          if (/^\*\*[^*]+\*\*$/.test(part)) {
            return <strong key={j}>{part.slice(2, -2)}</strong>;
          }
          const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
          if (linkMatch) {
            return <a key={j} href={linkMatch[2]} target="_blank" rel="noopener noreferrer" className="chat-link">{linkMatch[1]}</a>;
          }
          return <span key={j}>{part}</span>;
        });

        // Bullet points
        if (line.startsWith('- ')) {
          return <div key={i} className="chat-bullet">• {rendered.slice(1)}</div>;
        }
        return <div key={i} className="chat-line">{rendered}</div>;
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────
   SUGGESTED QUESTIONS
───────────────────────────────────────────── */
const SUGGESTIONS = [
  'Who is Abhishek?',
  'What are his skills?',
  'Show me his projects',
  'Show me his resume',
  'What are his certifications?',
  'How can I contact him?',
];

/* ─────────────────────────────────────────────
   MAIN CHATBOT COMPONENT
───────────────────────────────────────────── */
export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: 'bot',
      text: `Hi! 👋 I'm Abhishek's **AI assistant**. Ask me anything about him — his education, skills, projects, or contact info!`,
    },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open, messages]);

  const sendMessage = (text) => {
    const userText = (text || input).trim();
    if (!userText) return;

    setShowSuggestions(false);
    setInput('');
    const newId = Date.now();
    setMessages(prev => [...prev, { id: newId, from: 'user', text: userText }]);

    setTyping(true);
    const delay = 600 + Math.random() * 600;
    setTimeout(() => {
      const reply = getResponse(userText);
      setMessages(prev => [...prev, { id: newId + 1, from: 'bot', text: reply }]);
      setTyping(false);
    }, delay);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* ── Floating Action Button ── */}
      <button
        id="chatbot-toggle"
        className={`chatbot-fab ${open ? 'chatbot-fab--open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Open AI Chat"
      >
        <span className="chatbot-fab-icon">{open ? '✕' : '🤖'}</span>
        {!open && <span className="chatbot-fab-ping" />}
      </button>

      {/* ── Chat Panel ── */}
      <div className={`chatbot-panel ${open ? 'chatbot-panel--open' : ''}`} id="chatbot-panel">
        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-header-avatar">🤖</div>
          <div className="chatbot-header-info">
            <p className="chatbot-header-name">Abhishek's AI Assistant</p>
            <p className="chatbot-header-status">
              <span className="chatbot-online-dot" />
              Always online
            </p>
          </div>
          <button
            className="chatbot-close-btn"
            onClick={() => setOpen(false)}
            aria-label="Close chat"
          >✕</button>
        </div>

        {/* Messages */}
        <div className="chatbot-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`chatbot-msg chatbot-msg--${msg.from}`}>
              {msg.from === 'bot' && (
                <div className="chatbot-avatar">🤖</div>
              )}
              <div className="chatbot-bubble">
                <RenderMessage text={msg.text} />
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {typing && (
            <div className="chatbot-msg chatbot-msg--bot">
              <div className="chatbot-avatar">🤖</div>
              <div className="chatbot-bubble chatbot-typing">
                <span /><span /><span />
              </div>
            </div>
          )}

          {/* Suggestions */}
          {showSuggestions && (
            <div className="chatbot-suggestions">
              <p className="chatbot-suggestions-label">Quick questions:</p>
              {SUGGESTIONS.map(s => (
                <button
                  key={s}
                  className="chatbot-suggestion-btn"
                  onClick={() => sendMessage(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="chatbot-input-bar">
          <input
            ref={inputRef}
            id="chatbot-input"
            className="chatbot-input"
            type="text"
            placeholder="Ask about Abhishek..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
          />
          <button
            id="chatbot-send"
            className="chatbot-send-btn"
            onClick={() => sendMessage()}
            disabled={!input.trim() || typing}
            aria-label="Send"
          >
            ➤
          </button>
        </div>
      </div>
    </>
  );
}
