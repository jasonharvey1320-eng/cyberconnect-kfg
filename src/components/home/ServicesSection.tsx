import { Link } from "react-router-dom";
import {
  Wifi,
  Printer,
  FileText,
  Palette,
  GraduationCap,
  Phone,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import cyberCafeImage from "@/assets/Cyber Café & Internet.png";
import impressionImage from "@/assets/Impression & Photocopie.png";
import bureautiqueImage from "@/assets/Bureautique.png";
import infographieImage from "@/assets/Infographie & Design.png";
import formationImage from "@/assets/Formation Informatique.png";
import servicesDiversImage from "@/assets/Services Divers.png";

const services = [
  {
    icon: Wifi,
    title: "Cyber Café & Internet",
    description: "Navigation internet haut débit, postes modernes, WiFi gratuit",
    price: "À partir de 100 FCFA/h",
    color: "text-primary",
    bgColor: "bg-primary/10",
    image: cyberCafeImage,
  },
  {
    icon: Printer,
    title: "Impression & Photocopie",
    description: "N&B 25 FCFA, Couleur 100 FCFA, Reliure, Plastification",
    price: "Dès 25 FCFA/page",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    image: impressionImage,
  },
  {
    icon: FileText,
    title: "Bureautique",
    description: "Saisie documents, Mise en page, CV professionnels",
    price: "CV: 2,000 FCFA",
    color: "text-accent",
    bgColor: "bg-accent/10",
    image: bureautiqueImage,
  },
  {
    icon: Palette,
    title: "Infographie & Design",
    description: "Logos, Flyers, Cartes de visite, Design sur-mesure",
    price: "Logo: 10,000 FCFA",
    color: "text-primary",
    bgColor: "bg-primary/10",
    image: infographieImage,
  },
  {
    icon: GraduationCap,
    title: "Formation Informatique",
    description: "Word, Excel, PowerPoint, Photoshop, Montage vidéo",
    price: "25,000 FCFA/module",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    image: formationImage,
  },
  {
    icon: Phone,
    title: "Services Divers",
    description: "Scan, Transfert Mobile Money, Recharge téléphonique",
    price: "Services variés",
    color: "text-accent",
    bgColor: "bg-accent/10",
    image: servicesDiversImage,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-background pattern-dots relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-gradient">
            Nos Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une gamme complète de services numériques pour répondre à tous vos
            besoins
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link key={index} to="/services" className="block">
              <Card
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 cursor-pointer shiny-border overflow-hidden animate-fade-in floating-particles card-hover-effect h-full relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-background/75 via-background/70 to-background/70 group-hover:from-background/70 group-hover:via-background/75 group-hover:to-background/75 transition-all duration-300" />
                
                <CardContent className="p-6 relative z-10">
                  <div
                    className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl`}
                  >
                    <service.icon className={`w-7 h-7 ${service.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold">
                      {service.price}
                    </span>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      En savoir plus →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="gradient-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
            <Link to="/services">Voir Tous les Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
