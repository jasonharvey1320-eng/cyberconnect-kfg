const HeroDesignImage = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 1920 1080"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="designGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(211, 100%, 50%)" />
          <stop offset="50%" stopColor="hsl(16, 100%, 65%)" />
          <stop offset="100%" stopColor="hsl(211, 100%, 60%)" />
        </linearGradient>
        <linearGradient id="designGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(16, 100%, 70%)" />
          <stop offset="100%" stopColor="hsl(211, 100%, 50%)" />
        </linearGradient>
      </defs>
      
      {/* Fond dégradé */}
      <rect width="1920" height="1080" fill="url(#designGrad1)" />
      
      {/* Formes créatives */}
      <circle cx="300" cy="250" r="120" fill="url(#designGrad2)" opacity="0.4" />
      <circle cx="1620" cy="200" r="100" fill="rgba(255,255,255,0.2)" />
      <circle cx="200" cy="830" r="150" fill="url(#designGrad2)" opacity="0.3" />
      <circle cx="1720" cy="880" r="130" fill="rgba(255,255,255,0.15)" />
      
      {/* Formes géométriques */}
      <polygon points="500,300 650,200 750,350 600,450" fill="rgba(255,255,255,0.2)" />
      <polygon points="1400,600 1550,500 1650,650 1500,750" fill="rgba(255,255,255,0.25)" />
      
      {/* Palettes de couleurs */}
      <g transform="translate(600, 300)">
        <rect x="0" y="0" width="400" height="300" rx="15" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
        <circle cx="100" cy="80" r="50" fill="hsl(211, 100%, 50%)" />
        <circle cx="200" cy="80" r="50" fill="hsl(16, 100%, 65%)" />
        <circle cx="300" cy="80" r="50" fill="hsl(142, 76%, 45%)" />
        <rect x="50" y="180" width="300" height="80" rx="10" fill="rgba(255,255,255,0.2)" />
      </g>
      
      {/* Outils de design */}
      <g transform="translate(1100, 500)">
        <rect x="0" y="0" width="150" height="150" rx="10" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
        <circle cx="75" cy="75" r="40" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="3" />
        <line x1="35" y1="75" x2="115" y2="75" stroke="rgba(255,255,255,0.4)" strokeWidth="3" />
        <line x1="75" y1="35" x2="75" y2="115" stroke="rgba(255,255,255,0.4)" strokeWidth="3" />
      </g>
      
      {/* Pinceaux stylisés */}
      <g transform="translate(200, 500)">
        <rect x="0" y="0" width="20" height="120" rx="10" fill="rgba(255,255,255,0.3)" />
        <path d="M 10 0 Q 30 20 10 40 Q -10 20 10 0" fill="rgba(255,255,255,0.4)" />
      </g>
      
      {/* Typographie */}
      <g opacity="0.3">
        <text x="960" y="450" fontSize="150" fill="rgba(255,255,255,0.2)" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">
          DESIGN
        </text>
        <text x="960" y="650" fontSize="100" fill="rgba(255,255,255,0.15)" textAnchor="middle" fontFamily="Arial, sans-serif">
          CREATIVE
        </text>
      </g>
    </svg>
  );
};

export default HeroDesignImage;

