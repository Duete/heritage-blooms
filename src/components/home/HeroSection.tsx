import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-school.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-2 bg-gold/20 border border-gold/30 rounded-full text-gold text-sm font-medium mb-6">
              Excellence Since 1923
            </span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-cream leading-tight mb-6 animate-fade-up delay-100">
            Nurturing Future
            <span className="block text-gold">Leaders</span>
          </h1>
          
          <p className="text-cream/90 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed animate-fade-up delay-200">
            Victoria High School offers a rigorous academic program with a century-long history of excellence. 
            We provide our learners with rock-solid values to face global challenges.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
            <Button size="lg" variant="heroGold" className="group">
              Explore Our School
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="hero" className="group">
              <Play className="mr-2 w-4 h-4" />
              Watch Video
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-forest-dark/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
            {[
              { number: "100+", label: "Years of Excellence" },
              { number: "2,500+", label: "Students" },
              { number: "150+", label: "Expert Teachers" },
              { number: "98%", label: "Success Rate" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-gold font-serif text-3xl md:text-4xl font-bold">{stat.number}</div>
                <div className="text-cream/70 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
