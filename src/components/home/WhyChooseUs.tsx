import { Check, Zap, Award, Clock } from "lucide-react";

const features = [
  {
    icon: Check,
    title: "Équipements Modernes",
    description:
      "Matériel informatique et d'impression de dernière génération pour un service optimal",
  },
  {
    icon: Zap,
    title: "Service Rapide",
    description:
      "Délais respectés et exécution rapide de vos projets sans compromis sur la qualité",
  },
  {
    icon: Award,
    title: "Qualité Professionnelle",
    description:
      "Travail soigné et professionnel réalisé par des experts qualifiés",
  },
  {
    icon: Clock,
    title: "Ouvert 7j/7",
    description: "À votre service tous les jours de 7h à 22h, jours fériés inclus",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 pattern-dots relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-gradient">
            Pourquoi Nous Choisir ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des services de qualité, une équipe professionnelle et des tarifs
            compétitifs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-elegant transition-all duration-300 animate-fade-in hover:-translate-y-2 shiny-border floating-particles group card-hover-effect"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animated-glow">
                <feature.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { value: "500+", label: "Clients Satisfaits" },
            { value: "15", label: "Postes Internet" },
            { value: "5 ans", label: "D'Expérience" },
            { value: "24/7", label: "Support Client" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-heading font-bold text-4xl text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
