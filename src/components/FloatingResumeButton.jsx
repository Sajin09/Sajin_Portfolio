import React, { useState } from 'react';
import resumePdf from '../assets/Resume/Sajin R_Resume.pdf';
import './FloatingResumeButton.css';

export default function FloatingResumeButton() {
  const [opening, setOpening] = useState(false);

  const handleClick = () => {
    setOpening(true);
    setTimeout(() => setOpening(false), 2500);
  };

  return (
    <div className="floating-resume-wrapper">
      <a
        href={resumePdf}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="floating-resume-btn"
        aria-label="View and Download Sajin R Resume PDF"
        title="View Resume (PDF)"
      >
        {/* Animated Ambient Pulse Ring */}
        <span className="floating-pulse-ring"></span>
        <span className="floating-pulse-ring-2"></span>

        {/* Download Tray & Down-Arrow Icon (Matching Reference Image) */}
        <svg 
          className="floating-resume-svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#ffffff" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>

        {/* Hover Tooltip Capsule */}
        <div className="floating-resume-tooltip">
          <span className="tooltip-dot">●</span>
          <span className="tooltip-text">{opening ? 'OPENING RESUME...' : 'VIEW RESUME (PDF)'}</span>
        </div>
      </a>
    </div>
  );
}
