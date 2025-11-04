import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Factory, Building2, Network, Flame, Wrench } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Factory,
      title: "Obras y Montajes Industriales",
      description:
        "Estructuras metálicas, redes contra incendio, iluminación y sistemas de transporte industrial.",
    },
    {
      icon: Building2,
      title: "Obras Civiles",
      description:
        "Hormigón armado, plateas, canales y piletas de bombeo con acabado profesional.",
    },
    {
      icon: Network,
      title: "Cañerías y Piping",
      description:
        "Instalaciones metálicas y plásticas con soldadura especializada y certificaciones.",
    },
    {
      icon: Flame,
      title: "Aislamientos Térmicos",
      description:
        "Revestimientos para hornos, ductos y tanques con materiales de alta calidad.",
    },
    {
      icon: Wrench,
      title: "Mantenimiento y Servicios",
      description:
        "Granallado, pintura epoxi, limpieza hidrocinética y mantenimiento preventivo.",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servicios" className="py-24 bg-background relative overflow-hidden">
      {/* Industrial grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `repeating-linear-gradient(0deg, hsl(var(--foreground)) 0px, transparent 1px, transparent 40px),
                         repeating-linear-gradient(90deg, hsl(var(--foreground)) 0px, transparent 1px, transparent 40px)`
      }} />
      
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2">
              <div className="w-12 h-0.5 bg-primary" />
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight uppercase">
                Nuestras Soluciones Integrales
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Ofrecemos servicios especializados con los más altos estándares de
            calidad y seguridad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden transition-all duration-500 animate-scale-in bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary hover:shadow-2xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Vertical accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent group-hover:w-2 transition-all duration-300" />
                
                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/20 group-hover:border-primary transition-colors duration-300" />
                <div className="absolute top-2 right-2 w-2 h-2 bg-primary rotate-45" />
                
                <CardContent className="p-8 relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center mb-6 group-hover:from-primary group-hover:to-primary/90 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 border-2 border-foreground/10 group-hover:border-white/20 transition-colors" 
                         style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)' }} />
                    <Icon className="w-8 h-8 text-foreground group-hover:text-white transition-all duration-300 relative z-10 group-hover:rotate-12" />
                  </div>
                  
                  {/* Horizontal line under icon */}
                  <div className="w-12 h-0.5 bg-primary mb-4" />
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 uppercase tracking-tight group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-foreground text-background hover:bg-primary hover:text-primary-foreground font-bold text-lg px-8 py-6 uppercase tracking-wider border-2 border-transparent hover:border-primary relative overflow-hidden group transition-all duration-300"
          >
            <span className="relative z-10">Solicitar Presupuesto</span>
            <div className="absolute inset-0 bg-primary transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
