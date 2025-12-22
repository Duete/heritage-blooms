import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { PromiseSection } from "@/components/home/PromiseSection";
import { AcademicLevelsSection } from "@/components/home/AcademicLevelsSection";
import { CoreValuesSection } from "@/components/home/CoreValuesSection";
import { NewsSection } from "@/components/home/NewsSection";
import { CTASection } from "@/components/home/CTASection";
import LocationSection from "@/components/home/LocationSection";
import { WhatsAppButton } from "@/components/home/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PromiseSection />
        <AcademicLevelsSection />
        <CoreValuesSection />
        <NewsSection />
        <LocationSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;