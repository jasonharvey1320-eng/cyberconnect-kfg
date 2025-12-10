const ContactImage = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 1920 1080"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="contactGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(211, 100%, 45%)" />
          <stop offset="50%" stopColor="hsl(16, 100%, 65%)" />
          <stop offset="100%" stopColor="hsl(211, 100%, 55%)" />
        </linearGradient>
        <linearGradient id="contactGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(16, 100%, 70%)" />
          <stop offset="100%" stopColor="hsl(211, 100%, 50%)" />
        </linearGradient>
      </defs>
      
      {/* Fond dégradé */}
      <rect width="1920" height="1080" fill="url(#contactGrad1)" />
      
      {/* Formes décoratives */}
      <circle cx="250" cy="200" r="120" fill="url(#contactGrad2)" opacity="0.3" />
      <circle cx="1670" cy="250" r="100" fill="rgba(255,255,255,0.2)" />
      <circle cx="200" cy="880" r="150" fill="url(#contactGrad2)" opacity="0.25" />
      
      {/* Enveloppe */}
      <g transform="translate(600, 250)">
        <rect x="0" y="0" width="400" height="300" rx="15" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.4)" strokeWidth="4" />
        <polygon points="0,0 200,150 400,0" fill="rgba(255,255,255,0.15)" />
        <rect x="50" y="50" width="300" height="200" rx="10" fill="rgba(255,255,255,0.25)" />
        <line x1="80" y1="100" x2="320" y2="100" stroke="rgba(0,0,0,0.2)" strokeWidth="3" />
        <line x1="80" y1="150" x2="280" y2="150" stroke="rgba(0,0,0,0.2)" strokeWidth="3" />
        <line x1="80" y1="200" x2="250" y2="200" stroke="rgba(0,0,0,0.2)" strokeWidth="3" />
      </g>
      
      {/* Téléphone */}
      <g transform="translate(1100, 300)">
        <rect x="0" y="0" width="280" height="500" rx="40" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.4)" strokeWidth="4" />
        <rect x="30" y="30" width="220" height="380" rx="20" fill="rgba(0,0,0,0.3)" />
        <rect x="50" y="50" width="180" height="320" rx="15" fill="url(#contactGrad2)" opacity="0.6" />
        <circle cx="140" cy="400" r="35" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.5)" strokeWidth="3" />
        <rect x="90" y="450" width="100" height="30" rx="15" fill="rgba(255,255,255,0.25)" />
      </g>
      
      {/* Carte avec localisation */}
      <g transform="translate(500, 700)">
        <rect x="0" y="0" width="350" height="250" rx="15" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.4)" strokeWidth="3" />
        <circle cx="175" cy="100" r="50" fill="hsl(211, 100%, 50%)" opacity="0.6" />
        <path d="M 175 50 Q 200 80 220 100 L 175 150 L 130 100 Q 150 80 175 50" fill="rgba(255,255,255,0.3)" />
        <rect x="75" y="180" width="200" height="50" rx="8" fill="rgba(255,255,255,0.25)" />
        <line x1="100" y1="200" x2="250" y2="200" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
        <line x1="100" y1="220" x2="220" y2="220" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
      </g>
      
      {/* Horloge */}
      <g transform="translate(1100, 850)">
        <circle cx="100" cy="100" r="90" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.4)" strokeWidth="4" />
        <circle cx="100" cy="100" r="5" fill="rgba(255,255,255,0.8)" />
        <line x1="100" y1="100" x2="100" y2="50" stroke="rgba(255,255,255,0.8)" strokeWidth="4" strokeLinecap="round" />
        <line x1="100" y1="100" x2="140" y2="100" stroke="rgba(255,255,255,0.6)" strokeWidth="3" strokeLinecap="round" />
        {[12, 3, 6, 9].map((num, i) => {
          const angle = (num * 30 - 90) * Math.PI / 180;
          const x = 100 + 75 * Math.cos(angle);
          const y = 100 + 75 * Math.sin(angle);
          return (
            <circle key={i} cx={x} cy={y} r="5" fill="rgba(255,255,255,0.8)" />
          );
        })}
      </g>
      
      {/* Texte stylisé */}
      <g opacity="0.2">
        <text x="960" y="500" fontSize="180" fill="rgba(255,255,255,0.15)" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">
          CONTACT
        </text>
        <text x="960" y="700" fontSize="120" fill="rgba(255,255,255,0.1)" textAnchor="middle" fontFamily="Arial, sans-serif">
          NOUS JOINDRE
        </text>
      </g>
    </svg>
  );
};

export default ContactImage;

