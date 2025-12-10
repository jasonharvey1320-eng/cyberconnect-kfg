const HeroCyberImage = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 1920 1080"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="cyberGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(211, 100%, 40%)" />
          <stop offset="100%" stopColor="hsl(211, 100%, 60%)" />
        </linearGradient>
        <linearGradient id="cyberGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(16, 100%, 60%)" />
          <stop offset="100%" stopColor="hsl(211, 100%, 40%)" />
        </linearGradient>
      </defs>
      
      {/* Fond dégradé */}
      <rect width="1920" height="1080" fill="url(#cyberGrad1)" />
      
      {/* Formes géométriques abstraites */}
      <circle cx="200" cy="200" r="150" fill="url(#cyberGrad2)" opacity="0.3" />
      <circle cx="1720" cy="300" r="200" fill="url(#cyberGrad2)" opacity="0.2" />
      <circle cx="300" cy="880" r="180" fill="url(#cyberGrad2)" opacity="0.25" />
      
      {/* Lignes réseau */}
      <g stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none">
        <line x1="0" y1="400" x2="1920" y2="400" />
        <line x1="0" y1="600" x2="1920" y2="600" />
        <line x1="0" y1="800" x2="1920" y2="800" />
        <line x1="400" y1="0" x2="400" y2="1080" />
        <line x1="800" y1="0" x2="800" y2="1080" />
        <line x1="1200" y1="0" x2="1200" y2="1080" />
        <line x1="1600" y1="0" x2="1600" y2="1080" />
      </g>
      
      {/* Points de connexion réseau */}
      {[400, 800, 1200, 1600].map((x) => 
        [400, 600, 800].map((y) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="8" fill="rgba(255,255,255,0.4)" />
        ))
      )}
      
      {/* Icônes d'ordinateur stylisées */}
      <g transform="translate(600, 200)">
        <rect x="0" y="0" width="200" height="150" rx="10" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
        <rect x="20" y="20" width="160" height="100" rx="5" fill="rgba(255,255,255,0.25)" />
        <rect x="60" y="140" width="80" height="10" rx="5" fill="rgba(255,255,255,0.2)" />
      </g>
      
      <g transform="translate(1100, 400)">
        <rect x="0" y="0" width="200" height="150" rx="10" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
        <rect x="20" y="20" width="160" height="100" rx="5" fill="rgba(255,255,255,0.25)" />
        <rect x="60" y="140" width="80" height="10" rx="5" fill="rgba(255,255,255,0.2)" />
      </g>
      
      {/* Effet de données */}
      <g opacity="0.4">
        <text x="960" y="540" fontSize="120" fill="rgba(255,255,255,0.15)" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">
          CYBER
        </text>
        <text x="960" y="680" fontSize="80" fill="rgba(255,255,255,0.1)" textAnchor="middle" fontFamily="Arial, sans-serif">
          CONNECT
        </text>
      </g>
    </svg>
  );
};

export default HeroCyberImage;

