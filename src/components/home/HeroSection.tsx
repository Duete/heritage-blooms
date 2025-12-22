import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Users, Award, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-school.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium mb-6">
                <Heart className="w-4 h-4 text-gold" />
                "Education is the Ultimate Panacea"
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up delay-100">
              Demere's Bright Angels
              <span className="block text-gold mt-2">Nursery & Primary School</span>
            </h1>
            
            <p className="text-white/90 text-lg md:text-xl max-w-xl mb-8 leading-relaxed animate-fade-up delay-200">
              Nurturing young minds with love, care, and excellence. We provide quality early childhood and primary education in a safe, stimulating environment in Mbale City.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
              <Link to="/admissions">
                <Button size="lg" className="bg-gold hover:bg-gold-dark text-white font-semibold px-8 rounded-full shadow-lg group">
                  Apply Online Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm rounded-full">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4 animate-fade-up delay-400">
            {[
              { icon: Users, number: "500+", label: "Happy Pupils", color: "bg-gold" },
              { icon: GraduationCap, number: "30+", label: "Qualified Teachers", color: "bg-white" },
              { icon: Award, number: "100%", label: "Love & Care", color: "bg-gold" },
              { icon: Heart, number: "PLE", label: "Excellence Ready", color: "bg-white" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className={`${stat.color} ${stat.color === 'bg-white' ? 'text-primary' : 'text-white'} p-6 rounded-2xl shadow-lg backdrop-blur-sm ${stat.color === 'bg-white' ? '' : 'bg-opacity-90'}`}
              >
                <stat.icon className={`w-10 h-10 mb-3 ${stat.color === 'bg-white' ? 'text-gold' : 'text-white/90'}`} />
                <div className="text-3xl font-bold">{stat.number}</div>
                <div className={`text-sm mt-1 ${stat.color === 'bg-white' ? 'text-muted-foreground' : 'text-white/80'}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 50L48 45.8C96 41.7 192 33.3 288 33.3C384 33.3 480 41.7 576 50C672 58.3 768 66.7 864 62.5C960 58.3 1056 41.7 1152 33.3C1248 25 1344 25 1392 25L1440 25V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
}