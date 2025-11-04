import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-industrial.jpg";
const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Industrial construction site" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-steel-gray/95 via-steel-gray/85 to-steel-gray/70" style={{
        background: 'linear-gradient(135deg, hsl(220 15% 10% / 0.95) 0%, hsl(220 15% 25% / 0.85) 50%, hsl(220 15% 15% / 0.75) 100%)'
      }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl animate-fade-in">
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            MCL GROUP SRL
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl font-light">
            Integrando 3 negocios: Construcción, Metalurgia y Ferretería Industrial
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => scrollToSection("negocios")} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
              Ver Negocios
            </Button>
            <Button onClick={() => scrollToSection("contacto")} size="lg" variant="outline" className="bg-white/5 hover:bg-white/10 text-white border-white/20 hover:border-white/40 font-semibold text-lg px-8 py-6 backdrop-blur-sm transition-all">
              Contactar
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>;
};
export default Hero;