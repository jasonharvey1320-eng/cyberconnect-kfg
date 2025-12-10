import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-muted/30 via-primary/5 to-muted/30 border-t pattern-dots relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/3 to-transparent" />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shadow-lg animated-glow">
                <span className="text-white font-bold text-xl">CC</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg text-primary">
                  Cyber Connect
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Votre espace numérique tout-en-un pour tous vos besoins en services
              informatiques, impression et création graphique.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-6 shadow-lg hover:shadow-xl group"
              >
                <Facebook className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-6 shadow-lg hover:shadow-xl group"
              >
                <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Liens Rapides
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Accueil", path: "/" },
                { name: "Services", path: "/services" },
                { name: "Tarifs", path: "/tarifs" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Nos Services
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Cyber Café & Internet</li>
              <li>Impression & Photocopie</li>
              <li>Infographie & Design</li>
              <li>Formation Informatique</li>
              <li>Bureautique & Saisie</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Douala, Cameroun
                </span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+237"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +237 693 37 87 12
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:contact@cyberconnect.cm"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  contact@cyberconnect.cm
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <div>Lun - Dim: 7h00 - 22h00</div>
                  <div>Jours fériés: 9h00 - 20h00</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Cyber Connect.kfg Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
