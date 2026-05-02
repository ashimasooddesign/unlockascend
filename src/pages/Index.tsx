import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import UpcomingSessionsSection from "@/components/UpcomingSessionsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CredibilityStrip from "@/components/CredibilityStrip";
import AboutSection from "@/components/AboutSection";
import StudiesSection from "@/components/StudiesSection";
import OfferingsSection from "@/components/OfferingsSection";
import PhilosophySection from "@/components/PhilosophySection";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";
import AnimatedSection from "@/components/AnimatedSection";
import MarkDivider from "@/components/MarkDivider";
import BlogSection from "@/components/BlogSection";
import ForYouSection from "@/components/ForYouSection";
import ReturningSection from "@/components/ReturningSection";
import FaqSection from "@/components/FaqSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <AnimatedSection>
          <HeroSection />
        </AnimatedSection>
        <MarkDivider />
        <AnimatedSection>
          <ForYouSection />
        </AnimatedSection>
        <AnimatedSection>
          <ReturningSection />
        </AnimatedSection>
        <MarkDivider />
        <AnimatedSection>
          <UpcomingSessionsSection />
        </AnimatedSection>
        <MarkDivider />
        <AnimatedSection>
          <TestimonialsSection />
        </AnimatedSection>
        <AnimatedSection>
          <CredibilityStrip />
        </AnimatedSection>
        <MarkDivider />
        <AnimatedSection>
          <AboutSection />
        </AnimatedSection>
        <MarkDivider />
        <AnimatedSection>
          <StudiesSection />
        </AnimatedSection>
        <AnimatedSection>
          <OfferingsSection />
        </AnimatedSection>
        <MarkDivider />
        <AnimatedSection>
          <BlogSection />
        </AnimatedSection>
        <MarkDivider />
        <AnimatedSection>
          <PhilosophySection />
        </AnimatedSection>
        <MarkDivider />
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
