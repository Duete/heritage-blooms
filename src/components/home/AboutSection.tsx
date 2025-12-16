import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Trophy, Heart } from "lucide-react";
import aboutImage from "@/assets/about-students.jpg";

const features = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description: "Rigorous curriculum preparing students for global success",
  },
  {
    icon: Users,
    title: "Community Spirit",
    description: "A warm, inclusive environment where every student belongs",
  },
  {
    icon: Trophy,
    title: "Holistic Development",
    description: "Nurturing talents through sports, arts, and leadership",
  },
  {
    icon: Heart,
    title: "Strong Values",
    description: "Building character rooted in integrity and compassion",
  },
];

export function AboutSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-elevated">
              <img
                src={aboutImage}
                alt="Bright Angels School pupils"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-lg shadow-elevated max-w-xs hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center">
                  <Trophy className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <div className="font-serif font-bold text-2xl text-primary">100+</div>
                  <div className="text-muted-foreground text-sm">Years of Heritage</div>
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-gold/30 rounded-lg -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <span className="text-gold font-medium tracking-wider text-sm uppercase">About Our School</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              A Legacy of Excellence
            </h2>
            <div className="divider-gold mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              {"Demere's Bright Angels Nursery & Primary School is a beacon of quality early childhood and primary education in Nkoma, Mbale City. We are committed to nurturing young minds in a safe, loving, and stimulating environment."}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We believe in nurturing the whole child — intellectually, physically, socially, and 
              spiritually. Our dedicated teachers provide a caring environment where every pupil 
              can discover and develop their unique potential from nursery through primary school.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{feature.title}</h4>
                    <p className="text-muted-foreground text-xs mt-0.5">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="bg-primary text-primary-foreground hover:bg-forest-light group">
              Learn More About Us
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
