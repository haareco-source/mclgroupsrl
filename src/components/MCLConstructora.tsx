import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Hammer, Wrench, Cog } from "lucide-react";

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
          <div className="inline-flex items-center gap-3 mb-4">
            <Building className="w-10 h-10 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              MCL Constructora y Servicios
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Especialistas en obras civiles, montajes industriales y mantenimiento integral
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                    <Icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">
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
