import { Link } from "react-router-dom";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white relative overflow-hidden pattern-dots">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary/20 to-primary opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6 drop-shadow-lg">
            Prêt à Démarrer Votre Projet ?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Contactez-nous dès maintenant pour un devis gratuit ou visitez-nous
            directement
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-white/20 group floating-particles animated-glow">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Phone className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-semibold mb-2">Appelez-nous</h3>
              <p className="text-sm text-white/80 mb-3">
                Lun-Dim: 7h00 - 22h00
              </p>
              <a
                href="tel:+237"
                className="text-white hover:text-secondary transition-colors font-medium"
              >
                +237 693 37 87 12
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-white/20 group floating-particles animated-glow" style={{ animationDelay: '0.2s' }}>
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <p className="text-sm text-white/80 mb-3">Réponse rapide 24/7</p>
              <a
                href="https://wa.me/237"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary transition-colors font-medium"
              >
                Chattez maintenant
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-white/20 group floating-particles animated-glow" style={{ animationDelay: '0.4s' }}>
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <MapPin className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-semibold mb-2">Visitez-nous</h3>
              <p className="text-sm text-white/80 mb-3">Douala, Cameroun</p>
              <a
                href="#"
                className="text-white hover:text-secondary transition-colors font-medium"
              >
                Voir l'itinéraire
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link to="/contact">Demander un Devis Gratuit</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link to="/services">Voir Nos Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
