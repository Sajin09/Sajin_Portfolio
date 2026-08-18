import React, { useState, useEffect } from 'react';
import { 
  ArrowUp, 
  Code2, 
  Mail, 
  Sparkles, 
  Terminal, 
  Radio, 
  Phone, 
  Clock
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import './Footer.css';

export default function Footer({ currentTheme = 'red' }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setTime(istTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="red-footer theme-footer">
      
      {/* Giant Background Watermark */}
      <div className="red-footer-bg-watermark">SAJIN R</div>

      <div className="red-footer-inner">
        
        {/* Top 3-Column Grid */}
        <div className="red-footer-main-grid">
          
          {/* Column 1: Brand & Live IST Telemetry */}
          <div className="red-footer-brand-col scroll-reveal delay-1">
            
            <div className="red-footer-brand-header">
              <div className="red-footer-brand-badge">
                <Code2 size={24} color="#ffffff" />
              </div>
              <div className="red-footer-brand-titles">
                <span className="red-footer-brand-name">SAJIN R</span>
                <span className="red-footer-brand-role">FULL STACK MERN & AI DEVELOPER</span>
              </div>
            </div>

            <p className="red-footer-bio-text">
              Crafting high-performance enterprise web platforms, scalable RESTful microservices, and AI-driven automation workflows with precision engineering.
            </p>

            {/* Live IST Telemetry Clock */}
            <div className="red-footer-telemetry-badge">
              <span className="red-telemetry-pulse"></span>
              <Clock size={14} color="#ffffff" />
              <span className="red-telemetry-time">{time || 'LIVE IST'}</span>
              <span className="red-telemetry-sep">•</span>
              <span className="red-telemetry-loc">Nagercoil, IN</span>
            </div>

          </div>

          {/* Column 2: System Navigation Links */}
          <div className="red-footer-nav-col scroll-reveal delay-2">
            <h4 className="red-footer-col-headline">
              <Terminal size={15} color="#ffffff" />
              <span>SYSTEM DIRECTORY</span>
            </h4>
            <div className="red-footer-nav-links-grid">
              <a href="#home" className="red-footer-nav-pill">
                <span>HOME</span>
              </a>
              <a href="#about" className="red-footer-nav-pill">
                <span>ABOUT ME</span>
              </a>
              <a href="#skills" className="red-footer-nav-pill">
                <span>CORE SKILLS</span>
              </a>
              <a href="#projects" className="red-footer-nav-pill">
                <span>PROJECTS</span>
              </a>
              <a href="#contact" className="red-footer-nav-pill">
                <span>GET IN TOUCH</span>
              </a>
            </div>
          </div>

          {/* Column 3: Direct Social Hub & Availability */}
          <div className="red-footer-connect-col scroll-reveal delay-3">
            <h4 className="red-footer-col-headline">
              <Radio size={15} color="#ffffff" />
              <span>COMMUNICATION CHANNELS</span>
            </h4>

            <div className="red-footer-social-dock">
              <a 
                href="https://github.com/Sajin09" 
                target="_blank" 
                rel="noreferrer" 
                className="red-footer-social-capsule"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} color="#ffffff" />
                <span>GitHub</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/sajinr" 
                target="_blank" 
                rel="noreferrer" 
                className="red-footer-social-capsule"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} color="#ffffff" />
                <span>LinkedIn</span>
              </a>

              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sajin0904@gmail.com&su=Inquiry%20from%20Portfolio" 
                target="_blank"
                rel="noreferrer"
                className="red-footer-social-capsule"
                aria-label="Direct Email via Gmail"
              >
                <Mail size={18} color="#ffffff" />
                <span>Email</span>
              </a>

              <a 
                href="tel:+919585123409" 
                className="red-footer-social-capsule"
                aria-label="Direct Phone"
              >
                <Phone size={18} color="#ffffff" />
                <span>Phone</span>
              </a>
            </div>

            <div className="red-footer-availability-banner">
              <span className="red-avail-dot"></span>
              <span>OPEN TO FULL-TIME & FREELANCE ROLES</span>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright | Back To Top */}
        <div className="red-footer-bottom-bar scroll-reveal delay-4">
          
          <div className="red-footer-copyright-wrap">
            <span className="red-copyright-mark">© {new Date().getFullYear()} SAJIN R.</span>
            <span className="red-copyright-sub">ALL RIGHTS RESERVED • BUILT WITH REACT 19 & VITE</span>
          </div>

          <button 
            onClick={scrollToTop} 
            className="red-footer-scroll-top-btn" 
            aria-label="Scroll to top of portfolio"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={16} />
          </button>

        </div>

      </div>

    </footer>
  );
}
