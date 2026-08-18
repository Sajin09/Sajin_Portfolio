import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Sparkles, 
  ArrowUpRight,
  Check,
  Home,
  User,
  Code2,
  Briefcase,
  Send,
  ChevronLeft
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', icon: <Home size={18} /> },
    { name: 'About', href: '#about', icon: <User size={18} /> },
    { name: 'Skills', href: '#skills', icon: <Code2 size={18} /> },
    { name: 'Projects', href: '#projects', icon: <Briefcase size={18} /> },
    { name: 'Contact', href: '#contact', icon: <Send size={18} /> },
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
    <>
      {/* Floating Island Header (Desktop + Mobile) */}
      <header className={`ref-nav-header ${isScrolled ? 'nav-scrolled' : ''} ${mobileMenuOpen ? 'drawer-active' : ''}`}>
        <div className="ref-nav-island">
          
          {/* Left: 4-Color Theme Switcher Capsule */}
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

          {/* Center: Segmented Capsule Track (Desktop only) */}
          <nav className="ref-nav-dock">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`ref-nav-tab ${isActive ? 'active' : ''}`}
                >
                  <span className="ref-nav-text">{link.name.toUpperCase()}</span>
                </a>
              );
            })}
          </nav>

          {/* Right CTA & Mobile Toggle */}
          <div className="ref-nav-right">
            <a href="#contact" className="ref-nav-cta-btn">
              <span>GET IN TOUCH</span>
              <ArrowUpRight size={15} />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              className={`ref-mobile-toggle-btn ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} color="#ffffff" /> : <Menu size={20} color="#ffffff" />}
            </button>
          </div>

        </div>
      </header>

      {/* =========================================================================
         Frosted Glass Mobile Drawer Menu (Reference Pill UI with Dynamic Theme)
         ========================================================================= */}
      {mobileMenuOpen && (
        <>
          {/* Ambient Backdrop Blur Overlay */}
          <div 
            className="ref-mobile-backdrop" 
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <aside className="ref-mobile-drawer" aria-label="Mobile Navigation Menu">
            <div className="ref-mobile-drawer-inner">
              
              {/* Top Bar: Brand Embossed Glass Logo + Close Button */}
              <div className="ref-drawer-top-bar">
                <div className="ref-drawer-logo-badge">
                  <span className="ref-drawer-logo-icon">S</span>
                </div>
                <div className="ref-drawer-header-meta">
                  <span className="ref-drawer-brand-name">SAJIN R</span>
                  <span className="ref-drawer-brand-status">● ONLINE</span>
                </div>
                <button 
                  className="ref-drawer-close-btn"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <ChevronLeft size={20} />
                </button>
              </div>
              
              {/* Navigation Items (White active pill matching reference screenshot) */}
              <nav className="ref-mobile-nav-list">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className={`ref-mobile-item ${isActive ? 'active' : ''}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="ref-item-icon-wrap">{link.icon}</span>
                      <span className="ref-item-text">{link.name}</span>
                      {isActive && <span className="ref-item-active-dot"></span>}
                    </a>
                  );
                })}
              </nav>

              {/* Mobile Dynamic Theme Switcher Section */}
              <div className="ref-mobile-theme-section">
                <div className="ref-mobile-theme-header">
                  <span className="mobile-theme-label">THEME PALETTE</span>
                  <span className="mobile-theme-active-name">{currentTheme.toUpperCase()}</span>
                </div>
                <div className="mobile-theme-swatches-grid">
                  {themeOptions.map((theme) => {
                    const isActive = currentTheme === theme.id;
                    return (
                      <button
                        key={theme.id}
                        type="button"
                        onClick={() => {
                          onThemeChange && onThemeChange(theme.id);
                        }}
                        className={`mobile-theme-tile ${isActive ? 'active' : ''}`}
                        title={`Select ${theme.name} Theme`}
                      >
                        <span 
                          className="theme-tile-dot" 
                          style={{ background: theme.gradient, borderColor: theme.border }}
                        >
                          {isActive && <Check size={9} color="#ffffff" strokeWidth={3.5} />}
                        </span>
                        <span className="theme-tile-name">{theme.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom CTA Button */}
              <div className="ref-drawer-footer">
                <a
                  href="#contact"
                  className="ref-mobile-cta"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Sparkles size={16} />
                  <span>Get In Touch</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>

            </div>
          </aside>
        </>
      )}
    </>
  );
}
