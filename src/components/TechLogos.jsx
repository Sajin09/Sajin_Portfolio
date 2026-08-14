import React from 'react';

export function ReactLogo({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor" className={className}>
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function JavaScriptLogo({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path d="M7 16.5c.5.8 1.2 1.3 2.2 1.3 1.3 0 2.1-.7 2.1-2.4v-6.9h-1.8v6.9c0 .7-.3 1-1 1-.5 0-.8-.3-1-.6l-.5.7zm7.4-1.2c.4.6 1 1 1.9 1 .8 0 1.3-.4 1.3-1 0-.6-.5-.9-1.4-1.3l-.6-.3c-1.3-.5-2.1-1.3-2.1-2.5 0-1.4 1.1-2.4 2.8-2.4 1.2 0 2.1.4 2.7 1.4l-1.3.8c-.3-.5-.7-.8-1.4-.8-.6 0-1 .4-1 .9 0 .4.4.7 1.1 1l.6.3c1.5.6 2.4 1.3 2.4 2.6 0 1.6-1.2 2.6-3.1 2.6-1.7 0-2.8-.8-3.4-1.9l1.5-.9z" fill="#000000" />
    </svg>
  );
}

export function ReduxLogo({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 14.5c-1.2 0-2.1-.6-2.6-1.5-.4.3-.9.5-1.4.5-1.4 0-2.5-1.1-2.5-2.5 0-.4.1-.8.3-1.1-.9-.5-1.5-1.4-1.5-2.4 0-1.7 1.3-3 3-3 .9 0 1.7.4 2.2 1 .4-.3.9-.5 1.5-.5 1.4 0 2.5 1.1 2.5 2.5 0 .5-.1.9-.4 1.3.8.5 1.4 1.4 1.4 2.4 0 1.8-1.5 3.3-3.5 3.3z" fill="#764ABC" />
    </svg>
  );
}

export function TailwindLogo({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#38BDF8" className={className}>
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
    </svg>
  );
}

export function HtmlCssLogo({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 3l1.8 17.5L12 22.5l7.2-2L21 3H3zm14.7 4.5l-.2 2.2h-7.6l.2 2.3h7.1l-.6 6.2-4.2 1.2-4.2-1.2-.3-3.2h2.2l.1 1.7 2.2.6 2.2-.6.3-2.9H6.9l-.7-7.5h11.5z" fill="#E34F26" />
    </svg>
  );
}

export function NodeLogo({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#339933" className={className}>
      <path d="M12 2L2 7.7v11.6L12 25l10-5.7V7.7L12 2zm0 2.3l7.9 4.6v9.2L12 22.7 4.1 18.1V8.9L12 4.3z" />
      <circle cx="12" cy="13.5" r="3.5" fill="#339933" />
    </svg>
  );
}

export function ExpressLogo({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 8l8 8 8-8" />
      <path d="M12 4v16" />
    </svg>
  );
}

export function RestApiLogo({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}

export function JwtLogo({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#FB015B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M12 8v4" />
      <circle cx="12" cy="16" r="1" fill="#FB015B" />
    </svg>
  );
}

export function PostmanLogo({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#FF6C37" className={className}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5l-4-4 1.4-1.4 2.6 2.6 6-6 1.4 1.4-7.4 7.4z" />
    </svg>
  );
}

export function MongoLogo({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#47A248" className={className}>
      <path d="M12 2C11.5 2 7 8 7 14c0 4 3 6.5 5 7.5 2-1 5-3.5 5-7.5 0-6-4.5-12-5-12zm0 18.5c-.3 0-1-.3-1.5-.6-.8-.6-1.5-1.6-1.5-3.9 0-3.3 2-7.5 3-9.5 1 2 3 6.2 3 9.5 0 2.3-.7 3.3-1.5 3.9-.5.3-1.2.6-1.5.6z" />
    </svg>
  );
}

export function FirebaseLogo({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4.5 17.5L8 3.5l3.5 6.5L4.5 17.5z" fill="#FFA611" />
      <path d="M4.5 17.5l7-7.5 5 9.5-12-2z" fill="#F57C00" />
      <path d="M19.5 16.5L16 2.5l-4.5 8 8 6z" fill="#FFCA28" />
    </svg>
  );
}

export function SqlLogo({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#00758F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

export function GeminiLogo({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2C12 7.5 7.5 12 2 12c5.5 0 10 4.5 10 10 0-5.5 4.5-10 10-10-5.5 0-10-4.5-10-10z" fill="url(#geminiGrad)" />
      <defs>
        <linearGradient id="geminiGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1BA1E3" />
          <stop offset="0.5" stopColor="#9C27B0" />
          <stop offset="1" stopColor="#F90000" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function OpenAiLogo({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" color="#10A37F" className={className}>
      <path d="M22.28 10.37a5.55 5.55 0 0 0-.48-4.54 5.68 5.68 0 0 0-5.69-2.77 5.56 5.56 0 0 0-4.14-1.85 5.67 5.67 0 0 0-5.38 3.9A5.55 5.55 0 0 0 3.2 6.84 5.68 5.68 0 0 0 4.4 12.7a5.55 5.55 0 0 0 .48 4.54 5.68 5.68 0 0 0 5.69 2.77 5.56 5.56 0 0 0 4.14 1.85 5.67 5.67 0 0 0 5.38-3.9 5.55 5.55 0 0 0 3.39-1.73 5.68 5.68 0 0 0-1.2-5.86zM13 20.35a4.17 4.17 0 0 1-2.69-.97l.14-.08 4.44-2.56a.76.76 0 0 0 .38-.66v-6.28l1.88 1.09a.07.07 0 0 1 .04.05v5.27a4.2 4.2 0 0 1-4.19 4.14zm-7.6-3.41a4.15 4.15 0 0 1-.52-2.81l.14.09 4.44 2.56a.75.75 0 0 0 .76 0l5.44-3.14v2.18a.07.07 0 0 1-.03.06l-4.56 2.63a4.2 4.2 0 0 1-5.67-1.57zm-1.12-8.3a4.15 4.15 0 0 1 2.17-1.85v5.3a.75.75 0 0 0 .38.65l5.44 3.14-1.88 1.09a.07.07 0 0 1-.07 0l-4.56-2.63a4.2 4.2 0 0 1-1.48-5.7zm13.88 2.5l-5.44-3.14 1.88-1.09a.07.07 0 0 1 .07 0l4.56 2.63a4.2 4.2 0 0 1 1.48 5.7 4.15 4.15 0 0 1-2.17 1.85v-5.3a.75.75 0 0 0-.38-.65zm2.08-3.79l-.14-.09-4.44-2.56a.75.75 0 0 0-.76 0l-5.44 3.14v-2.18a.07.07 0 0 1 .03-.06l4.56-2.63a4.2 4.2 0 0 1 5.67 1.57c.3.5.48 1.07.52 1.81zm-9.24 4.65l2.45-1.41 2.45 1.41v2.83l-2.45 1.41-2.45-1.41v-2.83z" />
    </svg>
  );
}

export function GitLogo({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#F05032" className={className}>
      <path d="M21.6 10.8l-8.4-8.4c-.8-.8-2-.8-2.8 0L8.7 4.1l3.5 3.5c.8-.3 1.8-.1 2.4.6.6.6.8 1.6.5 2.4l3.4 3.4c.8-.3 1.8-.1 2.4.6.8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.6-.6-.8-1.5-.5-2.3L14.3 11v5.1c.3.2.6.4.7.7.8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-.8-2 0-2.8.3-.3.6-.5 1-.7v-5.2c-.4-.2-.7-.4-1-.7-.6-.6-.8-1.5-.5-2.3L8.3 4.5 2.4 10.4c-.8.8-.8 2 0 2.8l8.4 8.4c.8.8 2 .8 2.8 0l8-8c.8-.8.8-2 0-2.8z" />
    </svg>
  );
}

export function ViteLogo({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M21.5 3.5L12.7 21a.8.8 0 01-1.4 0L2.5 3.5a.8.8 0 011-1.1l8.5 3.7 8.5-3.7a.8.8 0 011 1.1z" fill="url(#viteGrad)" />
      <path d="M13.2 2.5L7.5 12h4l-1 6 6.5-9h-4l1.2-6.5h-1z" fill="#FFD62E" />
      <defs>
        <linearGradient id="viteGrad" x1="2" y1="2" x2="22" y2="22">
          <stop stopColor="#41D1FF" />
          <stop offset="1" stopColor="#BD34FE" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function VercelLogo({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#ffffff" className={className}>
      <path d="M12 1L24 22H0L12 1Z" />
    </svg>
  );
}

export function VsCodeLogo({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#007ACC" className={className}>
      <path d="M17.5 2L5.8 11.2l-3.3-2.6L1 9.8l4 3.7-4 3.7 1.5 1.2 3.3-2.6L17.5 25l5.5-2.7V4.7L17.5 2zm1.5 18.2l-8.5-6.7 8.5-6.7v13.4z" />
    </svg>
  );
}
