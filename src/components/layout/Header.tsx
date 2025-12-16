import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Our History", href: "/about#history" },
      { label: "Mission & Vision", href: "/about#mission" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Core Values", href: "/about#values" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Curriculum", href: "/academics#curriculum" },
      { label: "Departments", href: "/academics#departments" },
      { label: "Examinations", href: "/academics#exams" },
    ],
  },
  { label: "School Life", href: "/school-life" },
  { label: "Admissions", href: "/admissions" },
  { label: "News & Events", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:+256700000000" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone size={14} />
              <span>+256 700 000 000</span>
            </a>
            <a href="mailto:info@demeresbrightangels.ac.ug" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail size={14} />
              <span>info@demeresbrightangels.ac.ug</span>
            </a>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <Link to="/admissions" className="hover:text-gold transition-colors">Apply Now</Link>
            <Link to="/alumni" className="hover:text-gold transition-colors">Alumni Portal</Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-gold" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg text-primary leading-tight">Bright Angels</span>
                <span className="text-xs text-muted-foreground tracking-wider">Nursery & Primary</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <NavigationMenu>
                <NavigationMenuList>
                  {navItems.map((item) => (
                    <NavigationMenuItem key={item.label}>
                      {item.children ? (
                        <>
                          <NavigationMenuTrigger className="nav-link bg-transparent">
                            {item.label}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid w-48 gap-1 p-2">
                              {item.children.map((child) => (
                                <li key={child.label}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      to={child.href}
                                      className="block px-4 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                                    >
                                      {child.label}
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <Link
                          to={item.href}
                          className="nav-link px-4 py-2 text-sm font-medium"
                        >
                          {item.label}
                        </Link>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button variant="gold">
                Enroll Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border animate-fade-in">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      to={item.href}
                      className="block py-3 px-4 font-medium hover:bg-muted rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="ml-4 border-l-2 border-gold/30 pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Button variant="gold" className="mt-4">
                  Enroll Now
                </Button>
              </nav>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
