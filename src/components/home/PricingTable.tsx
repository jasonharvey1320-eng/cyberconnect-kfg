import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pricingData = [
  {
    category: "Internet",
    items: [
      { service: "1 heure", price: "100 FCFA" },
      { service: "Journée complète", price: "500 FCFA" },
      { service: "Forfait semaine", price: "3,000 FCFA" },
    ],
  },
  {
    category: "Impression",
    items: [
      { service: "N&B A4", price: "25 FCFA" },
      { service: "Couleur A4", price: "100 FCFA" },
      { service: "Photocopie", price: "25 FCFA" },
    ],
  },
  {
    category: "Bureautique",
    items: [
      { service: "CV professionnel", price: "2,000 FCFA" },
      { service: "Saisie/page", price: "200 FCFA" },
      { service: "Mise en page", price: "1,000 FCFA" },
    ],
  },
  {
    category: "Infographie",
    items: [
      { service: "Logo simple", price: "10,000 FCFA" },
      { service: "Flyer A5", price: "5,000 FCFA" },
      { service: "Carte visite (500)", price: "15,000 FCFA" },
    ],
  },
];

const PricingTable = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background pattern-grid relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-gradient">
            Nos Tarifs Populaires
          </h2>
          <p className="text-lg text-muted-foreground">
            Tarifs transparents et compétitifs pour tous nos services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {pricingData.map((category, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 shiny-border overflow-hidden group">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
                <CardTitle className="text-center text-primary text-xl">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        {item.service}
                      </span>
                      <span className="font-semibold text-primary">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center shiny-border animated-gradient border-primary/20 shadow-elegant hover:shadow-xl transition-all duration-300">
          <p className="text-lg font-semibold mb-2 text-primary">
            Tarifs dégressifs pour volumes importants
          </p>
          <p className="text-muted-foreground mb-4">
            Contactez-nous pour un devis personnalisé adapté à vos besoins
          </p>
          <Button className="gradient-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
            <Link to="/contact">Demander un Devis</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
