const PortfolioLogosImage = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 800 800"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(211, 100%, 45%)" />
          <stop offset="100%" stopColor="hsl(211, 100%, 55%)" />
        </linearGradient>
        <linearGradient id="logoGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(16, 100%, 65%)" />
          <stop offset="100%" stopColor="hsl(211, 100%, 50%)" />
        </linearGradient>
      </defs>
      
      {/* Fond */}
      <rect width="800" height="800" fill="url(#logoGrad1)" />
      
      {/* Logos stylisés */}
      <g transform="translate(100, 150)">
        {/* Logo 1 - Cercle avec lettre */}
        <circle cx="100" cy="100" r="80" fill="url(#logoGrad2)" stroke="rgba(255,255,255,0.5)" strokeWidth="4" />
        <text x="100" y="120" fontSize="60" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">C</text>
      </g>
      
      <g transform="translate(400, 100)">
        {/* Logo 2 - Forme géométrique */}
        <polygon points="100,50 200,50 225,100 200,150 100,150 75,100" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.6)" strokeWidth="3" />
        <circle cx="150" cy="100" r="30" fill="white" opacity="0.5" />
      </g>
      
      <g transform="translate(150, 400)">
        {/* Logo 3 - Rectangle moderne */}
        <rect x="0" y="0" width="150" height="100" rx="15" fill="url(#logoGrad2)" />
        <rect x="20" y="20" width="110" height="60" rx="8" fill="white" opacity="0.2" />
      </g>
      
      <g transform="translate(450, 400)">
        {/* Logo 4 - Initiales */}
        <circle cx="100" cy="50" r="40" fill="rgba(255,255,255,0.25)" stroke="white" strokeWidth="3" />
        <text x="100" y="65" fontSize="40" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">D</text>
        <rect x="60" y="110" width="80" height="15" rx="7" fill="white" opacity="0.6" />
      </g>
      
      <g transform="translate(250, 600)">
        {/* Logo 5 - Badge */}
        <circle cx="75" cy="75" r="60" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="4" />
        <path d="M 35 75 Q 75 35 115 75" fill="rgba(255,255,255,0.3)" />
      </g>
      
      {/* Éléments décoratifs */}
      <circle cx="700" cy="200" r="50" fill="rgba(255,255,255,0.2)" />
      <circle cx="50" cy="750" r="40" fill="rgba(255,255,255,0.15)" />
      <rect x="650" y="650" width="100" height="100" rx="20" fill="rgba(255,255,255,0.15)" transform="rotate(45 700 700)" />
    </svg>
  );
};

export default PortfolioLogosImage;

