const PortfolioHeroImage = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 1920 1080"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="portfolioHeroGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(211, 100%, 45%)" />
          <stop offset="50%" stopColor="hsl(16, 100%, 65%)" />
          <stop offset="100%" stopColor="hsl(211, 100%, 55%)" />
        </linearGradient>
        <linearGradient id="portfolioHeroGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(16, 100%, 70%)" />
          <stop offset="100%" stopColor="hsl(211, 100%, 50%)" />
        </linearGradient>
      </defs>
      
      {/* Fond dégradé */}
      <rect width="1920" height="1080" fill="url(#portfolioHeroGrad1)" />
      
      {/* Formes décoratives */}
      <circle cx="300" cy="250" r="140" fill="url(#portfolioHeroGrad2)" opacity="0.3" />
      <circle cx="1620" cy="200" r="110" fill="rgba(255,255,255,0.2)" />
      <circle cx="200" cy="850" r="160" fill="url(#portfolioHeroGrad2)" opacity="0.25" />
      
      {/* Portfolio items stylisés */}
      
      {/* Portfolio 1 - Logo */}
      <g transform="translate(400, 200)">
        <rect x="0" y="0" width="300" height="300" rx="20" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
        <circle cx="150" cy="120" r="60" fill="url(#portfolioHeroGrad2)" opacity="0.6" />
        <text x="150" y="135" fontSize="60" fill="rgba(255,255,255,0.8)" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">P</text>
        <rect x="50" y="220" width="200" height="60" rx="10" fill="rgba(255,255,255,0.2)" />
        <line x1="80" y1="245" x2="220" y2="245" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
      </g>
      
      {/* Portfolio 2 - Carte */}
      <g transform="translate(800, 350)">
        <rect x="0" y="20" width="280" height="200" rx="15" fill="rgba(255,255,255,0.2)" />
        <rect x="20" y="40" width="280" height="200" rx="15" fill="rgba(255,255,255,0.25)" />
        <rect x="40" y="60" width="280" height="200" rx="15" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
        <rect x="70" y="100" width="220" height="30" rx="8" fill="hsl(211, 100%, 50%)" opacity="0.6" />
        <line x1="90" y1="150" x2="310" y2="150" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
        <line x1="90" y1="180" x2="280" y2="180" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
      </g>
      
      {/* Portfolio 3 - CV */}
      <g transform="translate(1200, 250)">
        <rect x="0" y="0" width="350" height="450" rx="20" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
        <rect x="0" y="0" width="350" height="100" rx="20" fill="url(#portfolioHeroGrad2)" />
        <circle cx="290" cy="50" r="30" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
        <rect x="30" y="130" width="290" height="30" rx="8" fill="hsl(211, 100%, 50%)" opacity="0.6" />
        <rect x="30" y="180" width="290" height="15" rx="5" fill="rgba(0,0,0,0.1)" />
        <rect x="30" y="210" width="220" height="15" rx="5" fill="rgba(0,0,0,0.08)" />
        <rect x="30" y="250" width="290" height="15" rx="5" fill="rgba(0,0,0,0.1)" />
      </g>
      
      {/* Stats visuelles */}
      <g transform="translate(500, 750)">
        <rect x="0" y="0" width="200" height="150" rx="15" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
        <text x="100" y="60" fontSize="50" fill="rgba(255,255,255,0.8)" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">500+</text>
        <text x="100" y="110" fontSize="20" fill="rgba(255,255,255,0.6)" textAnchor="middle" fontFamily="Arial, sans-serif">Projets</text>
      </g>
      
      <g transform="translate(850, 750)">
        <rect x="0" y="0" width="200" height="150" rx="15" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
        <text x="100" y="60" fontSize="50" fill="rgba(255,255,255,0.8)" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">300+</text>
        <text x="100" y="110" fontSize="20" fill="rgba(255,255,255,0.6)" textAnchor="middle" fontFamily="Arial, sans-serif">Logos</text>
      </g>
      
      {/* Texte stylisé */}
      <g opacity="0.2">
        <text x="960" y="500" fontSize="180" fill="rgba(255,255,255,0.15)" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">
          PORTFOLIO
        </text>
        <text x="960" y="700" fontSize="120" fill="rgba(255,255,255,0.1)" textAnchor="middle" fontFamily="Arial, sans-serif">
          NOS RÉALISATIONS
        </text>
      </g>
    </svg>
  );
};

export default PortfolioHeroImage;

