import { Link } from "react-router-dom";
import portfolioCards from "@/assets/portfolio-cards.jpg";
import portfolioLogos from "@/assets/portfolio-logos.jpg";
import portfolioCV from "@/assets/portfolio-cv.jpg";
import { Button } from "@/components/ui/button";
import {
  PortfolioLogosImage,
  PortfolioCardsImage,
  PortfolioCVImage,
  ImageWithFallback,
} from "@/lib/generated-images";

const portfolioItems = [
  {
    image: portfolioLogos,
    title: "Logos Professionnels",
    category: "Identité Visuelle",
  },
  {
    image: portfolioCards,
    title: "Cartes & Flyers",
    category: "Marketing",
  },
  {
    image: portfolioCV,
    title: "CV Modernes",
    category: "Bureautique",
  },
];

const PortfolioGallery = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Nos Réalisations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez quelques exemples de nos créations graphiques et services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {portfolioItems.map((item, index) => (
            <Link
              key={index}
              to="/portfolio"
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer shiny-image image-shine floating-particles block"
            >
              <div className="aspect-square overflow-hidden bg-muted/20">
                {index === 0 ? (
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    fallback={<PortfolioLogosImage className="w-full h-full object-cover" />}
                    className="w-full h-full object-cover image-glow group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : index === 1 ? (
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    fallback={<PortfolioCardsImage className="w-full h-full object-cover" />}
                    className="w-full h-full object-cover image-glow group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    fallback={<PortfolioCVImage className="w-full h-full object-cover" />}
                    className="w-full h-full object-cover image-glow group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end backdrop-blur-sm">
                <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs mb-2 border border-white/30">
                    {item.category}
                  </span>
                  <h3 className="font-heading font-semibold text-xl drop-shadow-lg">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
            <Link to="/portfolio">Voir Tout le Portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
