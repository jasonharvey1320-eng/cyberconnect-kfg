const PortfolioCardsImage = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 800 800"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="cardGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(16, 100%, 60%)" />
          <stop offset="100%" stopColor="hsl(211, 100%, 45%)" />
        </linearGradient>
        <linearGradient id="cardGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(211, 100%, 50%)" />
          <stop offset="100%" stopColor="hsl(16, 100%, 65%)" />
        </linearGradient>
      </defs>
      
      {/* Fond */}
      <rect width="800" height="800" fill="url(#cardGrad1)" />
      
      {/* Cartes de visite empilées */}
      <g transform="translate(150, 200)">
        {/* Carte 1 (fond) */}
        <rect x="0" y="20" width="200" height="120" rx="10" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
        <rect x="20" y="40" width="160" height="15" rx="5" fill="rgba(255,255,255,0.3)" />
        <rect x="20" y="65" width="140" height="10" rx="5" fill="rgba(255,255,255,0.25)" />
        <rect x="20" y="85" width="120" height="10" rx="5" fill="rgba(255,255,255,0.25)" />
        
        {/* Carte 2 (milieu) */}
        <rect x="10" y="10" width="200" height="120" rx="10" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
        <rect x="30" y="30" width="160" height="15" rx="5" fill="rgba(255,255,255,0.4)" />
        <rect x="30" y="55" width="140" height="10" rx="5" fill="rgba(255,255,255,0.35)" />
        <rect x="30" y="75" width="120" height="10" rx="5" fill="rgba(255,255,255,0.35)" />
        
        {/* Carte 3 (devant) */}
        <rect x="20" y="0" width="200" height="120" rx="10" fill="rgba(255,255,255,0.4)" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
        <rect x="40" y="20" width="160" height="15" rx="5" fill="hsl(211, 100%, 50%)" />
        <rect x="40" y="45" width="140" height="10" rx="5" fill="rgba(255,255,255,0.4)" />
        <rect x="40" y="65" width="120" height="10" rx="5" fill="rgba(255,255,255,0.4)" />
      </g>
      
      {/* Flyers */}
      <g transform="translate(450, 100)">
        <rect x="0" y="0" width="250" height="350" rx="15" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.4)" strokeWidth="3" />
        <rect x="30" y="30" width="190" height="40" rx="8" fill="url(#cardGrad2)" />
        <rect x="30" y="90" width="190" height="15" rx="5" fill="rgba(255,255,255,0.3)" />
        <rect x="30" y="120" width="190" height="15" rx="5" fill="rgba(255,255,255,0.3)" />
        <rect x="30" y="150" width="160" height="15" rx="5" fill="rgba(255,255,255,0.3)" />
        <circle cx="200" cy="250" r="50" fill="url(#cardGrad2)" opacity="0.6" />
      </g>
      
      {/* Affiche */}
      <g transform="translate(100, 500)">
        <rect x="0" y="0" width="300" height="200" rx="10" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
        <rect x="20" y="20" width="260" height="30" rx="8" fill="hsl(16, 100%, 65%)" />
        <rect x="20" y="70" width="260" height="15" rx="5" fill="rgba(255,255,255,0.3)" />
        <rect x="20" y="100" width="220" height="15" rx="5" fill="rgba(255,255,255,0.3)" />
        <rect x="20" y="130" width="200" height="15" rx="5" fill="rgba(255,255,255,0.3)" />
        <circle cx="250" cy="160" r="25" fill="hsl(211, 100%, 50%)" />
      </g>
      
      {/* Brochure */}
      <g transform="translate(500, 500)">
        <rect x="0" y="0" width="180" height="250" rx="8" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
        <rect x="15" y="15" width="150" height="25" rx="5" fill="url(#cardGrad2)" />
        <line x1="15" y1="60" x2="165" y2="60" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
        <line x1="15" y1="90" x2="165" y2="90" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <line x1="15" y1="120" x2="165" y2="120" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <rect x="60" y="160" width="60" height="60" rx="5" fill="rgba(255,255,255,0.2)" />
      </g>
    </svg>
  );
};

export default PortfolioCardsImage;

