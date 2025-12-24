import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "School Life", href: "/school-life" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const academicLinks = [
  { label: "Nursery Section", href: "/academics#nursery" },
  { label: "Lower Primary", href: "/academics#lower-primary" },
  { label: "Upper Primary", href: "/academics#upper-primary" },
  { label: "Curriculum", href: "/academics#curriculum" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* School Info */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight">Bright Angels</span>
                <span className="text-xs text-white/70">Nursery & Primary</span>
              </div>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              {"Demere's Bright Angels Nursery & Primary School — nurturing young minds with love, care, and excellence in Mbale City."}
            </p>
            <p className="text-white/70 text-xs italic mb-6">
              "Education is the Ultimate Panacea"
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                <Youtube size={18} />
              </a>
              <a 
                href="https://wa.me/256782785342" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#25D366] transition-colors"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/80 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="font-bold text-lg mb-6">Academics</h4>
            <ul className="space-y-3">
              {academicLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/80 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                <span className="text-white/80">
                  Nkoma, Northern City Division<br />
                  Mbale City, Uganda
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={18} className="text-gold shrink-0" />
                <a href="tel:+256782785342" className="text-white/80 hover:text-gold transition-colors">
                  +256 782 785 342
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={18} className="text-gold shrink-0" />
                <a href="mailto:info@demeresbrightangels.ac.ug" className="text-white/80 hover:text-gold transition-colors">
                  info@demeresbrightangels.ac.ug
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Clock size={18} className="text-gold shrink-0 mt-0.5" />
                <span className="text-white/80">
                  Mon - Fri: 7:30 AM - 5:00 PM<br />
                  Sat: 8:00 AM - 12:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>{"© 2013-2024 Demere's Bright Angels Nursery & Primary School. Founded by Madam Demere Sarah."}</p>
            <div className="flex gap-6">
              <Link to="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-gold transition-colors">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}