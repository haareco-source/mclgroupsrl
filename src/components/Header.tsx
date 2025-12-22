import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoMCLGroup from "@/assets/logo-mcl-group.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Inicio", id: "hero" },
    { label: "Proyectos", id: "proyectos" },
    { label: "Nosotros", id: "quienes-somos" },
    { label: "Contacto", id: "contacto" },
  ];

  const businessUnits = [
    { name: "MCL Constructora", path: "/mcl-constructora/galeria" },
    { name: "Metalúrgica Ledesma", path: "/metalurgica/galeria" },
    { name: "Ferrenort", path: "/ferrenort/galeria" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center hover:opacity-90 transition-all duration-300 hover:scale-105"
            >
              <img 
                src={logoMCLGroup} 
                alt="MCL GROUP SRL" 
                className="h-14 w-auto object-contain brightness-100 contrast-125"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-secondary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            
            {/* Negocios Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-secondary transition-colors font-medium">
                Negocios
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {businessUnits.map((business) => (
                  <DropdownMenuItem key={business.path} asChild>
                    <Link 
                      to={business.path}
                      className="cursor-pointer"
                    >
                      {business.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-all"
            >
              Solicitar Cotización
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-slide-up">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-foreground hover:text-secondary transition-colors font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Negocios Mobile */}
              <div className="border-t border-border pt-4">
                <p className="text-sm font-semibold text-muted-foreground mb-2">Negocios</p>
                {businessUnits.map((business) => (
                  <Link
                    key={business.path}
                    to={business.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-left text-foreground hover:text-secondary transition-colors font-medium py-2"
                  >
                    {business.name}
                  </Link>
                ))}
              </div>
              
              <Button
                onClick={() => scrollToSection("contacto")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold mt-2 shadow-md hover:shadow-lg transition-all"
              >
                Solicitar Cotización
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
