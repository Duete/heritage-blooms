import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import ctaImage from "@/assets/cta-campus.jpg";

export function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaImage})` }}
      >
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Give Your Child the <span className="text-gold">Best Start?</span>
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-xl mx-auto">
            Join our community of happy families. Contact us today to learn more about admissions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/admissions">
              <Button size="lg" className="bg-gold hover:bg-gold-dark text-white font-semibold px-8 rounded-full shadow-lg group">
                Apply Now
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="tel:+256782785342">
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary rounded-full">
                <Phone className="mr-2 w-4 h-4" />
                +256 782 785 342
              </Button>
            </a>
            <a href="https://wa.me/256782785342" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="bg-[#25D366]/20 border-[#25D366] text-white hover:bg-[#25D366] rounded-full">
                <MessageCircle className="mr-2 w-4 h-4" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
