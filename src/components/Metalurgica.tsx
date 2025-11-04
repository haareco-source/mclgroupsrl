import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Factory, Building, Container, Cable } from "lucide-react";

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
          <div className="inline-flex items-center gap-3 mb-4">
            <Factory className="w-10 h-10 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Metalúrgica y Construcciones Ledesma
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluciones metalúrgicas especializadas con más de 50 años de experiencia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 animate-fade-in border-accent/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div
                    className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">
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
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
          >
            Solicitar Información
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Metalurgica;
