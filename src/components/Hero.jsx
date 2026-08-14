import React from 'react';
import sajinImg from '../assets/sajin.png';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      
      {/* Layer 2: Sajin Cutout Portrait - Direct child of hero-section so bottom: 0 is 100% FLUSH with bottom red line */}
      <div className="hero-portrait-container">
        <img 
          src={sajinImg} 
          alt="Sajin R - Full Stack MERN & AI Developer" 
          className="hero-portrait-img"
        />
      </div>

      <div className="hero-container">
        
        {/* Top Script Greeting */}
        <div className="hero-greeting-wrapper scroll-reveal delay-1">
          <span className="hero-greeting">Hello I'm</span>
        </div>

        {/* 3D Typography Stack */}
        <div className="hero-typography-stack">
          
          {/* Layer 1: Solid Background Typography (Behind Sajin) */}
          <div className="hero-typography hero-typography-bg">
            <div className="hero-line hero-line-1">
              <span className="hero-text-white">SAJIN</span>
              <span className="hero-text-red">SOFTWARE</span>
            </div>
            <div className="hero-line hero-line-2">
              <span className="hero-text-red">DEVELOPER</span>
            </div>
          </div>

          {/* Layer 3: Foreground Stroke Outline (Strictly Over Sajin's Blazer & Chest) */}
          <div className="hero-typography hero-typography-fg" aria-hidden="true">
            <div className="hero-line hero-line-1">
              <span className="hero-text-empty">SAJIN</span>
              <span className="hero-text-empty">SOFTWARE</span>
            </div>
            <div className="hero-line hero-line-2">
              <span className="hero-text-stroke">DEVELOPER</span>
            </div>
          </div>

        </div>

        {/* Bottom Row: Social Icons (Left) & Stats (Right) */}
        <div className="hero-bottom-row">
          {/* Social Icons on Left (Matching Reference Squircle App Design) */}
          <div className="hero-social-icons scroll-reveal-left delay-3">
            
            {/* 1. LinkedIn */}
            <a 
              href="https://linkedin.com/in/sajinr" 
              target="_blank" 
              rel="noreferrer" 
              className="hero-social-btn"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <svg className="social-svg" viewBox="0 0 24 24" fill="#000000">
                <circle cx="4.98" cy="4.5" r="2.4" />
                <rect x="2.5" y="9" width="5" height="13" rx="1.2" />
                <path d="M10 9h4.5v1.8h.06c.63-1.2 2.18-2.3 4.2-2.3 4.5 0 5.3 3 5.3 6.8V22H19v-6.2c0-1.5-.03-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V22h-4.5V9z" />
              </svg>
            </a>

            {/* 2. Instagram */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              className="hero-social-btn"
              aria-label="Instagram Profile"
              title="Instagram"
            >
              <svg className="social-svg" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2.5" y="2.5" width="19" height="19" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4.2" />
                <circle cx="17.5" cy="6.5" r="1" fill="#000000" stroke="none" />
              </svg>
            </a>

            {/* 3. WhatsApp */}
            <a 
              href="https://wa.me/919585123409" 
              target="_blank" 
              rel="noreferrer" 
              className="hero-social-btn"
              aria-label="WhatsApp Chat"
              title="WhatsApp"
            >
              <svg className="social-svg" viewBox="0 0 24 24" fill="#000000">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.54 1.789.814 2.802.814l.006.001c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.768-5.766zm9.969 5.766c0 5.485-4.464 9.949-9.969 9.949-1.728 0-3.344-.447-4.757-1.229l-5.274 1.383 1.41-5.143c-.887-1.488-1.379-3.218-1.379-4.96 0-5.485 4.464-9.949 9.969-9.949 5.505 0 9.969 4.464 9.969 9.949z"/>
              </svg>
            </a>

            {/* 4. Gmail */}
            <a 
              href="mailto:sajin0904@gmail.com" 
              className="hero-social-btn"
              aria-label="Email Sajin"
              title="Gmail"
            >
              <svg className="social-svg" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2.5" y="4" width="19" height="16" rx="3.5" ry="3.5" />
                <path d="M21.5 5.5L12 13 2.5 5.5" />
              </svg>
            </a>

          </div>

          {/* Stats Column on Right */}
          <div className="hero-stats-column scroll-reveal-right delay-3">
            <div className="hero-stat-item">
              <div className="hero-stat-num">3+</div>
              <div className="hero-stat-text">
                <span>YEARS OF</span>
                <span>EXPERIENCE</span>
              </div>
            </div>

            <div className="hero-stat-divider"></div>

            <div className="hero-stat-item">
              <div className="hero-stat-num">50+</div>
              <div className="hero-stat-text">
                <span>PROJECT</span>
                <span>COMPLETED</span>
              </div>
            </div>

            <div className="hero-stat-divider"></div>

            <div className="hero-stat-item">
              <div className="hero-stat-num">5+</div>
              <div className="hero-stat-text">
                <span>TEAM</span>
                <span>MANAGEMENT</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Radiant Glowing Theme Divider Line (Matching Reference Screenshot) */}
      <div className="hero-bottom-divider-line"></div>
    </section>
  );
}
