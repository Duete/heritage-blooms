import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import schoolLogo from "@/assets/school-logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "School Life", href: "/school-life" },
  { label: "Admissions", href: "/admissions" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2.5 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <a href="tel:+256782785342" className="hover:text-gold transition-colors font-medium">
              +256 782 785 342
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/256782785342" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 hover:text-gold transition-colors"
            >
              <MessageCircle size={14} />
              <span>WhatsApp Us</span>
            </a>
            <Link to="/admissions" className="bg-gold text-white px-4 py-1 rounded-full text-xs font-semibold hover:bg-gold-dark transition-colors">
              Apply Now
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={schoolLogo} 
                alt="Demere's Bright Angels School Logo" 
                className="w-16 h-16 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg text-primary leading-tight">Demere's Bright Angels</span>
                <span className="text-xs text-muted-foreground">Nursery & Primary School</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="nav-link text-sm hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button asChild className="bg-gold hover:bg-gold-dark text-white font-semibold px-6 rounded-full shadow-md">
                <Link to="/admissions">Enroll Now</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border animate-fade-in">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="block py-3 px-4 font-medium hover:bg-primary/5 hover:text-primary rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild className="w-full bg-gold hover:bg-gold-dark text-white font-semibold mt-4 rounded-full">
                  <Link to="/admissions" onClick={() => setMobileMenuOpen(false)}>Enroll Now</Link>
                </Button>
              </nav>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}