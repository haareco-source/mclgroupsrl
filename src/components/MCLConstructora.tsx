import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Hammer, Wrench, Cog } from "lucide-react";
import logoConstructora from "@/assets/logo-constructora.jpg";

const MCLConstructora = () => {
  const services = [
    {
      icon: Building,
      title: "Obras Civiles",
      description: "Construcción de edificios industriales, galpones y estructuras civiles",
      items: ["Fundaciones", "Estructuras de hormigón", "Mampostería", "Techados"],
    },
    {
      icon: Cog,
      title: "Montajes Industriales",
      description: "Instalación y montaje de equipos y maquinaria industrial",
      items: ["Montaje de equipos", "Instalaciones mecánicas", "Sistemas de transporte", "Calibración"],
    },
    {
      icon: Wrench,
      title: "Reformas y Mantenimiento",
      description: "Renovación y mantenimiento preventivo de instalaciones",
      items: ["Mantenimiento preventivo", "Reparaciones", "Ampliaciones", "Modernizaciones"],
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="mcl-constructora" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl blur-xl"></div>
              <img 
                src={logoConstructora} 
                alt="MCL Constructora y Servicios" 
                className="relative h-20 w-auto object-contain filter brightness-110 contrast-110"
              />
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
            Especialistas en obras civiles, montajes industriales y mantenimiento integral
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
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-primary/90 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-xl mb-2 font-semibold text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-sm font-light">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          >
            Solicitar Presupuesto
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MCLConstructora;
