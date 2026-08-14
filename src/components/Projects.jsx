import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  Sparkles, 
  Terminal, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpRight,
  CheckCircle2,
  X,
  Layers,
  Bot,
  Building2,
  Activity,
  Lock,
  Code2
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { 
  ReactLogo, 
  NodeLogo, 
  MongoLogo, 
  FirebaseLogo, 
  OpenAiLogo, 
  GeminiLogo, 
  TailwindLogo, 
  ViteLogo 
} from './TechLogos';
import './Projects.css';

const PROJECTS = [
  {
    id: 1,
    number: '01',
    title: 'BUSINESS MANAGEMENT SYSTEM',
    tag: 'ENTERPRISE MERN STACK',
    category: 'fullstack',
    icon: <Layers size={22} />,
    iconColor: 'var(--primary)',
    description: 'Production-ready enterprise billing & inventory management platform featuring secure RESTful APIs, JWT authentication with Role-Based Access Control (RBAC), automated GST invoicing, dynamic analytics dashboards, and real-time inventory tracking.',
    highlights: [
      'JWT & Role-Based Access Control (RBAC) Security Architecture',
      'Automated GST Invoicing & PDF Generation Engine',
      'MongoDB Mongoose Optimized Data Aggregation Pipelines',
      'Interactive Revenue Dashboards & Real-Time Stock Telemetry'
    ],
    metrics: [
      { label: 'Architecture', val: 'Full MERN Stack' },
      { label: 'Security', val: 'JWT / RBAC Protected' },
      { label: 'Database', val: 'MongoDB Atlas' }
    ],
    techIcons: [
      { name: 'React 19', icon: <ReactLogo size={20} /> },
      { name: 'Node.js', icon: <NodeLogo size={20} /> },
      { name: 'MongoDB', icon: <MongoLogo size={20} /> },
      { name: 'Tailwind CSS', icon: <TailwindLogo size={20} /> }
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'JWT Auth', 'RESTful APIs', 'GST Billing'],
    liveUrl: 'https://github.com/Sajin09',
    githubUrl: 'https://github.com/Sajin09',
    inspectUrl: 'https://github.com/Sajin09',
    codeSnippet: `// REST API Route Protection & RBAC
router.post('/api/invoices/generate', 
  authMiddleware.verifyToken,
  rbacMiddleware.requireRole(['ADMIN', 'MANAGER']),
  invoiceController.createGSTInvoice
);`
  },
  {
    id: 2,
    number: '02',
    title: 'AI BUSINESS AUTOMATION ASSISTANT',
    tag: 'NEXT-GEN AI & AUTOMATION',
    category: 'ai',
    icon: <Bot size={22} />,
    iconColor: 'var(--primary)',
    description: 'Intelligent conversational AI system integrating OpenAI GPT-4 and Google Gemini APIs with customized prompt chaining to automate lead qualification, customer inquiries, and smart workflow automation with sub-second response streaming.',
    highlights: [
      'Dual Integration with OpenAI GPT-4 & Google Gemini Multimodal APIs',
      'Context-Aware Prompt Engineering & Guardrail Sanitization',
      'Real-Time Server-Sent Events (SSE) AI Response Streaming',
      'Automated Lead Capture & CRM Sync Pipeline'
    ],
    metrics: [
      { name: 'OpenAI GPT', icon: <OpenAiLogo size={20} /> },
      { name: 'Node.js', icon: <NodeLogo size={20} /> },
      { name: 'React.js', icon: <ReactLogo size={20} /> }
    ],
    tags: ['Node.js', 'React.js', 'OpenAI API', 'Gemini API', 'Express.js', 'Prompt Engineering', 'LLM Automation'],
    liveUrl: 'https://github.com/Sajin09',
    githubUrl: 'https://github.com/Sajin09',
    codeSnippet: `// Gemini Multimodal Prompt Stream
const aiResponse = await geminiModel.generateContent({
  contents: [{ role: 'user', parts: [systemPrompt, userInput] }],
  generationConfig: { temperature: 0.2, topP: 0.95 }
});`
  },
  {
    id: 3,
    number: '03',
    title: 'CONSTRUCTION SITE MANAGEMENT ERP',
    tag: 'REALTIME CLOUD & ERP',
    category: 'fullstack',
    icon: <Building2 size={22} />,
    iconColor: '#f59e0b',
    description: 'Comprehensive operational ERP managing multi-site engineer assignments, geo-attendance tracking, material procurement workflows, live progress telemetry, PDF work orders, and hierarchical role-based permissions.',
    highlights: [
      'Real-Time Multi-Site Progress & Engineer Sync Engine',
      'Material Procurement & Inventory Request Pipeline',
      'Automated PDF Work Order Generation Engine',
      'Firebase Realtime Database & Cloud Storage BaaS'
    ],
    metrics: [
      { label: 'Database', val: 'Firebase Cloud DB' },
      { label: 'Syncing', val: 'Realtime Telemetry' },
      { label: 'Reporting', val: 'PDF Engine' }
    ],
    techIcons: [
      { name: 'React.js', icon: <ReactLogo size={20} /> },
      { name: 'Firebase', icon: <FirebaseLogo size={20} /> },
      { name: 'Node.js', icon: <NodeLogo size={20} /> },
      { name: 'Tailwind CSS', icon: <TailwindLogo size={20} /> }
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'Firebase Firestore', 'REST APIs', 'PDF Engine', 'Tailwind CSS'],
    liveUrl: 'https://github.com/Sajin09',
    githubUrl: 'https://github.com/Sajin09',
    codeSnippet: `// Realtime Firestore Site Stream
const unsubscribe = onSnapshot(doc(db, 'sites', siteId), (snapshot) => {
  dispatch(updateSiteLiveTelemetry(snapshot.data()));
});`
  },
  {
    id: 4,
    number: '04',
    title: 'REAGE HEALTHCARE PLATFORM',
    tag: 'MODERN CLIENT ARCHITECTURE',
    category: 'frontend',
    icon: <Activity size={22} />,
    iconColor: '#10b981',
    description: 'High-performance digital healthcare portal featuring physician scheduling workflows, patient consultation funnels, reusable component design system, smooth micro-interactions, and 100% responsive glassmorphism.',
    highlights: [
      'Lightning Fast Vite Build & Optimized Bundle Architecture',
      'Responsive Glassmorphism & Cyber Dark Theme',
      'Accessible Interactive Doctor Booking Calendar',
      'Perfect 100 Score on Core Web Vitals & SEO'
    ],
    metrics: [
      { label: 'Lighthouse', val: '100 / 100 Score' },
      { label: 'Build Tool', val: 'Vite Optimized HMR' },
      { label: 'Styling', val: 'Tailwind CSS' }
    ],
    techIcons: [
      { name: 'React 19', icon: <ReactLogo size={20} /> },
      { name: 'Vite', icon: <ViteLogo size={20} /> },
      { name: 'Tailwind CSS', icon: <TailwindLogo size={20} /> }
    ],
    tags: ['React.js', 'Vite', 'Tailwind CSS', 'UI/UX Design', 'SEO', 'Core Web Vitals', 'Responsive UI'],
    liveUrl: 'https://github.com/Sajin09',
    githubUrl: 'https://github.com/Sajin09',
    codeSnippet: `// High-Performance Vite Component
export const AppointmentSlotPicker = React.memo(({ slots, onSelect }) => {
  return <div className="slot-grid">{slots.map(renderSlot)}</div>;
});`
  },
  {
    id: 5,
    number: '05',
    title: 'SECURE REST API & AUTH GATEWAY',
    tag: 'SECURITY & MICROSERVICES',
    category: 'backend',
    icon: <Lock size={22} />,
    iconColor: '#ec4899',
    description: 'Hardened backend authentication gateway providing encrypted token rotation, bcrypt password hashing, CORS protection, rate-limiting, and centralized error telemetry for distributed microservices.',
    highlights: [
      'Encrypted JWT Token Rotation & Refresh Mechanism',
      'Distributed Express Rate Limiter & DDOS Protection',
      'Centralized Structured Logging & Error Telemetry',
      'Clean Modular MVC Architecture & Unit Tested Endpoints'
    ],
    metrics: [
      { label: 'Security', val: 'Bcrypt + JWT' },
      { label: 'Protection', val: 'Rate Limited' },
      { label: 'Throughput', val: 'High Performance' }
    ],
    techIcons: [
      { name: 'Node.js', icon: <NodeLogo size={20} /> },
      { name: 'Express', icon: <Code2 size={20} className="theme-primary-svg" /> },
      { name: 'MongoDB', icon: <MongoLogo size={20} /> }
    ],
    tags: ['Node.js', 'Express.js', 'JWT', 'Security', 'Bcrypt', 'REST API', 'Rate Limiting', 'MVC'],
    liveUrl: 'https://github.com/Sajin09',
    githubUrl: 'https://github.com/Sajin09',
    codeSnippet: `// Rate Limiter & Token Validation
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use('/api/', limiter, authMiddleware.verifySignature);`
  }
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Robust Unified 5-Second Infinite Loop Timer
  // Automatically advances 0 -> 1 -> 2 -> 3 -> 4 -> 0 continuously
  useEffect(() => {
    if (isPaused || selectedProject !== null) return;

    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % PROJECTS.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [activeIndex, isPaused, selectedProject]);

  const nextSlide = () => {
    setActiveIndex(prev => (prev + 1) % PROJECTS.length);
  };

  const prevSlide = () => {
    setActiveIndex(prev => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  const handleCardClick = (idx) => {
    setActiveIndex(idx);
  };

  const currentProject = PROJECTS[activeIndex];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        
        {/* Section Header */}
        <div className="projects-header scroll-reveal section-header-row">
          <div className="section-header-left">
            <span className="projects-script-tag">Featured Deployments</span>
            <h2 className="projects-headline">
              <span className="projects-title-white">FEATURED</span>
              <span className="projects-title-red">PROJECTS & SYSTEMS</span>
            </h2>
            <div className="projects-title-line"></div>
            <p className="projects-header-desc">
              Production-tested full-stack platforms, scalable enterprise architectures, and AI workflow integrations.
            </p>
          </div>

          {/* Right Header Widget: 03 Watermark & Rotating Badge */}
          <div className="section-header-right">
            <div className="section-watermark-num">03</div>
            <div className="section-rotating-badge">
              <svg className="badge-circular-svg" viewBox="0 0 100 100">
                <path
                  id="circlePathProjects"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="circular-badge-text">
                  <textPath href="#circlePathProjects" startOffset="0%">
                    • FEATURED PROJECTS • PRODUCTION DEPLOYS
                  </textPath>
                </text>
              </svg>
              <div className="badge-center-icon">
                <Sparkles size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Ambient Red Spotlight */}
        <div className="projects-ambient-glow"></div>

        {/* Top Active System Bar */}
        <div className="accordion-controls-bar scroll-reveal delay-1">
          <div className="controls-meta-info">
            <span className="active-sys-pill">
              <span className="pill-pulse-dot"></span>
              <span>ACTIVE SYSTEM: <strong>{currentProject.title}</strong></span>
            </span>
          </div>
        </div>

        {/* Expanding Accordion Capsule Carousel (5 Sections Seamless Infinite Loop) */}
        <div 
          className="expanding-capsule-carousel scroll-reveal delay-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {PROJECTS.map((project, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div
                key={project.id}
                className={`capsule-card ${isActive ? 'active' : 'collapsed'}`}
                onClick={() => handleCardClick(idx)}
              >
                
                {/* Active Expanded Card Content */}
                {isActive ? (
                  <div className="active-card-content">
                    
                    {/* Top Cyber Meta Bar */}
                    <div className="active-top-bar">
                      <div className="active-tag-wrapper">
                        <span className="active-category-tag">
                          <Sparkles size={13} />
                          <span>{project.tag}</span>
                        </span>
                        <span className="active-project-num">{project.number}</span>
                      </div>
                      <div className="active-status-beacon">
                        <span className="beacon-pulse"></span>
                        <span>LIVE DEPLOYMENT</span>
                      </div>
                    </div>

                    {/* Project Title & Summary */}
                    <div className="active-header-area">
                      <h3 className="active-project-heading">{project.title}</h3>
                      <p className="active-project-summary">{project.description}</p>
                    </div>

                    {/* Architecture Highlights Bullets */}
                    <div className="active-highlights-block">
                      <span className="block-label">SYSTEM HIGHLIGHTS:</span>
                      <div className="highlights-grid">
                        {project.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="highlight-bullet-item">
                            <span className="h-diamond">✦</span>
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="active-tech-row">
                      {project.tags.map((t, tIdx) => (
                        <span key={tIdx} className="active-tech-pill">{t}</span>
                      ))}
                    </div>

                    {/* Bottom Action Area (Matching Reference UI Badge + CTAs) */}
                    <div className="active-bottom-bar">
                      
                      {/* Reference UI Bottom Left Icon Circle */}
                      <div className="reference-bottom-badge" style={{ borderColor: project.iconColor }}>
                        {project.icon}
                        <span className="badge-ping-dot" style={{ background: project.iconColor }}></span>
                      </div>

                      <div className="active-actions-group">
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="capsule-btn capsule-btn-primary"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>Live Demo</span>
                          <ExternalLink size={15} />
                        </a>
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="capsule-btn capsule-btn-secondary"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <GithubIcon size={15} />
                          <span>Source</span>
                        </a>
                        <button 
                          className="capsule-btn capsule-btn-ghost"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProject(project);
                          }}
                        >
                          <span>Inspect</span>
                          <ArrowUpRight size={15} />
                        </button>
                      </div>

                    </div>

                  </div>
                ) : (
                  /* Collapsed Slender Capsule Content (Matching Reference UI) */
                  <div className="collapsed-card-content">
                    
                    <span className="collapsed-num">{project.number}</span>
                    
                    <div className="collapsed-vertical-title">
                      <span>{project.title}</span>
                    </div>

                    {/* Reference UI Bottom Circular Badge */}
                    <div className="collapsed-bottom-badge">
                      {project.icon}
                    </div>

                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Futuristic Multi-Segment Cyber Timeline Loader Dock */}
        <div className="cyber-timeline-dock">
          
          {/* Left: Live Scan State */}
          <div className="timeline-status-info">
            <span className={`status-beacon-dot ${isPaused ? 'paused' : 'scanning'}`}></span>
            <span className="status-text">
              {isPaused ? 'SYSTEM SCAN: PAUSED' : 'SYSTEM SCAN: ACTIVE'}
            </span>
          </div>

          {/* Center: 5 Interactive Segmented Capsule Bars */}
          <div className="timeline-segments-group">
            {PROJECTS.map((proj, pIdx) => {
              const isPast = pIdx < activeIndex;
              const isCurrent = pIdx === activeIndex;

              return (
                <button
                  key={proj.id}
                  className={`timeline-segment-pill ${isCurrent ? 'active' : isPast ? 'passed' : 'upcoming'}`}
                  onClick={() => handleCardClick(pIdx)}
                  aria-label={`Jump to project ${proj.number}`}
                >
                  <div className="segment-bar-track">
                    <div 
                      key={`seg-${activeIndex}-${isPaused}`}
                      className={`segment-bar-fill ${isCurrent && !isPaused ? 'filling' : ''}`}
                    ></div>
                  </div>
                  <div className="segment-pill-label">
                    <span className="seg-num">{proj.number}</span>
                    <span className="seg-name">{proj.title.split(' ')[0]}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Telemetry Counter Badge */}
          <div className="timeline-counter-badge">
            <span className="counter-idx">SYS {currentProject.number}</span>
            <span className="counter-sep">//</span>
            <span className="counter-status">05 READY</span>
          </div>

        </div>

      </div>

      {/* Interactive System HUD Modal */}
      {selectedProject && (
        <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="project-hud-modal" onClick={e => e.stopPropagation()}>
            
            <button 
              className="modal-close-btn"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="modal-header">
              <span className="modal-tag">{selectedProject.tag}</span>
              <h2 className="modal-title">{selectedProject.title}</h2>
              <p className="modal-desc">{selectedProject.description}</p>
            </div>

            <div className="modal-grid">
              
              <div className="modal-highlights-col">
                <h4 className="modal-section-title">
                  <ShieldCheck size={16} className="theme-primary-svg" />
                  <span>Key Architecture & Capabilities</span>
                </h4>
                <div className="modal-features-list">
                  {selectedProject.highlights.map((h, idx) => (
                    <div key={idx} className="modal-feature-item">
                      <CheckCircle2 size={16} color="#22c55e" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-code-col">
                <h4 className="modal-section-title">
                  <Terminal size={16} className="theme-primary-svg" />
                  <span>Live Implementation Code</span>
                </h4>
                <pre className="modal-code-block">
                  <code>{selectedProject.codeSnippet}</code>
                </pre>
              </div>

            </div>

            <div className="modal-footer">
              <div className="modal-tags-wrap">
                {selectedProject.tags.map((t, idx) => (
                  <span key={idx} className="active-tech-pill">{t}</span>
                ))}
              </div>
              <div className="modal-actions-wrap">
                <a 
                  href={selectedProject.liveUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="capsule-btn capsule-btn-primary"
                >
                  <span>Explore Live App</span>
                  <ExternalLink size={15} />
                </a>
                <a 
                  href={selectedProject.githubUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="capsule-btn capsule-btn-secondary"
                >
                  <GithubIcon size={15} />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
