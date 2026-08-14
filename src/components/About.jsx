import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Bot, 
  Building2, 
  Layers, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight,
  Code2,
  Cpu,
  Mail,
  MapPin,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import './About.css';

export default function About({ currentTheme = 'red' }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const cards = [
    {
      id: 'fullstack',
      stat: '3+',
      icon: <Layers size={22} className="stat-bento-icon" />,
      title: 'FULL-STACK MERN ARCHITECTURE',
      desc: 'Expertise in building scalable, production-grade MERN web applications with modular architecture and clean code.',
      highlights: [
        'JWT Auth & RBAC Security Guards',
        'High-Speed MongoDB Query Indexing',
        'Clean Modular MVC Architecture'
      ],
      statusDotColor: 'var(--primary)',
      statusText: 'Zero-Vulnerability',
      badgeText: 'Verified'
    },
    {
      id: 'experience',
      stat: '50+',
      icon: <Sparkles size={22} className="stat-bento-icon" />,
      title: 'ENTERPRISE DOMAINS',
      desc: 'Delivering high-impact systems across Billing, Construction ERP, Healthcare, and Charity platforms.',
      highlights: [
        'Full-Stack Billing & GST Systems',
        'Construction Site ERP Workflows',
        'Healthcare & Patient Care Portals'
      ],
      statusDotColor: 'var(--primary)',
      statusText: 'Multi-Tenant Systems',
      badgeText: 'Deployed'
    },
    {
      id: 'ai',
      stat: 'AI+',
      icon: <Bot size={22} className="stat-bento-icon" />,
      title: 'AI INTEGRATION',
      desc: 'Building intelligent chatbots, workflow automation, and prompt engineering using OpenAI & Gemini APIs.',
      highlights: [
        'OpenAI GPT-4o & Gemini Pro Models',
        'Intelligent Lead Ingestion Bots',
        'Automated Context Chaining'
      ],
      statusDotColor: '#38bdf8',
      statusText: 'Sub-Second Latency',
      badgeText: 'Active'
    },
    {
      id: 'performance',
      stat: '98%',
      icon: <Cpu size={22} className="stat-bento-icon" />,
      title: 'HIGH PERFORMANCE & SPEED',
      desc: 'Optimized frontends with Vite, code splitting, memoization, lazy loading, and sub-second TTFB caching.',
      highlights: [
        '95+ Mobile & Desktop Lighthouse',
        'Sub-800ms Server Response Times',
        'Vite + Redux Toolkit State Speed'
      ],
      statusDotColor: '#22c55e',
      statusText: 'Grade A Speed',
      badgeText: 'Live'
    }
  ];

  // Auto-play timer for smooth rotation
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, cards.length]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const getCardClass = (idx) => {
    const total = cards.length;
    const diff = (idx - activeIndex + total) % total;

    if (diff === 0) return 'active';
    if (diff === 1) return 'next';
    if (diff === total - 1) return 'prev';
    return 'back';
  };

  const techHighlights = [
    'MERN STACK',
    'REACT 19',
    'NODE.JS',
    'EXPRESS.JS',
    'MONGODB ATLAS',
    'FIREBASE',
    'RESTFUL APIS',
    'JWT & RBAC',
    'TAILWIND CSS',
    'GEN-AI INTEGRATION',
    'PROMPT ENGINEERING'
  ];

  return (
    <section id="about" className="about-section">
      
      {/* Background Ambient Glow */}
      <div className="about-ambient-glow"></div>

      <div className="about-container">
        
        {/* Header (Matching Hero Design Language) */}
        <div className="about-header-wrapper scroll-reveal">
          <div className="about-header-left">
            <span className="about-script-tag">Professional Overview</span>
            <h2 className="about-headline">
              <span className="about-title-white">ABOUT</span>
              <span className="about-title-red">SAJIN R.</span>
            </h2>
            <div className="about-title-line"></div>
          </div>

          {/* Right Header Widget: Rotating Circular Tech Badge & Watermark */}
          <div className="about-header-right">
            <div className="about-watermark-num">01</div>
            <div className="about-rotating-badge">
              <svg className="badge-circular-svg" viewBox="0 0 100 100">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="circular-badge-text">
                  <textPath href="#circlePath" startOffset="0%">
                    • FULL STACK DEVELOPER • MERN & AI SPECIALIST
                  </textPath>
                </text>
              </svg>
              <div className="badge-center-icon">
                <Code2 size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Marquee Ticker Bar */}
        <div className="about-marquee-bar scroll-reveal delay-1">
          <div className="marquee-track">
            {techHighlights.map((tech, idx) => (
              <React.Fragment key={idx}>
                <span>{tech}</span>
                <span className="marquee-dot">✦</span>
              </React.Fragment>
            ))}
            {/* Duplicate for infinite loop */}
            {techHighlights.map((tech, idx) => (
              <React.Fragment key={`dup-${idx}`}>
                <span>{tech}</span>
                <span className="marquee-dot">✦</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="about-bento-grid">
          
          {/* Main Story Card (Left Column) */}
          <div className="about-story-card scroll-reveal-left delay-2">
            <div className="story-badge">
              <span className="story-badge-dot"></span>
              <span>Full Stack MERN Developer</span>
            </div>

            <h3 className="story-heading">
              BUILDING ENTERPRISE MERN APPLICATIONS & AI-DRIVEN PLATFORMS
            </h3>

            <p className="story-paragraph">
              MERN Stack Developer with 3+ years of experience developing enterprise-grade web applications using React.js, Node.js, Express.js, MongoDB, and Firebase. Proven expertise in building secure RESTful APIs with JWT/RBAC authentication, robust database schema design, modern responsive UI design, and AI automation integrations using OpenAI and Gemini APIs.
            </p>

            {/* Quick Resume Highlights */}
            <div className="resume-quick-info">
              <div className="quick-info-pill">
                <MapPin size={16} className="info-icon" />
                <span>Nagercoil, Tamil Nadu (Open to Relocation)</span>
              </div>
              <div className="quick-info-pill">
                <Briefcase size={16} className="info-icon" />
                <span>MERN Developer @ Rooks and Brooks Technologies Pvt. Ltd.</span>
              </div>
              <div className="quick-info-pill">
                <GraduationCap size={16} className="info-icon" />
                <span>B.E. Electronics & Communication • Anna University (CGPA 8.1/10)</span>
              </div>
            </div>

            <div className="story-actions">
              <a href="#projects" className="btn btn-primary">
                <span>View MERN Projects</span>
                <ArrowRight size={16} />
              </a>
              <a href="mailto:sajin0904@gmail.com" className="btn btn-outline">
                <Mail size={16} />
                <span>sajin0904@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3D Coverflow Perspective Carousel (With Controls Strictly Below) */}
          <div className="about-carousel-column scroll-reveal-right delay-2">
            
            <div 
              className="carousel-container-3d"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Ambient Center Spotlight Glow */}
              <div className="carousel-center-glow"></div>

              {/* 3D Cards Stage */}
              <div className="carousel-stage-3d">
                {cards.map((card, idx) => (
                  <div
                    key={card.id}
                    className={`carousel-card stat-bento-card ${getCardClass(idx)}`}
                    onClick={() => setActiveIndex(idx)}
                  >
                    <div className="stat-bento-top">
                      <span className="stat-bento-num">{card.stat}</span>
                      {card.icon}
                    </div>
                    
                    <div className="stat-bento-label">{card.title}</div>
                    
                    <p className="stat-bento-desc">{card.desc}</p>

                    {/* Modern Glass Bottom Section */}
                    <div className="card-bottom-section">
                      <div className="card-highlights-list">
                        {card.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="card-highlight-item">
                            <span className="card-highlight-dot">✦</span>
                            <span className="card-highlight-text">{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="card-status-capsule">
                        <div className="status-indicator-wrap">
                          <span 
                            className="status-pulse-dot"
                            style={{ 
                              backgroundColor: card.statusDotColor,
                              boxShadow: `0 0 8px ${card.statusDotColor}` 
                            }}
                          ></span>
                          <span className="status-label-text">{card.statusText}</span>
                        </div>
                        <span className="status-badge-pill">{card.badgeText}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Interactive Controls - Positioned Strictly Below the Carousel */}
            <div className="carousel-controls">
              <button 
                className="carousel-arrow-btn" 
                onClick={prevSlide}
                aria-label="Previous Slide"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="carousel-dots">
                {cards.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    className={`carousel-dot ${dotIdx === activeIndex ? 'active' : ''}`}
                    onClick={() => setActiveIndex(dotIdx)}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>

              <button 
                className="carousel-arrow-btn" 
                onClick={nextSlide}
                aria-label="Next Slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
