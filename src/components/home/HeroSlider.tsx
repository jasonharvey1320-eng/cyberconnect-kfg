import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCyber from "@/assets/hero-cyber.jpg";
import heroDesign from "@/assets/hero-design.jpg";
import heroPrinting from "@/assets/hero-printing.jpg";
import {
  HeroCyberImage,
  HeroDesignImage,
  HeroPrintingImage,
  ImageWithFallback,
} from "@/lib/generated-images";

const slides = [
  {
    image: heroCyber,
    title: "Services Numériques Complets",
    subtitle: "Internet haut débit • Cyber café moderne • WiFi gratuit",
  },
  {
    image: heroDesign,
    title: "Créations Graphiques Professionnelles",
    subtitle: "Logos • Flyers • Cartes de visite • Design sur-mesure",
  },
  {
    image: heroPrinting,
    title: "Impression & Photocopie Express",
    subtitle: "N&B 25 FCFA • Couleur 100 FCFA • Reliure • Plastification",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden pattern-dots">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0 overflow-hidden">
            {index === 0 ? (
              <ImageWithFallback
                src={slide.image}
                alt={slide.title}
                fallback={<HeroCyberImage className="w-full h-full object-cover" />}
                className="w-full h-full object-cover image-glow transition-transform duration-1000 scale-110"
                style={{
                  opacity: index === currentSlide ? 1 : 0,
                  transition: 'opacity 1s ease-in-out'
                }}
              />
            ) : index === 1 ? (
              <ImageWithFallback
                src={slide.image}
                alt={slide.title}
                fallback={<HeroDesignImage className="w-full h-full object-cover" />}
                className="w-full h-full object-cover image-glow transition-transform duration-1000 scale-110"
                style={{
                  opacity: index === currentSlide ? 1 : 0,
                  transition: 'opacity 1s ease-in-out'
                }}
              />
            ) : (
              <ImageWithFallback
                src={slide.image}
                alt={slide.title}
                fallback={<HeroPrintingImage className="w-full h-full object-cover" />}
                className="w-full h-full object-cover image-glow transition-transform duration-1000 scale-110"
                style={{
                  opacity: index === currentSlide ? 1 : 0,
                  transition: 'opacity 1s ease-in-out'
                }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/20" />
          </div>

          {/* Content */}
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white animate-fade-in">
              <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link to="/services">Découvrir Nos Services</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link to="/contact">Demander un Devis</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/40 hover:scale-110 transition-all shadow-lg hover:shadow-xl animated-glow z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-7 h-7 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/40 hover:scale-110 transition-all shadow-lg hover:shadow-xl animated-glow z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-7 h-7 text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-10 h-3 shadow-lg animated-glow"
                : "bg-white/50 hover:bg-white/75 w-3 h-3 hover:scale-125"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
