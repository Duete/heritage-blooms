import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "School Life", href: "/school-life" },
  { label: "News & Events", href: "/news" },
  { label: "Gallery", href: "/gallery" },
];

const resources = [
  { label: "Student Portal", href: "#" },
  { label: "Parent Portal", href: "#" },
  { label: "Alumni Network", href: "/alumni" },
  { label: "Career Opportunities", href: "#" },
  { label: "Downloads", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* School Info */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-forest-dark" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg leading-tight">Bright Angels</span>
                <span className="text-[10px] text-primary-foreground/70 italic">Education is the Ultimate Panacea</span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              {"Demere's Bright Angels Nursery & Primary School — nurturing young minds with love, care, and excellence in Mbale City."}
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-forest-dark transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-forest-dark transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-forest-dark transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-forest-dark transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  Nkoma, Northern City Division<br />
                  Mbale City, Uganda
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={18} className="text-gold shrink-0" />
                <a href="tel:+256700000000" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  +256 700 000 000
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={18} className="text-gold shrink-0" />
                <a href="mailto:info@demeresbrightangels.ac.ug" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  info@demeresbrightangels.ac.ug
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Clock size={18} className="text-gold shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  Mon - Fri: 7:30 AM - 5:00 PM<br />
                  Sat: 8:00 AM - 12:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>{"© 2024 Demere's Bright Angels Nursery & Primary School. All rights reserved."}</p>
            <div className="flex gap-6">
              <Link to="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-gold transition-colors">Terms of Use</Link>
              <Link to="#" className="hover:text-gold transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
