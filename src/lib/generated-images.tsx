import React from "react";

// Fonction pour convertir un composant SVG en data URL
const svgToDataUrl = (svgComponent: React.ReactElement): string => {
  const svgString = React.isValidElement(svgComponent)
    ? `<svg xmlns="http://www.w3.org/2000/svg" ${svgComponent.props.viewBox ? `viewBox="${svgComponent.props.viewBox}"` : ""}>${svgComponent.props.children}</svg>`
    : "";
  
  // Pour simplifier, nous allons exporter directement les composants SVG
  // et les utiliser comme composants React plutôt que comme data URLs
  return "";
};

// Export des composants SVG directement
export { default as HeroCyberImage } from "@/components/ui/generated-images/HeroCyberImage";
export { default as HeroDesignImage } from "@/components/ui/generated-images/HeroDesignImage";
export { default as HeroPrintingImage } from "@/components/ui/generated-images/HeroPrintingImage";
export { default as PortfolioLogosImage } from "@/components/ui/generated-images/PortfolioLogosImage";
export { default as PortfolioCardsImage } from "@/components/ui/generated-images/PortfolioCardsImage";
export { default as PortfolioCVImage } from "@/components/ui/generated-images/PortfolioCVImage";
export { default as ServicesImage } from "@/components/ui/generated-images/ServicesImage";
export { default as TarifsImage } from "@/components/ui/generated-images/TarifsImage";
export { default as ContactImage } from "@/components/ui/generated-images/ContactImage";
export { default as PortfolioHeroImage } from "@/components/ui/generated-images/PortfolioHeroImage";

// Composant wrapper pour utiliser les images SVG dans une balise img
export const ImageWithFallback = ({
  src,
  alt,
  fallback,
  className = "",
  style,
  ...props
}: {
  src?: string;
  alt: string;
  fallback: React.ReactElement;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}) => {
  const [imageError, setImageError] = React.useState(false);
  const [imageLoaded, setImageLoaded] = React.useState(false);

  React.useEffect(() => {
    if (src) {
      const img = new Image();
      img.onload = () => setImageLoaded(true);
      img.onerror = () => {
        setImageError(true);
        setImageLoaded(false);
      };
      img.src = src;
    } else {
      setImageError(true);
    }
  }, [src]);

  // Afficher le fallback si l'image n'est pas chargée ou s'il y a une erreur
  if (!src || imageError || !imageLoaded) {
    return (
      <div className={className} style={{ width: '100%', height: '100%', ...style }} {...props}>
        {React.cloneElement(fallback, { 
          className: `${fallback.props.className || ''} w-full h-full`,
          style: { width: '100%', height: '100%', objectFit: 'cover', ...fallback.props.style }
        })}
      </div>
    );
  }

  // Afficher l'image réelle si elle est chargée
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={() => setImageError(true)}
      onLoad={() => setImageLoaded(true)}
      {...props}
    />
  );
};

