import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import aboutImage from "@/assets/about-students.jpg";

const features = [
  "Qualified and dedicated teachers",
  "Safe and nurturing environment",
  "Modern teaching facilities",
  "Holistic child development",
  "Strong moral foundation",
  "Active parent involvement",
];

export function AboutSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={aboutImage}
                alt="Bright Angels School pupils learning"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 bg-gold text-white px-6 py-3 rounded-xl shadow-lg">
                <span className="text-2xl font-bold">10+</span>
                <span className="text-sm block">Years of Excellence</span>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gold/20 rounded-2xl -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <span className="badge-primary mb-4">About Our School</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Nurturing Young Minds in Mbale City
            </h2>
            <div className="divider-gold mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              {"Demere's Bright Angels Nursery & Primary School is a beacon of quality early childhood and primary education located in Nkoma, Mbale City. We are committed to nurturing young minds in a safe, loving, and stimulating environment."}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We believe in developing the whole child — intellectually, physically, socially, and 
              spiritually. Our dedicated teachers provide a caring environment where every pupil 
              can discover and develop their unique potential.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-foreground text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <Link to="/about">
              <Button className="bg-primary hover:bg-forest-light text-white font-semibold px-8 rounded-full group">
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}