import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Wifi,
  Printer,
  FileText,
  Palette,
  GraduationCap,
  Scan,
  Stamp,
  Calculator,
} from "lucide-react";
import { ServicesImage, ImageWithFallback } from "@/lib/generated-images";
import servicesImage from "@/assets/Services1.png";
import services1Image from "@/assets/Services1.png";

const Services = () => {
  const services = [
    {
      icon: Wifi,
      title: "Cyber Café & Internet",
      description:
        "Connexion internet haut débit fibre optique. Postes modernes équipés Windows 11. Idéal pour navigation, téléchargements, streaming, réseaux sociaux, recherches, emails.",
      tarifs: [
        { label: "1 heure", price: "100 FCFA" },
        { label: "3 heures", price: "250 FCFA" },
        { label: "Journée complète", price: "500 FCFA" },
        { label: "Forfait semaine", price: "3,000 FCFA" },
        { label: "Forfait mois", price: "10,000 FCFA" },
      ],
      equipements: [
        "15 postes PC performants",
        "WiFi gratuit clients",
        "Imprimantes en réseau",
        "Casques audio disponibles",
      ],
    },
    {
      icon: Printer,
      title: "Impression & Photocopie",
      description:
        "Services d'impression professionnelle en noir & blanc et couleur. Impression photos, documents, affiches. Reliure, plastification et laminage.",
      tarifs: [
        { label: "Impression N&B A4", price: "25 FCFA" },
        { label: "Impression N&B A3", price: "50 FCFA" },
        { label: "Impression Couleur A4", price: "100 FCFA" },
        { label: "Impression Couleur A3", price: "200 FCFA" },
        { label: "Photo 10x15", price: "200 FCFA" },
        { label: "Photo A4", price: "500 FCFA" },
        { label: "Photocopie N&B", price: "25 FCFA" },
        { label: "Photocopie Couleur", price: "75 FCFA" },
        { label: "Reliure spirale", price: "500 FCFA" },
        { label: "Reliure thermique", price: "1,000 FCFA" },
        { label: "Plastification A4", price: "300 FCFA" },
      ],
    },
    {
      icon: FileText,
      title: "Bureautique & Saisie",
      description:
        "Saisie de documents, création de CV professionnels, mise en page de rapports et mémoires, présentations PowerPoint.",
      tarifs: [
        { label: "Saisie page simple", price: "200 FCFA" },
        { label: "Saisie page complexe", price: "500 FCFA" },
        { label: "CV standard", price: "2,000 FCFA" },
        { label: "CV premium design", price: "5,000 FCFA" },
        { label: "Lettre motivation", price: "1,000 FCFA" },
        { label: "Package CV+Lettre", price: "6,000 FCFA" },
        { label: "Mise en page documents", price: "1,000 FCFA" },
        { label: "Rapports/Mémoires", price: "5,000 FCFA" },
        { label: "PowerPoint (10 slides)", price: "3,000 FCFA" },
        { label: "Traduction FR↔EN", price: "500 FCFA/page" },
      ],
    },
    {
      icon: Palette,
      title: "Infographie & Design",
      description:
        "Création de logos, cartes de visite, flyers, affiches, banderoles. Design pour réseaux sociaux. Retouche photo professionnelle.",
      tarifs: [
        { label: "Logo simple", price: "10,000 FCFA" },
        { label: "Logo professionnel", price: "25,000 FCFA" },
        { label: "Logo premium", price: "50,000 FCFA" },
        { label: "Charte graphique", price: "75,000 FCFA" },
        { label: "Carte visite (500)", price: "15,000 FCFA" },
        { label: "Flyer A5 (100)", price: "5,000 FCFA" },
        { label: "Flyer A4 (100)", price: "8,000 FCFA" },
        { label: "Brochure 3 volets", price: "10,000 FCFA" },
        { label: "Affiche A3", price: "7,000 FCFA" },
        { label: "Banderole (par m²)", price: "15,000 FCFA" },
        { label: "Post réseaux sociaux", price: "2,000 FCFA" },
        { label: "Retouche photo", price: "2,000 FCFA" },
      ],
    },
    {
      icon: GraduationCap,
      title: "Formation Informatique",
      description:
        "Modules de formation en bureautique, infographie, web et multimédia. Certificat délivré à la fin de chaque formation.",
      tarifs: [
        { label: "Word (débutant/avancé)", price: "25,000 FCFA" },
        { label: "Excel (débutant/avancé)", price: "25,000 FCFA" },
        { label: "PowerPoint", price: "25,000 FCFA" },
        { label: "Photoshop", price: "40,000 FCFA" },
        { label: "Illustrator", price: "40,000 FCFA" },
        { label: "Montage vidéo", price: "50,000 FCFA" },
        { label: "Pack Bureautique complet", price: "60,000 FCFA" },
        { label: "Pack Infographie", price: "100,000 FCFA" },
      ],
      note: "Durée: 1 mois (8 séances) par module",
    },
    {
      icon: Scan,
      title: "Services Divers",
      description:
        "Scan et numérisation, gravure CD/DVD, transferts Mobile Money, recharges téléphoniques.",
      tarifs: [
        { label: "Scan document A4", price: "100 FCFA" },
        { label: "Scan photo", price: "200 FCFA" },
        { label: "CD vierge + gravure", price: "300 FCFA" },
        { label: "DVD vierge + gravure", price: "500 FCFA" },
        { label: "Transfert Mobile Money", price: "Commission 2%" },
        { label: "Recharge téléphonique", price: "Disponible" },
        { label: "Laminage documents", price: "500 FCFA" },
      ],
    },
    {
      icon: Stamp,
      title: "Tampons & Cachets",
      description: "Fabrication de tampons sur mesure pour entreprises et professionnels. Délai 24-48h.",
      tarifs: [
        { label: "Tampon bois simple", price: "3,000 FCFA" },
        { label: "Tampon automatique", price: "5,000 FCFA" },
        { label: "Tampon personnalisé", price: "7,000 FCFA" },
      ],
    },
    {
      icon: Calculator,
      title: "Impression Grand Format",
      description: "Bâches publicitaires, kakémonos, roll-ups, panneaux PVC, autocollants.",
      tarifs: [
        { label: "Bâche publicitaire", price: "5,000 FCFA/m²" },
        { label: "Kakémono", price: "15,000 FCFA" },
        { label: "Roll-up", price: "25,000 FCFA" },
        { label: "Autocollants", price: "500 FCFA" },
        { label: "Panneau PVC", price: "Sur devis" },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20 relative">
        {/* Hero */}
        <div className="relative h-[600px] md:h-[700px] overflow-hidden pattern-dots">
          <div className="absolute inset-0 overflow-hidden">
            <ImageWithFallback
              src={services1Image}
              alt="Services"
              fallback={<ServicesImage className="w-full h-full object-cover" />}
              className="w-full h-full object-cover image-glow transition-transform duration-1000 scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/20" />
          </div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white animate-fade-in">
              <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6 leading-tight drop-shadow-lg">
                Nos Services Détaillés
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90">
                Des solutions complètes pour tous vos besoins numériques et
                créatifs
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="container mx-auto px-4 my-8">
          <div className="relative h-[400px] md:h-[500px] overflow-hidden pattern-dots rounded-2xl shiny-image image-shine floating-particles group">
            <ImageWithFallback
              src={servicesImage}
              alt="Services"
              fallback={<ServicesImage className="w-full h-full object-cover" />}
              className="w-full h-full object-cover image-glow group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
          </div>
        </div>

        {/* Services */}
        <div className="container mx-auto px-4 py-16 pattern-grid relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
          <div className="space-y-12 relative z-10">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden shiny-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group animate-fade-in floating-particles card-hover-effect" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-primary/20">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animated-glow">
                      <service.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">
                        {service.title}
                      </CardTitle>
                      <p className="text-muted-foreground text-sm mt-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  {service.equipements && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Équipements:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.equipements.map((eq, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-sm text-muted-foreground">
                              {eq}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <h4 className="font-semibold mb-3">Tarifs:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {service.tarifs.map((tarif, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-center p-3 rounded-lg bg-muted/50"
                      >
                        <span className="text-sm">{tarif.label}</span>
                        <span className="font-semibold text-primary">
                          {tarif.price}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {service.note && (
                    <p className="text-sm text-muted-foreground mt-4 italic">
                      {service.note}
                    </p>
                  )}
                  
                  <div className="mt-6">
                    <Button className="gradient-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
                      <Link to="/contact">Commander ce Service</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12 relative pattern-dots overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">
              Besoin d'un Service Personnalisé ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contactez-nous pour un devis sur mesure adapté à vos besoins
            </p>
            <Button size="lg" className="gradient-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
              <Link to="/contact">Demander un Devis Gratuit</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
