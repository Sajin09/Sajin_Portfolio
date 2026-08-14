import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgressBar from './components/ScrollProgressBar';
import FloatingResumeButton from './components/FloatingResumeButton';

function App() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem('sajin-portfolio-theme') || 'red';
  });

  const handleThemeChange = (newTheme) => {
    setCurrentTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('sajin-portfolio-theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  // Global Scroll-Triggered Reveal Observer for Butter-Smooth Top-to-Bottom Animations
  useEffect(() => {
    const revealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-app">
      {/* Top Viewport Telemetry Scroll Progress Bar */}
      <ScrollProgressBar />

      <Navbar currentTheme={currentTheme} onThemeChange={handleThemeChange} />
      <main>
        <Hero currentTheme={currentTheme} />
        <About currentTheme={currentTheme} />
        <Skills currentTheme={currentTheme} />
        <Projects currentTheme={currentTheme} />
        <Contact currentTheme={currentTheme} />
      </main>
      <Footer currentTheme={currentTheme} onThemeChange={handleThemeChange} />

      {/* Floating Bottom-Right Download Resume Action Button */}
      <FloatingResumeButton />
    </div>
  );
}

export default App;
