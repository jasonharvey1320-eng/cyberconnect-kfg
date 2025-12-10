import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import portfolioCards from "@/assets/portfolio-cards.jpg";
import portfolioLogos from "@/assets/portfolio-logos.jpg";
import portfolioCV from "@/assets/portfolio-cv.jpg";
import {
  PortfolioLogosImage,
  PortfolioCardsImage,
  PortfolioCVImage,
  PortfolioHeroImage,
  ImageWithFallback,
} from "@/lib/generated-images";
import portfolioImage from "@/assets/Portfolio.png";

const Portfolio = () => {
  const [filter, setFilter] = useState("Tous");

  const categories = [
    "Tous",
    "Logos",
    "Flyers",
    "Cartes de Visite",
    "CV",
    "Affiches",
  ];

  const portfolioItems = [
    {
      image: portfolioLogos,
      title: "Logos Professionnels",
      category: "Logos",
      description: "Collection de logos créés pour diverses entreprises",
    },
    {
      image: portfolioCards,
      title: "Cartes & Flyers Marketing",
      category: "Flyers",
      description: "Designs impactants pour supports marketing",
    },
    {
      image: portfolioCV,
      title: "CV Modernes",
      category: "CV",
      description: "Templates professionnels et épurés",
    },
    {
      image: portfolioLogos,
      title: "Identités Visuelles",
      category: "Logos",
      description: "Création de marques complètes",
    },
    {
      image: portfolioCards,
      title: "Brochures & Dépliants",
      category: "Flyers",
      description: "Supports de communication multi-pages",
    },
    {
      image: portfolioCV,
      title: "Documents Bureautiques",
      category: "CV",
      description: "Mise en page professionnelle",
    },
    {
      image: portfolioCards,
      title: "Cartes de Visite Premium",
      category: "Cartes de Visite",
      description: "Designs élégants et mémorables",
    },
    {
      image: portfolioLogos,
      title: "Affiches Publicitaires",
      category: "Affiches",
      description: "Créations grand format attractives",
    },
    {
      image: portfolioCards,
      title: "Designs Réseaux Sociaux",
      category: "Flyers",
      description: "Posts optimisés pour engagement",
    },
  ];

  const filteredItems =
    filter === "Tous"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20 relative">
        {/* Hero */}
        <div className="relative h-[600px] md:h-[700px] overflow-hidden pattern-dots">
          <div className="absolute inset-0 overflow-hidden">
            <ImageWithFallback
              src={portfolioImage}
              alt="Portfolio"
              fallback={<PortfolioHeroImage className="w-full h-full object-cover" />}
              className="w-full h-full object-cover image-glow transition-transform duration-1000 scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/20" />
          </div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white animate-fade-in">
              <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6 leading-tight drop-shadow-lg">
                Notre Portfolio
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90">
                Découvrez nos réalisations en design graphique, bureautique et
                création visuelle
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="container mx-auto px-4 my-8">
          <div className="relative h-[400px] md:h-[500px] overflow-hidden pattern-dots rounded-2xl shiny-image image-shine floating-particles group">
            <ImageWithFallback
              src={portfolioImage}
              alt="Portfolio"
              fallback={<PortfolioHeroImage className="w-full h-full object-cover" />}
              className="w-full h-full object-cover image-glow group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-b from-muted/30 via-primary/5 to-muted/30 py-12 pattern-grid relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="font-heading font-bold text-4xl text-gradient mb-2">
                  500+
                </div>
                <div className="text-muted-foreground text-sm">
                  Projets Réalisés
                </div>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-4xl text-gradient mb-2">
                  300+
                </div>
                <div className="text-muted-foreground text-sm">
                  Logos Créés
                </div>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-4xl text-gradient mb-2">
                  200+
                </div>
                <div className="text-muted-foreground text-sm">
                  CV Rédigés
                </div>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-4xl text-gradient mb-2">
                  100%
                </div>
                <div className="text-muted-foreground text-sm">
                  Clients Satisfaits
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={
                  filter === category
                    ? "gradient-primary"
                    : "border-primary text-primary hover:bg-primary hover:text-white"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="container mx-auto px-4 pb-16 pattern-dots relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer animate-fade-in shiny-image image-shine floating-particles"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden bg-muted/20">
                  {item.category === "Logos" ? (
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      fallback={<PortfolioLogosImage className="w-full h-full object-cover" />}
                      className="w-full h-full object-cover image-glow group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : item.category === "Flyers" || item.category === "Cartes de Visite" ? (
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
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 backdrop-blur-sm">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs mb-3 border border-white/30 shadow-lg">
                      {item.category}
                    </span>
                    <h3 className="font-heading font-semibold text-xl text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/90 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-16 pattern-dots relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="font-heading font-bold text-3xl mb-4 text-gradient">
              Prêt à Créer Votre Projet ?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Que ce soit pour un logo, des cartes de visite, un CV ou tout autre
              projet créatif, nous sommes là pour vous aider
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
                <Link to="/contact">Demander un Devis</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link to="/services">Voir Nos Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
