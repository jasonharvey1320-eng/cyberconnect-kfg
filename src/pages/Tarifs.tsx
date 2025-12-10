import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TarifsImage, ImageWithFallback } from "@/lib/generated-images";
import tarifsImage from "@/assets/Tarifs.png";

const Tarifs = () => {
  const categories = [
    {
      name: "Internet & Cyber Café",
      items: [
        { service: "Internet 1 heure", price: "100 FCFA" },
        { service: "Internet 3 heures", price: "250 FCFA" },
        { service: "Internet journée", price: "500 FCFA" },
        { service: "Forfait semaine", price: "3,000 FCFA" },
        { service: "Forfait mois", price: "10,000 FCFA" },
        { service: "WiFi gratuit", price: "Gratuit pour clients" },
      ],
    },
    {
      name: "Impression & Photocopie",
      items: [
        { service: "Impression N&B A4", price: "25 FCFA" },
        { service: "Impression N&B A3", price: "50 FCFA" },
        { service: "Impression Couleur A4", price: "100 FCFA" },
        { service: "Impression Couleur A3", price: "200 FCFA" },
        { service: "Photo 10x15", price: "200 FCFA" },
        { service: "Photo A4", price: "500 FCFA" },
        { service: "Photocopie N&B A4", price: "25 FCFA" },
        { service: "Photocopie Couleur", price: "75 FCFA" },
        { service: "Recto-verso", price: "+10 FCFA" },
      ],
    },
    {
      name: "Reliure & Finitions",
      items: [
        { service: "Reliure spirale", price: "500 FCFA" },
        { service: "Reliure thermique", price: "1,000 FCFA" },
        { service: "Plastification A4", price: "300 FCFA" },
        { service: "Plastification carte", price: "200 FCFA" },
        { service: "Laminage document", price: "500 FCFA" },
        { service: "Perforation", price: "100 FCFA" },
      ],
    },
    {
      name: "Bureautique & Saisie",
      items: [
        { service: "Saisie page simple", price: "200 FCFA" },
        { service: "Saisie page complexe", price: "500 FCFA" },
        { service: "Saisie manuscrit", price: "300 FCFA/page" },
        { service: "CV standard", price: "2,000 FCFA" },
        { service: "CV premium design", price: "5,000 FCFA" },
        { service: "Lettre motivation", price: "1,000 FCFA" },
        { service: "Package CV + Lettre", price: "6,000 FCFA" },
        { service: "Mise en page Word", price: "1,000 FCFA" },
        { service: "Rapport/Mémoire", price: "5,000 FCFA" },
        { service: "PowerPoint (10 slides)", price: "3,000 FCFA" },
        { service: "Traduction FR↔EN", price: "500 FCFA/page" },
      ],
    },
    {
      name: "Infographie - Identité Visuelle",
      items: [
        { service: "Logo simple", price: "10,000 FCFA" },
        { service: "Logo professionnel", price: "25,000 FCFA" },
        { service: "Logo premium", price: "50,000 FCFA" },
        { service: "Charte graphique", price: "75,000 FCFA" },
      ],
    },
    {
      name: "Supports Imprimés",
      items: [
        { service: "Carte visite (500 ex)", price: "15,000 FCFA" },
        { service: "Flyer A5 (100 ex)", price: "5,000 FCFA" },
        { service: "Flyer A4 (100 ex)", price: "8,000 FCFA" },
        { service: "Brochure 3 volets", price: "10,000 FCFA" },
        { service: "Affiche A3", price: "7,000 FCFA" },
        { service: "Banderole (par m²)", price: "15,000 FCFA" },
      ],
    },
    {
      name: "Design Numérique",
      items: [
        { service: "Post réseaux sociaux", price: "2,000 FCFA" },
        { service: "Bannière Facebook", price: "3,000 FCFA" },
        { service: "Story Instagram", price: "1,500 FCFA" },
        { service: "Template newsletter", price: "5,000 FCFA" },
        { service: "Retouche photo", price: "2,000 FCFA" },
        { service: "Montage photo", price: "5,000 FCFA" },
        { service: "Détourage image", price: "1,000 FCFA" },
      ],
    },
    {
      name: "Impression Grand Format",
      items: [
        { service: "Bâche publicitaire", price: "5,000 FCFA/m²" },
        { service: "Kakémono", price: "15,000 FCFA" },
        { service: "Roll-up", price: "25,000 FCFA" },
        { service: "Panneau PVC", price: "Sur devis" },
        { service: "Autocollants", price: "500 FCFA" },
      ],
    },
    {
      name: "Tampons & Cachets",
      items: [
        { service: "Tampon bois simple", price: "3,000 FCFA" },
        { service: "Tampon automatique", price: "5,000 FCFA" },
        { service: "Tampon personnalisé", price: "7,000 FCFA" },
        { service: "Délai fabrication", price: "24-48h" },
      ],
    },
    {
      name: "Formation Informatique",
      items: [
        { service: "Word (1 mois)", price: "25,000 FCFA" },
        { service: "Excel (1 mois)", price: "25,000 FCFA" },
        { service: "PowerPoint (1 mois)", price: "25,000 FCFA" },
        { service: "Photoshop", price: "40,000 FCFA" },
        { service: "Illustrator", price: "40,000 FCFA" },
        { service: "Montage vidéo", price: "50,000 FCFA" },
        { service: "Pack Bureautique complet", price: "60,000 FCFA" },
        { service: "Pack Infographie", price: "100,000 FCFA" },
      ],
    },
    {
      name: "Services Divers",
      items: [
        { service: "Scan document A4", price: "100 FCFA" },
        { service: "Scan photo", price: "200 FCFA" },
        { service: "Scan carte identité", price: "200 FCFA" },
        { service: "CD vierge + gravure", price: "300 FCFA" },
        { service: "DVD vierge + gravure", price: "500 FCFA" },
        { service: "Transfert Mobile Money", price: "Commission 2%" },
        { service: "Recharge téléphonique", price: "Disponible" },
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
              src={tarifsImage}
              alt="Tarifs"
              fallback={<TarifsImage className="w-full h-full object-cover" />}
              className="w-full h-full object-cover image-glow transition-transform duration-1000 scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/20" />
          </div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white animate-fade-in">
              <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6 leading-tight drop-shadow-lg">
                Grille Tarifaire Complète
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90">
                Tarifs transparents et compétitifs pour tous nos services
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="container mx-auto px-4 my-8">
          <div className="relative h-[400px] md:h-[500px] overflow-hidden pattern-dots rounded-2xl shiny-image image-shine floating-particles group">
            <ImageWithFallback
              src={tarifsImage}
              alt="Tarifs"
              fallback={<TarifsImage className="w-full h-full object-cover" />}
              className="w-full h-full object-cover image-glow group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
          </div>
        </div>

        {/* Pricing Tables */}
        <div className="container mx-auto px-4 py-16 pattern-grid relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 shiny-border group animate-fade-in floating-particles card-hover-effect" style={{ animationDelay: `${index * 80}ms` }}>
                <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-primary/20">
                  <CardTitle className="text-xl text-primary">
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    {category.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-center py-2 border-b border-border/50 last:border-0"
                      >
                        <span className="text-sm text-muted-foreground">
                          {item.service}
                        </span>
                        <span className="font-semibold text-primary">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Promotions */}
          <div className="mt-12 space-y-6 relative z-10">
            <Card className="bg-gradient-to-r from-secondary/10 to-accent/10 border-secondary shiny-border animated-gradient shadow-elegant">
              <CardContent className="p-6">
                <h3 className="font-heading font-bold text-xl mb-3 text-secondary">
                  🎉 Promotions en Cours
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Tarifs dégressifs pour volumes importants (100+ pages)</li>
                  <li>✓ -10% sur formations pour étudiants (sur présentation carte)</li>
                  <li>✓ Pack CV + Lettre + Impression: 6,000 FCFA au lieu de 7,000</li>
                  <li>✓ Forfait internet mensuel: Économisez 20%</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary shiny-border shadow-elegant hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="font-heading font-bold text-xl mb-2 text-primary">
                  Besoin d'un Devis Personnalisé ?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Pour les projets spéciaux ou volumes importants, contactez-nous pour
                  un tarif sur mesure
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button className="gradient-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
                    <Link to="/contact">Demander un Devis</Link>
                  </Button>
                  <a
                    href="tel:+237"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Appeler Maintenant
                  </a>
                  <a
                    href="https://wa.me/237"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    WhatsApp
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tarifs;
