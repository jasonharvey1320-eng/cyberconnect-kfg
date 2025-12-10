const TarifsImage = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 1920 1080"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="tarifsGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(211, 100%, 40%)" />
          <stop offset="50%" stopColor="hsl(16, 100%, 60%)" />
          <stop offset="100%" stopColor="hsl(211, 100%, 50%)" />
        </linearGradient>
        <linearGradient id="tarifsGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(16, 100%, 70%)" />
          <stop offset="100%" stopColor="hsl(211, 100%, 60%)" />
        </linearGradient>
      </defs>
      
      {/* Fond dégradé */}
      <rect width="1920" height="1080" fill="url(#tarifsGrad1)" />
      
      {/* Formes décoratives */}
      <circle cx="300" cy="250" r="140" fill="url(#tarifsGrad2)" opacity="0.3" />
      <circle cx="1620" cy="200" r="110" fill="rgba(255,255,255,0.2)" />
      <circle cx="200" cy="850" r="160" fill="url(#tarifsGrad2)" opacity="0.25" />
      
      {/* Tableau de prix stylisé */}
      <g transform="translate(500, 200)">
        <rect x="0" y="0" width="400" height="500" rx="20" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
        <rect x="20" y="20" width="360" height="60" rx="10" fill="url(#tarifsGrad2)" />
        <rect x="30" y="30" width="340" height="20" rx="5" fill="rgba(255,255,255,0.8)" />
        <rect x="30" y="55" width="280" height="15" rx="5" fill="rgba(255,255,255,0.6)" />
        
        {/* Lignes de tarifs */}
        {[100, 160, 220, 280, 340, 400, 460].map((y, i) => (
          <g key={i}>
            <rect x="30" y={y} width="200" height="15" rx="5" fill="rgba(255,255,255,0.3)" />
            <rect x="250" y={y} width="130" height="15" rx="5" fill="hsl(211, 100%, 50%)" opacity="0.6" />
          </g>
        ))}
      </g>
      
      {/* Calculatrice */}
      <g transform="translate(1100, 300)">
        <rect x="0" y="0" width="300" height="400" rx="20" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.4)" strokeWidth="3" />
        <rect x="30" y="30" width="240" height="80" rx="10" fill="rgba(0,0,0,0.3)" />
        <text x="150" y="85" fontSize="40" fill="rgba(255,255,255,0.8)" textAnchor="middle" fontFamily="monospace">25000</text>
        <g>
          {[
            {x: 40, y: 130, w: 70, text: "7"},
            {x: 120, y: 130, w: 70, text: "8"},
            {x: 200, y: 130, w: 70, text: "9"},
            {x: 40, y: 210, w: 70, text: "4"},
            {x: 120, y: 210, w: 70, text: "5"},
            {x: 200, y: 210, w: 70, text: "6"},
            {x: 40, y: 290, w: 70, text: "1"},
            {x: 120, y: 290, w: 70, text: "2"},
            {x: 200, y: 290, w: 70, text: "3"},
          ].map((btn, i) => (
            <g key={i}>
              <rect x={btn.x} y={btn.y} width={btn.w} height="60" rx="8" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
              <text x={btn.x + btn.w/2} y={btn.y + 40} fontSize="24" fill="rgba(255,255,255,0.8)" textAnchor="middle" fontFamily="monospace">{btn.text}</text>
            </g>
          ))}
        </g>
      </g>
      
      {/* Argent/monnaie */}
      <g transform="translate(400, 750)">
        <circle cx="100" cy="100" r="80" fill="url(#tarifsGrad2)" opacity="0.6" />
        <circle cx="100" cy="100" r="60" fill="rgba(255,255,255,0.3)" />
        <text x="100" y="115" fontSize="50" fill="rgba(255,255,255,0.8)" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">FCFA</text>
      </g>
      
      <g transform="translate(1400, 750)">
        <circle cx="100" cy="100" r="80" fill="url(#tarifsGrad2)" opacity="0.6" />
        <circle cx="100" cy="100" r="60" fill="rgba(255,255,255,0.3)" />
        <text x="100" y="110" fontSize="35" fill="rgba(255,255,255,0.8)" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">Prix</text>
        <text x="100" y="145" fontSize="25" fill="rgba(255,255,255,0.6)" textAnchor="middle" fontFamily="Arial, sans-serif">Comptétitifs</text>
      </g>
      
      {/* Texte stylisé */}
      <g opacity="0.2">
        <text x="960" y="500" fontSize="170" fill="rgba(255,255,255,0.15)" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">
          TARIFS
        </text>
        <text x="960" y="700" fontSize="110" fill="rgba(255,255,255,0.1)" textAnchor="middle" fontFamily="Arial, sans-serif">
          TRANSPARENTS
        </text>
      </g>
    </svg>
  );
};

export default TarifsImage;

