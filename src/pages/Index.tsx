import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import UpcomingSessionsSection from "@/components/UpcomingSessionsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import StudiesSection from "@/components/StudiesSection";
import OfferingsSection from "@/components/OfferingsSection";
import PhilosophySection from "@/components/PhilosophySection";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <AnimatedSection>
          <HeroSection />
        </AnimatedSection>
        <AnimatedSection>
          <UpcomingSessionsSection />
        </AnimatedSection>
        <AnimatedSection>
          <TestimonialsSection />
        </AnimatedSection>
        <AnimatedSection>
          <AboutSection />
        </AnimatedSection>
        <AnimatedSection>
          <StudiesSection />
        </AnimatedSection>
        <AnimatedSection>
          <OfferingsSection />
        </AnimatedSection>
        <AnimatedSection>
          <PhilosophySection />
        </AnimatedSection>
        <AnimatedSection>
          <ContactSection />
        </AnimatedSection>
      </main>
      <AnimatedSection>
        <SiteFooter />
      </AnimatedSection>
    </div>
  );
};

export default Index;
