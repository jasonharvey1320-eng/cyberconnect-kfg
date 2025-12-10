import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Marie Kouam",
    service: "CV Professionnel",
    comment:
      "Service excellent ! Mon CV a été magnifiquement réalisé et j'ai décroché un entretien rapidement. Merci !",
    rating: 5,
  },
  {
    name: "Jean-Paul N.",
    service: "Logo & Carte de Visite",
    comment:
      "Très satisfait du logo créé pour mon entreprise. Design moderne et professionnel. Je recommande vivement.",
    rating: 5,
  },
  {
    name: "Fatima B.",
    service: "Impression Flyers",
    comment:
      "Impression rapide et de qualité. Les couleurs sont parfaites et les prix très compétitifs. Top !",
    rating: 5,
  },
  {
    name: "Emmanuel T.",
    service: "Formation Excel",
    comment:
      "Formation très complète et formateur patient. J'ai beaucoup appris et je me sens maintenant à l'aise avec Excel.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/30 to-background pattern-grid relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-gradient">
            Témoignages Clients
          </h2>
          <p className="text-lg text-muted-foreground">
            Ce que nos clients disent de nos services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 shiny-border group animate-fade-in floating-particles card-hover-effect" style={{ animationDelay: `${index * 150}ms` }}>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-secondary text-secondary group-hover:scale-110 transition-transform"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.service}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
