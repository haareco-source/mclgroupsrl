import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Factory, Building, Container, Cable } from "lucide-react";
import logoMetalurgica from "@/assets/logo-metalurgica.jpg";

const Metalurgica = () => {
  const services = [
    {
      icon: Building,
      title: "Estructura Metálica para Planta Industrial",
      description: "Fabricación e instalación de estructura de 500 toneladas",
      color: "bg-accent/10",
      iconColor: "text-accent",
    },
    {
      icon: Container,
      title: "Tanques de Almacenamiento Industrial",
      description: "Fabricación de tanques de acero inoxidable para industria química",
      color: "bg-accent/10",
      iconColor: "text-accent",
    },
    {
      icon: Cable,
      title: "Puente Grúa Industrial",
      description: "Fabricación y montaje de puente grúa de 20 toneladas",
      color: "bg-accent/10",
      iconColor: "text-accent",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="metalurgica" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl blur-xl"></div>
              <img 
                src={logoMetalurgica} 
                alt="Metalúrgica y Construcciones Ledesma" 
                className="relative h-20 w-auto object-contain filter brightness-110 contrast-110"
              />
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
            Soluciones metalúrgicas especializadas con más de 50 años de experiencia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 animate-fade-in border-l-4 border-l-primary/20 hover:border-l-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-primary/90 transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-xl mb-2 font-semibold text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-sm font-light">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-all"
          >
            Solicitar Información
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Metalurgica;
