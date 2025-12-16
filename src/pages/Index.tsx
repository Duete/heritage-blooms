import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { CoreValuesSection } from "@/components/home/CoreValuesSection";
import { NewsSection } from "@/components/home/NewsSection";
import { SchoolLifeSection } from "@/components/home/SchoolLifeSection";
import { LeadershipSection } from "@/components/home/LeadershipSection";
import { CTASection } from "@/components/home/CTASection";
import LocationSection from "@/components/home/LocationSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CoreValuesSection />
        <SchoolLifeSection />
        <NewsSection />
        <LeadershipSection />
        <LocationSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
