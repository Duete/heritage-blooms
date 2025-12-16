import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import ctaImage from "@/assets/cta-campus.jpg";

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-gold font-medium tracking-wider text-sm uppercase">Join Our Community</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-cream mt-4 mb-6">
            Begin Your Journey at Victoria High
          </h2>
          <p className="text-cream/80 text-lg mb-8 max-w-2xl mx-auto">
            Admissions for the 2025 academic year are now open. Take the first step 
            towards an exceptional education and a brighter future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" variant="heroGold" className="group">
              Apply for Admission
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="hero">
              Schedule a Visit
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-8">
            <a href="tel:+256700000000" className="flex items-center gap-2 text-cream/80 hover:text-gold transition-colors">
              <Phone size={18} />
              <span>+256 700 000 000</span>
            </a>
            <a href="mailto:admissions@victoriahigh.ac.ug" className="flex items-center gap-2 text-cream/80 hover:text-gold transition-colors">
              <Mail size={18} />
              <span>admissions@victoriahigh.ac.ug</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
