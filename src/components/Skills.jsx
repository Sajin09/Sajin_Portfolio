import React, { useState, useEffect, useRef } from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Bot, 
  Cpu,
  Sparkles,
  Globe
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { 
  ReactLogo, 
  JavaScriptLogo, 
  ReduxLogo, 
  TailwindLogo, 
  HtmlCssLogo,
  NodeLogo, 
  ExpressLogo, 
  RestApiLogo, 
  JwtLogo, 
  PostmanLogo,
  MongoLogo, 
  FirebaseLogo, 
  SqlLogo,
  GeminiLogo, 
  OpenAiLogo, 
  GitLogo, 
  ViteLogo, 
  VercelLogo, 
  VsCodeLogo 
} from './TechLogos';
import './Skills.css';

const CATEGORIES = [
  { 
    id: 'frontend', 
    label: 'Frontend', 
    tag: 'UI & CLIENT ARCHITECTURE',
    icon: <Code2 size={20} />,
    title: 'FRONTEND DEVELOPMENT',
    description: 'Engineering responsive, high-performance web applications using modern React 19, Redux Toolkit, Context API, and state-of-the-art styling frameworks with pixel-perfect attention to detail.',
    skills: [
      { name: 'React.js & React 19', level: 95, tag: 'Component Architecture & Hooks' },
      { name: 'JavaScript (ES6+) & Modern Web', level: 95, tag: 'Async/Await, DOM, Core JS' },
      { name: 'Redux Toolkit & Context API', level: 90, tag: 'Global State Management' },
      { name: 'Tailwind CSS & Material UI', level: 92, tag: 'Responsive Glassmorphism' },
      { name: 'HTML5 Semantic & Modern CSS3', level: 95, tag: 'Animations, Flex/Grid & SEO' }
    ],
    chips: ['React Router', 'Redux Toolkit', 'Context API', 'Tailwind CSS', 'Material UI', 'Bootstrap', 'Vite', 'Clean UI/UX'],
    orbs: [
      { name: 'React.js', icon: <ReactLogo size={36} />, class: 'radar-orb-1' },
      { name: 'JavaScript', icon: <JavaScriptLogo size={32} />, class: 'radar-orb-2' },
      { name: 'Redux', icon: <ReduxLogo size={32} />, class: 'radar-orb-3' },
      { name: 'Tailwind', icon: <TailwindLogo size={32} />, class: 'radar-orb-4' },
      { name: 'HTML5/CSS', icon: <HtmlCssLogo size={32} />, class: 'radar-orb-5' }
    ]
  },
  { 
    id: 'backend', 
    label: 'Backend & APIs', 
    tag: 'SERVER & REST ARCHITECTURE',
    icon: <Server size={20} />,
    title: 'BACKEND & RESTFUL APIS',
    description: 'Building secure, scalable, and modular backend services with Node.js and Express.js, featuring JWT authentication, role-based access control (RBAC), and high-efficiency business logic.',
    skills: [
      { name: 'Node.js Runtime', level: 92, tag: 'Event-Driven Architecture' },
      { name: 'Express.js Framework', level: 90, tag: 'Middleware, Routing & Controllers' },
      { name: 'RESTful API Architecture', level: 95, tag: 'Clean CRUD & HTTP Standards' },
      { name: 'JWT & RBAC Security', level: 92, tag: 'Role-Based Authentication' },
      { name: 'MVC Design Patterns', level: 88, tag: 'Maintainable Code Structure' }
    ],
    chips: ['Express.js', 'JWT Auth', 'RBAC Security', 'Middleware', 'MVC Pattern', 'REST APIs', 'Postman Testing', 'Error Handlers'],
    orbs: [
      { name: 'Node.js', icon: <NodeLogo size={36} />, class: 'radar-orb-1' },
      { name: 'Express.js', icon: <ExpressLogo size={32} />, class: 'radar-orb-2' },
      { name: 'REST APIs', icon: <RestApiLogo size={32} />, class: 'radar-orb-3' },
      { name: 'JWT Auth', icon: <JwtLogo size={32} />, class: 'radar-orb-4' },
      { name: 'Postman', icon: <PostmanLogo size={32} />, class: 'radar-orb-5' }
    ]
  },
  { 
    id: 'database', 
    label: 'Database & Cloud', 
    tag: 'PERSISTENCE & CLOUD SERVICES',
    icon: <Database size={20} />,
    title: 'DATABASE & CLOUD ECOSYSTEM',
    description: 'Designing optimized database schemas, indexing queries for sub-millisecond execution, and integrating realtime cloud databases with Firebase and MongoDB Mongoose ODM.',
    skills: [
      { name: 'MongoDB & Mongoose ODM', level: 92, tag: 'Document Schemas & Aggregation' },
      { name: 'Firebase Cloud Firestore', level: 90, tag: 'Realtime Cloud NoSQL' },
      { name: 'Firebase Realtime Database', level: 85, tag: 'Live Data Synchronization' },
      { name: 'SQL & Relational Schemas', level: 82, tag: 'Queries, Foreign Keys & Tables' },
      { name: 'Firebase Auth & Cloud Storage', level: 90, tag: 'BaaS File & Identity Management' }
    ],
    chips: ['MongoDB Atlas', 'Mongoose ODM', 'Firebase Firestore', 'Firebase Realtime DB', 'Cloud Functions', 'Storage', 'SQL Schemas'],
    orbs: [
      { name: 'MongoDB', icon: <MongoLogo size={36} />, class: 'radar-orb-1' },
      { name: 'Firebase', icon: <FirebaseLogo size={32} />, class: 'radar-orb-2' },
      { name: 'Firestore', icon: <Database size={32} color="#FFA611" />, class: 'radar-orb-3' },
      { name: 'SQL DB', icon: <SqlLogo size={32} />, class: 'radar-orb-4' },
      { name: 'Cloud BaaS', icon: <Globe size={32} className="theme-primary-svg" />, class: 'radar-orb-5' }
    ]
  },
  { 
    id: 'ai', 
    label: 'AI Integration', 
    tag: 'NEXT-GEN AUTOMATION & LLMS',
    icon: <Bot size={20} />,
    title: 'AI INTEGRATION & AUTOMATION',
    description: 'Leveraging cutting-edge OpenAI and Google Gemini APIs with tuned prompt engineering to build intelligent customer chatbots, automated business pipelines, and workflow assistants.',
    skills: [
      { name: 'OpenAI API Integration', level: 90, tag: 'GPT-4o, Embeddings & Completion' },
      { name: 'Google Gemini API', level: 88, tag: 'Multimodal AI & Reasoning' },
      { name: 'Prompt Engineering', level: 92, tag: 'System Tuning & Output Structuring' },
      { name: 'AI Chatbots & Automation', level: 88, tag: 'Business Workflow Pipelines' }
    ],
    chips: ['OpenAI API', 'Gemini API', 'Prompt Engineering', 'AI Chatbots', 'Workflow Automation', 'Context Chaining', 'LLM Pipelines'],
    orbs: [
      { name: 'Gemini AI', icon: <GeminiLogo size={36} />, class: 'radar-orb-1' },
      { name: 'OpenAI', icon: <OpenAiLogo size={32} />, class: 'radar-orb-2' },
      { name: 'Prompts', icon: <Sparkles size={32} className="theme-primary-svg" />, class: 'radar-orb-3' },
      { name: 'AI Bots', icon: <Bot size={32} color="#38bdf8" />, class: 'radar-orb-4' },
      { name: 'Pipelines', icon: <Cpu size={32} color="#a855f7" />, class: 'radar-orb-5' }
    ]
  },
  { 
    id: 'tools', 
    label: 'Tools & DevOps', 
    tag: 'DEPLOYMENT & WORKFLOW',
    icon: <Cpu size={20} />,
    title: 'DEVELOPER TOOLS & PRACTICES',
    description: 'Utilizing modern version control, automated build systems, API debugging suites, and cloud hosting platforms to ensure rapid development cycles and zero-downtime deployments.',
    skills: [
      { name: 'Git & GitHub Collaboration', level: 95, tag: 'Branching, PRs & Version Control' },
      { name: 'Postman Suite', level: 92, tag: 'API Documentation & Testing' },
      { name: 'Vite & Build Tooling', level: 90, tag: 'Fast HMR & Optimized Bundles' },
      { name: 'Vercel & Netlify Deployment', level: 92, tag: 'Cloud Hosting & CI/CD' },
      { name: 'Chrome DevTools & Debugging', level: 95, tag: 'Performance & Network Audits' }
    ],
    chips: ['Git', 'GitHub', 'Postman', 'Vite', 'npm', 'Vercel', 'Netlify', 'VS Code', 'Chrome DevTools', 'Agile / Scrum'],
    orbs: [
      { name: 'Git', icon: <GitLogo size={36} />, class: 'radar-orb-1' },
      { name: 'GitHub', icon: <GithubIcon size={32} />, class: 'radar-orb-2' },
      { name: 'Vite', icon: <ViteLogo size={32} />, class: 'radar-orb-3' },
      { name: 'Vercel', icon: <VercelLogo size={28} />, class: 'radar-orb-4' },
      { name: 'VS Code', icon: <VsCodeLogo size={32} />, class: 'radar-orb-5' }
    ]
  }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');
  const timerRef = useRef(null);

  // Seamless Infinite Loop Auto-Cycle every 3 seconds
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveTab(prev => {
        const idx = CATEGORIES.findIndex(c => c.id === prev);
        const nextIdx = (idx + 1) % CATEGORIES.length;
        return CATEGORIES[nextIdx].id;
      });
    }, 3000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleTabClick = (catId) => {
    setActiveTab(catId);
    // Reset timer to continue loop seamlessly from clicked tab
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveTab(prev => {
        const idx = CATEGORIES.findIndex(c => c.id === prev);
        const nextIdx = (idx + 1) % CATEGORIES.length;
        return CATEGORIES[nextIdx].id;
      });
    }, 3000);
  };

  const currentCategory = CATEGORIES.find(c => c.id === activeTab) || CATEGORIES[0];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        
        {/* Section Header */}
        <div className="skills-header scroll-reveal section-header-row">
          <div className="section-header-left">
            <span className="skills-script-tag">Mastered Arsenal</span>
            <h2 className="skills-headline">
              <span className="skills-title-white">TECHNICAL</span>
              <span className="skills-title-red">SKILLS & EXPERTISE</span>
            </h2>
            <div className="skills-title-line"></div>
            <p className="skills-header-desc">
              3+ years of production-tested proficiency across the full MERN stack, cloud databases, and AI workflows.
            </p>
          </div>

          {/* Right Header Widget: 02 Watermark & Rotating Badge */}
          <div className="section-header-right">
            <div className="section-watermark-num">02</div>
            <div className="section-rotating-badge">
              <svg className="badge-circular-svg" viewBox="0 0 100 100">
                <path
                  id="circlePathSkills"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="circular-badge-text">
                  <textPath href="#circlePathSkills" startOffset="0%">
                    • CORE SKILLS • TECH ARSENAL • MERN STACK
                  </textPath>
                </text>
              </svg>
              <div className="badge-center-icon">
                <Cpu size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Ambient Red Glow Behind Deck */}
        <div className="skills-ambient-glow"></div>

        {/* Main Full-Screen Cyber Console */}
        <div className="skills-cyber-console scroll-reveal delay-2">
          
          {/* Left: Floating Capsule Dock Navigation */}
          <div className="skills-capsule-dock">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`capsule-dock-btn ${activeTab === cat.id ? 'active' : ''}`}
                onClick={() => handleTabClick(cat.id)}
                aria-label={cat.label}
              >
                <div className="dock-icon-wrap">
                  {cat.icon}
                </div>
                <span className="dock-tooltip">{cat.label}</span>
                {activeTab === cat.id && <span className="dock-active-glow"></span>}
              </button>
            ))}
          </div>

          {/* Center: Concentric Orbital Radar System with Siri AI Orb & Orbiting Logos */}
          <div className="skills-orbital-stage">
            <div className="orbital-system-container">
              
              {/* Concentric Cosmic Radar Rings */}
              <div className="orbital-ring ring-outer"></div>
              <div className="orbital-ring ring-middle"></div>
              <div className="orbital-ring ring-inner"></div>

              {/* Glowing Ambient Radial Core */}
              <div className="orbital-core-glow"></div>

              {/* Center Siri-Style AI Glowing Fluid Energy Orb (Crimson Red Theme) */}
              <div className="siri-ai-orb-container">
                {/* Outer Swirling Electric Light Ribbons */}
                <div className="siri-electric-ring siri-ring-1"></div>
                <div className="siri-electric-ring siri-ring-2"></div>
                <div className="siri-electric-ring siri-ring-3"></div>

                {/* Siri Core Morphing Fluid Sphere */}
                <div className="siri-fluid-sphere">
                  <div className="siri-plasma-layer layer-crimson"></div>
                  <div className="siri-plasma-layer layer-fire"></div>
                  <div className="siri-plasma-layer layer-neon"></div>
                  <div className="siri-inner-highlight"></div>
                </div>

                {/* Ambient Glowing Aura */}
                <div className="siri-glow-aura"></div>
              </div>

              {/* Dynamic Tech Logo Orbs Orbiting on Concentric Rings */}
              {currentCategory.orbs.map((orb, oIdx) => (
                <div key={`${activeTab}-${oIdx}`} className={`orbital-tech-node ${orb.class}`}>
                  <div className="tech-node-circle">
                    <span className="node-icon-inner">{orb.icon}</span>
                    <span className="tech-node-status-dot"></span>
                  </div>
                  <span className="tech-node-label">{orb.name}</span>
                </div>
              ))}

            </div>
          </div>

          {/* Right: Detailed Capability Console with Progress Bars */}
          <div className="skills-detail-console">
            
            {/* Category Sub-Header */}
            <div className="console-top-meta">
              <span className="console-tag-badge">
                <Sparkles size={13} />
                <span>{currentCategory.tag}</span>
              </span>
              <div className="console-indicator">
                <span className="console-pulse"></span>
                <span>LIVE PROFICIENCY</span>
              </div>
            </div>

            <h3 className="console-title">{currentCategory.title}</h3>
            <p className="console-description">{currentCategory.description}</p>

            {/* Interactive Animated Skill Meters */}
            <div className="skills-progress-list">
              {currentCategory.skills.map((skill, sIdx) => (
                <div key={`${activeTab}-${sIdx}`} className="skill-meter-item">
                  <div className="skill-meter-header">
                    <div className="meter-name-group">
                      <span className="meter-bullet">✦</span>
                      <span className="meter-skill-name">{skill.name}</span>
                      <span className="meter-skill-tag">({skill.tag})</span>
                    </div>
                    <span className="meter-percentage">{skill.level}%</span>
                  </div>

                  <div className="meter-track">
                    <div 
                      className="meter-fill"
                      style={{ width: `${skill.level}%` }}
                    >
                      <span className="meter-tip-glow"></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Specialized Skill Badges Cloud */}
            <div className="skills-chips-section">
              <span className="chips-label">CORE LIBRARIES & TOOLS:</span>
              <div className="chips-wrap">
                {currentCategory.chips.map((chip, cIdx) => (
                  <span key={cIdx} className="console-skill-chip">
                    {chip}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
