import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Sparkles, 
  ArrowUpRight,
  Check
} from 'lucide-react';
import './Navbar.css';

export default function Navbar({ currentTheme = 'red', onThemeChange }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const themeOptions = [
    { 
      id: 'red', 
      name: 'Red', 
      border: '#ff4d4d',
      gradient: 'linear-gradient(135deg, #F90000, #530F0F)' 
    },
    { 
      id: 'blue', 
      name: 'Blue', 
      border: '#38bdf8',
      gradient: 'linear-gradient(135deg, #0072F5, #0a1f44)' 
    },
    { 
      id: 'green', 
      name: 'Green', 
      border: '#34d399',
      gradient: 'linear-gradient(135deg, #10B981, #063820)' 
    },
    { 
      id: 'yellow', 
      name: 'Yellow', 
      border: '#fbbf24',
      gradient: 'linear-gradient(135deg, #F59E0B, #4d3305)' 
    }
  ];

  return (
    <header className={`ref-nav-header ${isScrolled ? 'nav-scrolled' : ''}`}>
      <div className="ref-nav-island">
        
        {/* Left: 4-Color Theme Switcher Capsule (Replaced SAJIN brand) */}
        <div className="ref-nav-theme-switcher" title="Select Portfolio Theme Color">
          <div className="nav-theme-swatches">
            {themeOptions.map((theme) => {
              const isActive = currentTheme === theme.id;
              return (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => onThemeChange && onThemeChange(theme.id)}
                  className={`nav-theme-dot-btn ${isActive ? 'active' : ''}`}
                  aria-label={`Switch to ${theme.name} theme`}
                  title={`${theme.name} Theme`}
                >
                  <span 
                    className="nav-theme-dot" 
                    style={{ background: theme.gradient, borderColor: theme.border }}
                  >
                    {isActive && <Check size={8} color="#ffffff" strokeWidth={4} />}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Center: Segmented Capsule Track */}
        <nav className="ref-nav-dock">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`ref-nav-tab ${isActive ? 'active' : ''}`}
              >
                <span className="ref-nav-text">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="ref-nav-right">
          <a href="#contact" className="ref-nav-cta-btn">
            <span>GET IN TOUCH</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="ref-mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} className="theme-primary-icon" /> : <Menu size={22} color="#ffffff" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="ref-mobile-drawer">
          <div className="ref-mobile-drawer-inner">
            <div className="ref-drawer-header">
              <span className="ref-drawer-title">NAVIGATION</span>
              <span className="ref-drawer-beacon">● LIVE</span>
            </div>
            
            <div className="ref-mobile-nav-list">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`ref-mobile-tab ${isActive ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="ref-mobile-tab-text">{link.name}</span>
                    {isActive && <span className="ref-active-tag">ACTIVE</span>}
                  </a>
                );
              })}
            </div>

            {/* Mobile Theme Switcher */}
            <div className="ref-mobile-theme-row">
              <span className="mobile-theme-label">COLOR THEME:</span>
              <div className="mobile-theme-swatches">
                {themeOptions.map((theme) => {
                  const isActive = currentTheme === theme.id;
                  return (
                    <button
                      key={theme.id}
                      type="button"
                      onClick={() => {
                        onThemeChange && onThemeChange(theme.id);
                      }}
                      className={`mobile-theme-btn ${isActive ? 'active' : ''}`}
                    >
                      <span 
                        className="nav-theme-dot" 
                        style={{ background: theme.gradient, borderColor: theme.border }}
                      >
                        {isActive && <Check size={8} color="#ffffff" strokeWidth={4} />}
                      </span>
                      <span>{theme.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="ref-drawer-footer">
              <a
                href="#contact"
                className="ref-mobile-cta"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Sparkles size={16} />
                <span>LET'S TALK</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </header>
  );
}
