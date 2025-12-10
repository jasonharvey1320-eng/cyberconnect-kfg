import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ContactImage, ImageWithFallback } from "@/lib/generated-images";
import contact1Image from "@/assets/Contact1.png";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20 relative">
        {/* Hero */}
        <div className="relative h-[600px] md:h-[700px] overflow-hidden pattern-dots">
          <div className="absolute inset-0 overflow-hidden">
            <ImageWithFallback
              src={contact1Image}
              alt="Contact"
              fallback={<ContactImage className="w-full h-full object-cover" />}
              className="w-full h-full object-cover image-glow transition-transform duration-1000 scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/20" />
          </div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white animate-fade-in">
              <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6 leading-tight drop-shadow-lg">
                Contactez-Nous
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90">
                Nous sommes là pour répondre à toutes vos questions
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="container mx-auto px-4 my-8">
          <div className="relative h-[400px] md:h-[500px] overflow-hidden pattern-dots rounded-2xl shiny-image image-shine floating-particles group">
            <ImageWithFallback
              src={contact1Image}
              alt="Contact"
              fallback={<ContactImage className="w-full h-full object-cover" />}
              className="w-full h-full object-cover image-glow group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 pattern-grid relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            {/* Contact Form */}
            <div className="shiny-border rounded-xl p-6 bg-background animate-fade-in floating-particles">
              <h2 className="font-heading font-bold text-2xl mb-6 text-gradient">
                Envoyez-nous un Message
              </h2>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce" />
                  <h3 className="font-heading font-semibold text-xl mb-2 text-primary">
                    Message envoyé avec succès !
                  </h3>
                  <p className="text-muted-foreground">
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom *"
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Votre email *"
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Votre téléphone"
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Votre message *"
                      rows={6}
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full gradient-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Envoyer le Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-heading font-bold text-2xl mb-6 text-gradient">
                Nos Coordonnées
              </h2>
              <div className="space-y-4">
                <Card className="shiny-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group floating-particles card-hover-effect">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg animated-glow">
                      <MapPin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Adresse</h3>
                      <p className="text-muted-foreground">
                        Douala, Cameroun
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shiny-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group floating-particles card-hover-effect">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg animated-glow">
                      <Phone className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Téléphone</h3>
                      <a
                        href="tel:+237"
                        className="text-muted-foreground hover:text-primary"
                      >
                        +237 693 37 87 12
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shiny-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group floating-particles card-hover-effect">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg animated-glow">
                      <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:contact@cyberconnect.cm"
                        className="text-muted-foreground hover:text-primary"
                      >
                        contact@cyberconnect.cm
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shiny-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group floating-particles card-hover-effect">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg animated-glow">
                      <Clock className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Horaires</h3>
                      <p className="text-muted-foreground">
                        Lun - Dim: 7h00 - 22h00
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Jours fériés: 9h00 - 20h00
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
