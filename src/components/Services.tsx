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
    <section id="servicios" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestras Soluciones Integrales
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
                className="group hover:shadow-xl transition-all duration-300 animate-scale-in border-2 hover:border-secondary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
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
            className="bg-secondary hover:bg-secondary/90 text-foreground font-semibold text-lg px-8 py-6"
          >
            Solicitar Presupuesto
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
