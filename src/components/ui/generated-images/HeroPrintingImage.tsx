const HeroPrintingImage = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 1920 1080"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="printGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(211, 100%, 40%)" />
          <stop offset="50%" stopColor="hsl(16, 100%, 60%)" />
          <stop offset="100%" stopColor="hsl(211, 100%, 50%)" />
        </linearGradient>
        <linearGradient id="printGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(16, 100%, 70%)" />
          <stop offset="100%" stopColor="hsl(211, 100%, 60%)" />
        </linearGradient>
      </defs>
      
      {/* Fond dégradé */}
      <rect width="1920" height="1080" fill="url(#printGrad1)" />
      
      {/* Imprimante stylisée */}
      <g transform="translate(600, 250)">
        <rect x="0" y="0" width="400" height="350" rx="20" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="4" />
        <rect x="50" y="50" width="300" height="200" rx="10" fill="rgba(255,255,255,0.2)" />
        <rect x="100" y="280" width="200" height="50" rx="5" fill="rgba(255,255,255,0.25)" />
        <circle cx="150" cy="305" r="8" fill="hsl(211, 100%, 50%)" />
        <circle cx="250" cy="305" r="8" fill="hsl(16, 100%, 65%)" />
      </g>
      
      {/* Feuilles de papier en vol */}
      <g transform="translate(300, 150)" opacity="0.6">
        <rect x="0" y="0" width="120" height="160" rx="5" fill="rgba(255,255,255,0.3)" transform="rotate(-15)" />
        <line x1="10" y1="20" x2="110" y2="20" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
        <line x1="10" y1="40" x2="110" y2="40" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
        <line x1="10" y1="60" x2="110" y2="60" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
      </g>
      
      <g transform="translate(1400, 200)" opacity="0.5">
        <rect x="0" y="0" width="120" height="160" rx="5" fill="rgba(255,255,255,0.3)" transform="rotate(20)" />
        <line x1="10" y1="20" x2="110" y2="20" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
        <line x1="10" y1="40" x2="110" y2="40" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
        <line x1="10" y1="60" x2="110" y2="60" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
      </g>
      
      {/* Documents empilés */}
      <g transform="translate(1100, 600)">
        <rect x="0" y="0" width="200" height="250" rx="10" fill="rgba(255,255,255,0.25)" />
        <rect x="15" y="15" width="200" height="250" rx="10" fill="rgba(255,255,255,0.3)" />
        <rect x="30" y="30" width="200" height="250" rx="10" fill="rgba(255,255,255,0.35)" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
        <line x1="50" y1="60" x2="230" y2="60" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
        <line x1="50" y1="90" x2="230" y2="90" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
        <line x1="50" y1="120" x2="230" y2="120" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
      </g>
      
      {/* Points de couleur (toners) */}
      <circle cx="200" cy="850" r="80" fill="hsl(211, 100%, 50%)" opacity="0.6" />
      <circle cx="400" cy="750" r="70" fill="hsl(16, 100%, 65%)" opacity="0.6" />
      <circle cx="1500" cy="800" r="75" fill="hsl(142, 76%, 45%)" opacity="0.6" />
      
      {/* Texte stylisé */}
      <g opacity="0.25">
        <text x="960" y="500" fontSize="140" fill="rgba(255,255,255,0.2)" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">
          PRINTING
        </text>
        <text x="960" y="700" fontSize="90" fill="rgba(255,255,255,0.15)" textAnchor="middle" fontFamily="Arial, sans-serif">
          EXPRESS
        </text>
      </g>
    </svg>
  );
};

export default HeroPrintingImage;

