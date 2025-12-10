import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/home/HeroSlider";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PricingTable from "@/components/home/PricingTable";
import PortfolioGallery from "@/components/home/PortfolioGallery";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSlider />
        <ServicesSection />
        <WhyChooseUs />
        <PricingTable />
        <PortfolioGallery />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
