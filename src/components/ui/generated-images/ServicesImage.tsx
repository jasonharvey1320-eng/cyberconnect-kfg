const ServicesImage = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 1920 1080"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="servicesGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(211, 100%, 45%)" />
          <stop offset="50%" stopColor="hsl(16, 100%, 65%)" />
          <stop offset="100%" stopColor="hsl(211, 100%, 55%)" />
        </linearGradient>
        <linearGradient id="servicesGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(16, 100%, 70%)" />
          <stop offset="100%" stopColor="hsl(211, 100%, 50%)" />
        </linearGradient>
      </defs>
      
      {/* Fond dégradé */}
      <rect width="1920" height="1080" fill="url(#servicesGrad1)" />
      
      {/* Formes décoratives */}
      <circle cx="250" cy="200" r="120" fill="url(#servicesGrad2)" opacity="0.3" />
      <circle cx="1670" cy="250" r="100" fill="rgba(255,255,255,0.2)" />
      <circle cx="200" cy="880" r="150" fill="url(#servicesGrad2)" opacity="0.25" />
      <circle cx="1720" cy="830" r="130" fill="rgba(255,255,255,0.15)" />
      
      {/* Icônes de services stylisées */}
      
      {/* Ordinateur */}
      <g transform="translate(400, 200)">
        <rect x="0" y="0" width="250" height="180" rx="15" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
        <rect x="25" y="25" width="200" height="120" rx="8" fill="rgba(255,255,255,0.25)" />
        <rect x="75" y="165" width="100" height="15" rx="5" fill="rgba(255,255,255,0.2)" />
      </g>
      
      {/* Imprimante */}
      <g transform="translate(800, 350)">
        <rect x="0" y="0" width="280" height="220" rx="18" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
        <rect x="30" y="30" width="220" height="140" rx="10" fill="rgba(255,255,255,0.2)" />
        <rect x="70" y="190" width="140" height="20" rx="5" fill="rgba(255,255,255,0.25)" />
        <circle cx="120" cy="210" r="8" fill="hsl(211, 100%, 50%)" />
        <circle cx="170" cy="210" r="8" fill="hsl(16, 100%, 65%)" />
      </g>
      
      {/* Pinceau/Palette */}
      <g transform="translate(1200, 250)">
        <rect x="0" y="0" width="200" height="200" rx="15" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
        <circle cx="70" cy="60" r="35" fill="hsl(211, 100%, 50%)" opacity="0.6" />
        <circle cx="130" cy="60" r="35" fill="hsl(16, 100%, 65%)" opacity="0.6" />
        <circle cx="100" cy="120" r="35" fill="hsl(142, 76%, 45%)" opacity="0.6" />
        <rect x="40" y="160" width="120" height="30" rx="8" fill="rgba(255,255,255,0.2)" />
      </g>
      
      {/* Graduation cap */}
      <g transform="translate(500, 600)">
        <path d="M 100 50 L 150 50 L 175 100 L 150 150 L 100 150 L 75 100 Z" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.4)" strokeWidth="3" />
        <circle cx="125" cy="100" r="30" fill="rgba(255,255,255,0.25)" />
        <text x="125" y="110" fontSize="30" fill="rgba(255,255,255,0.6)" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">✓</text>
      </g>
      
      {/* Documents */}
      <g transform="translate(1100, 650)">
        <rect x="0" y="20" width="180" height="220" rx="10" fill="rgba(255,255,255,0.2)" />
        <rect x="20" y="40" width="180" height="220" rx="10" fill="rgba(255,255,255,0.25)" />
        <rect x="40" y="60" width="180" height="220" rx="10" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
        <line x1="60" y1="90" x2="210" y2="90" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
        <line x1="60" y1="130" x2="210" y2="130" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
        <line x1="60" y1="170" x2="210" y2="170" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
      </g>
      
      {/* WiFi signal */}
      <g transform="translate(1450, 500)">
        <circle cx="100" cy="100" r="50" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="4" />
        <circle cx="100" cy="100" r="30" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="4" />
        <circle cx="100" cy="100" r="15" fill="rgba(255,255,255,0.6)" />
      </g>
      
      {/* Texte stylisé */}
      <g opacity="0.2">
        <text x="960" y="500" fontSize="180" fill="rgba(255,255,255,0.15)" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">
          SERVICES
        </text>
        <text x="960" y="700" fontSize="120" fill="rgba(255,255,255,0.1)" textAnchor="middle" fontFamily="Arial, sans-serif">
          COMPLETS
        </text>
      </g>
    </svg>
  );
};

export default ServicesImage;

