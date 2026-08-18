import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  ArrowUpRight, 
  CheckCircle2, 
  Copy, 
  Check, 
  Briefcase,
  ChevronDown,
  Send,
  Sparkles
} from 'lucide-react';
import './Contact.css';

export default function Contact({ currentTheme = 'red' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Full-Time MERN Developer Role',
    budgetRange: 'Open / Flexible for Discussion',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const GMAIL_COMPOSE_URL = 'https://mail.google.com/mail/?view=cm&fs=1&to=sajin0904@gmail.com&su=Inquiry%20from%20Portfolio&body=Hi%20Sajin,%0D%0A%0D%0AI%20came%20across%20your%20portfolio...';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      // Send real email directly to sajin0904@gmail.com
      const response = await fetch('https://formsubmit.co/ajax/sajin0904@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Portfolio Inquiry from ${formData.name} (${formData.inquiryType})`,
          _template: 'table',
          _captcha: 'false',
          'Client Name': formData.name,
          'Client Email': formData.email,
          'Inquiry / Role Type': formData.inquiryType,
          'Expected CTC / Budget': formData.budgetRange,
          'Message Details': formData.message
        })
      });

      const data = await response.json();

      if (response.ok && data.success !== 'false') {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          inquiryType: 'Full-Time MERN Developer Role',
          budgetRange: 'Open / Flexible for Discussion',
          message: ''
        });
        setTimeout(() => setSubmitted(false), 9000);
      } else {
        throw new Error(data.message || 'Submission failed. Opening direct email...');
      }
    } catch (err) {
      console.warn('Form submission encountered an issue, opening Gmail compose fallback:', err);
      // Fallback: Open pre-filled Gmail compose directly to sajin0904@gmail.com
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=sajin0904@gmail.com&su=${encodeURIComponent(`Inquiry: ${formData.inquiryType} from ${formData.name}`)}&body=${encodeURIComponent(`Hi Sajin,\n\nName: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.inquiryType}\nExpected CTC / Scope: ${formData.budgetRange}\n\nMessage:\n${formData.message}`)}`;
      window.open(gmailUrl, '_blank');
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="ref-contact-section">
      
      {/* Top Ambient Glow */}
      <div className="ref-top-spotlight"></div>

      {/* Cyber Circuit Trace Lines */}
      <svg className="circuit-trace-left" viewBox="0 0 350 200" fill="none">
        <path d="M0 40 H160 L240 120 H350" stroke="rgba(var(--primary-rgb), 0.3)" strokeWidth="1.5" />
        <circle cx="160" cy="40" r="3" fill="var(--primary)" />
        <circle cx="350" cy="120" r="3.5" fill="var(--primary)" />
      </svg>

      <svg className="circuit-trace-right" viewBox="0 0 350 200" fill="none">
        <path d="M350 40 H190 L110 120 H0" stroke="rgba(var(--primary-rgb), 0.3)" strokeWidth="1.5" />
        <circle cx="190" cy="40" r="3" fill="var(--primary)" />
        <circle cx="0" cy="120" r="3.5" fill="var(--primary)" />
      </svg>

      {/* Giant Background Watermark */}
      <div className="ref-bg-watermark">CONTACT</div>

      <div className="ref-contact-container">
        
        {/* Left Column: Header & Direct Info Cards */}
        <div className="ref-left-col scroll-reveal-left">
          
          <div className="ref-heading-header">
            <div className="contact-header-top-row">
              <div className="contact-header-left-wrap">
                <span className="contact-script-tag">Initiate Collaboration</span>
                <h2 className="ref-main-heading">
                  <span className="ref-title-white">GET IN</span>
                  <span className="ref-title-red">TOUCH</span>
                </h2>
              </div>
              
              {/* Right Header Widget: 04 Watermark & Rotating Badge */}
              <div className="section-header-right contact-badge-widget">
                <div className="section-watermark-num">04</div>
                <div className="section-rotating-badge">
                  <svg className="badge-circular-svg" viewBox="0 0 100 100">
                    <path
                      id="circlePathContact"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text className="circular-badge-text">
                      <textPath href="#circlePathContact" startOffset="0%">
                        • INITIATE COLLABORATION • GET IN TOUCH
                      </textPath>
                    </text>
                  </svg>
                  <div className="badge-center-icon">
                    <Send size={18} />
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-title-line"></div>
            <p className="ref-sub-heading">
              Have questions, need a high-performance modern web app, or ready to discuss Full-Time MERN engineering roles and CTC compensation?
            </p>
          </div>

          {/* Action Cards Stack */}
          <div className="ref-action-cards-stack">
            
            {/* Email us - Redirects directly to Gmail */}
            <a 
              href={GMAIL_COMPOSE_URL} 
              target="_blank"
              rel="noreferrer"
              className="ref-action-card"
            >
              <div className="ref-card-icon-box email-box">
                <Mail size={20} />
              </div>
              <div className="ref-card-text">
                <span className="ref-card-title">Email us</span>
                <span className="ref-card-val">sajin0904@gmail.com</span>
              </div>
              <div className="ref-card-arrow-pill" title="Open Gmail Compose">
                <ArrowUpRight size={16} />
              </div>
            </a>

            {/* Call us */}
            <a 
              href="tel:+919585123409" 
              className="ref-action-card"
            >
              <div className="ref-card-icon-box phone-box">
                <Phone size={20} />
              </div>
              <div className="ref-card-text">
                <span className="ref-card-title">Call us / WhatsApp</span>
                <span className="ref-card-val">+91 95851 23409</span>
              </div>
              <div className="ref-card-arrow-pill">
                <ArrowUpRight size={16} />
              </div>
            </a>

            {/* Compensation & CTC */}
            <div className="ref-action-card ref-card-static">
              <div className="ref-card-icon-box ctc-box">
                <Briefcase size={20} />
              </div>
              <div className="ref-card-text">
                <span className="ref-card-title">Compensation & CTC</span>
                <span className="ref-card-val">Open to discuss expected CTC & Joining timeline</span>
              </div>
              <div className="ref-card-arrow-pill">
                <Sparkles size={15} color="var(--primary)" />
              </div>
            </div>

            {/* Our location */}
            <div className="ref-action-card ref-card-static">
              <div className="ref-card-icon-box location-box">
                <MapPin size={20} />
              </div>
              <div className="ref-card-text">
                <span className="ref-card-title">Our location</span>
                <span className="ref-card-val">Nagercoil, Tamil Nadu, India (Open to Relocation)</span>
              </div>
              <a 
                href="https://linkedin.com/in/sajinr" 
                target="_blank" 
                rel="noreferrer" 
                className="ref-card-arrow-pill"
                title="View LinkedIn Profile"
              >
                <ArrowUpRight size={16} />
              </a>
            </div>

          </div>

        </div>

        {/* Right Column: One-by-One Clean Stacked Form */}
        <div className="ref-right-col scroll-reveal-right delay-1">
          <div className="ref-form-wrapper">
            
            {submitted ? (
              <div className="ref-success-state">
                <div className="ref-success-icon-wrap">
                  <CheckCircle2 size={46} color="#22c55e" />
                </div>
                <h3 className="ref-success-title">Inquiry Submitted Successfully</h3>
                <p className="ref-success-desc">
                  Thank you for reaching out! Sajin has received your details and will get back to you within 24 hours.
                </p>
                <button 
                  className="ref-success-dismiss-btn"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="ref-contact-form">
                
                {/* 1. Name */}
                <div className="ref-input-group">
                  <label htmlFor="ref-name" className="ref-field-label">Name</label>
                  <input
                    type="text"
                    id="ref-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. John Doe / Tech Recruiter"
                    className="ref-text-input"
                  />
                </div>

                {/* 2. Email */}
                <div className="ref-input-group">
                  <label htmlFor="ref-email" className="ref-field-label">Email</label>
                  <input
                    type="email"
                    id="ref-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="ref-text-input"
                  />
                </div>

                {/* 3. Inquiry / Service Type */}
                <div className="ref-input-group">
                  <label htmlFor="ref-inquiry" className="ref-field-label">Inquiry / Service Type</label>
                  <div className="ref-select-wrapper">
                    <select
                      id="ref-inquiry"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="ref-text-input ref-select-input"
                    >
                      <option value="Full-Time MERN Developer Role">Full-Time MERN Developer Role</option>
                      <option value="Custom Portfolio Website">Custom Portfolio / Web App</option>
                      <option value="AI Assistant / LLM Automation">AI Assistant / Automation</option>
                      <option value="Enterprise ERP / Billing Platform">Enterprise ERP / Billing</option>
                      <option value="General Consultation / Other">General Consultation / Other</option>
                    </select>
                    <ChevronDown size={16} className="ref-select-icon" />
                  </div>
                </div>

                {/* 4. Expected CTC / Budget */}
                <div className="ref-input-group">
                  <label htmlFor="ref-budget" className="ref-field-label">Expected CTC / Budget Scope</label>
                  <div className="ref-select-wrapper">
                    <select
                      id="ref-budget"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className="ref-text-input ref-select-input"
                    >
                      <option value="Open / Flexible for Discussion">Open / Flexible for Discussion</option>
                      <option value="Standard Full-Time CTC Package">Standard Full-Time CTC Discussion</option>
                      <option value="Competitive Market Package">Competitive Market Package</option>
                      <option value="Fixed Freelance Scope">Fixed Project Budget</option>
                    </select>
                    <ChevronDown size={16} className="ref-select-icon" />
                  </div>
                </div>

                {/* 5. Message */}
                <div className="ref-input-group">
                  <label htmlFor="ref-message" className="ref-field-label">Message</label>
                  <textarea
                    id="ref-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about the role, project requirements, timeline, or questions..."
                    className="ref-text-input ref-textarea"
                  ></textarea>
                </div>

                {/* 6. Submit Button */}
                <button 
                  type="submit" 
                  className="ref-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="ref-btn-loading">
                      <span className="btn-spinner"></span>
                      <span>Submitting...</span>
                    </span>
                  ) : (
                    <>
                      <span>Submit</span>
                      <Send size={15} />
                    </>
                  )}
                </button>

              </form>
            )}

          </div>
        </div>

      </div>

    </section>
  );
}
