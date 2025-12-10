const PortfolioCVImage = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 800 800"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="cvGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(211, 100%, 50%)" />
          <stop offset="100%" stopColor="hsl(211, 100%, 40%)" />
        </linearGradient>
        <linearGradient id="cvGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(16, 100%, 65%)" />
          <stop offset="100%" stopColor="hsl(211, 100%, 50%)" />
        </linearGradient>
      </defs>
      
      {/* Fond */}
      <rect width="800" height="800" fill="url(#cvGrad1)" />
      
      {/* CV moderne */}
      <g transform="translate(150, 100)">
        <rect x="0" y="0" width="500" height="600" rx="15" fill="rgba(255,255,255,0.95)" stroke="rgba(255,255,255,0.8)" strokeWidth="3" />
        
        {/* En-tête avec photo */}
        <rect x="0" y="0" width="500" height="120" rx="15" fill="url(#cvGrad2)" />
        <circle cx="430" cy="60" r="35" fill="rgba(255,255,255,0.3)" stroke="white" strokeWidth="3" />
        <rect x="30" y="30" width="200" height="20" rx="5" fill="white" opacity="0.9" />
        <rect x="30" y="60" width="150" height="15" rx="5" fill="white" opacity="0.8" />
        <rect x="30" y="85" width="180" height="12" rx="5" fill="white" opacity="0.7" />
        
        {/* Section expérience */}
        <rect x="30" y="150" width="440" height="25" rx="5" fill="hsl(211, 100%, 50%)" />
        <rect x="30" y="195" width="440" height="15" rx="5" fill="rgba(0,0,0,0.1)" />
        <rect x="30" y="220" width="300" height="12" rx="5" fill="rgba(0,0,0,0.08)" />
        <rect x="30" y="245" width="400" height="12" rx="5" fill="rgba(0,0,0,0.08)" />
        <rect x="30" y="275" width="440" height="15" rx="5" fill="rgba(0,0,0,0.1)" />
        <rect x="30" y="300" width="350" height="12" rx="5" fill="rgba(0,0,0,0.08)" />
        
        {/* Section compétences */}
        <rect x="30" y="340" width="440" height="25" rx="5" fill="hsl(16, 100%, 65%)" />
        <rect x="30" y="385" width="100" height="40" rx="8" fill="rgba(211, 100%, 50%, 0.15)" stroke="hsl(211, 100%, 50%)" strokeWidth="2" />
        <rect x="150" y="385" width="100" height="40" rx="8" fill="rgba(211, 100%, 50%, 0.15)" stroke="hsl(211, 100%, 50%)" strokeWidth="2" />
        <rect x="270" y="385" width="100" height="40" rx="8" fill="rgba(211, 100%, 50%, 0.15)" stroke="hsl(211, 100%, 50%)" strokeWidth="2" />
        
        {/* Section formation */}
        <rect x="30" y="450" width="440" height="25" rx="5" fill="hsl(211, 100%, 50%)" />
        <rect x="30" y="495" width="440" height="15" rx="5" fill="rgba(0,0,0,0.1)" />
        <rect x="30" y="520" width="300" height="12" rx="5" fill="rgba(0,0,0,0.08)" />
        <rect x="30" y="545" width="400" height="12" rx="5" fill="rgba(0,0,0,0.08)" />
      </g>
      
      {/* Éléments décoratifs */}
      <circle cx="700" cy="150" r="40" fill="rgba(255,255,255,0.2)" />
      <circle cx="100" cy="700" r="35" fill="rgba(255,255,255,0.15)" />
      <rect x="650" y="650" width="80" height="80" rx="10" fill="rgba(255,255,255,0.15)" transform="rotate(45 690 690)" />
    </svg>
  );
};

export default PortfolioCVImage;

