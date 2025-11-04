import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Wrench, Factory } from "lucide-react";

const BusinessUnits = () => {
  const businesses = [
    {
      icon: Building2,
      name: "MCL Constructora y Servicios",
      description: "Obras civiles, montajes industriales, reformas y mantenimiento",
      link: "mcl-constructora",
      color: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Wrench,
      name: "FERRENORT",
      description: "Ferretería industrial con amplio stock de herramientas y suministros",
      link: "ferrenort",
      color: "bg-secondary/10",
      iconColor: "text-secondary",
    },
    {
      icon: Factory,
      name: "Metalúrgica y Construcciones Ledesma",
      description: "Soluciones metalúrgicas y construcciones especializadas",
      link: "metalurgica",
      color: "bg-accent/10",
      iconColor: "text-accent",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="negocios" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros Negocios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            MCL GROUP SRL integra tres unidades de negocio especializadas para
            brindar soluciones completas en construcción, metalurgia e industria
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {businesses.map((business, index) => {
            const Icon = business.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div
                    className={`w-16 h-16 ${business.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={`w-8 h-8 ${business.iconColor}`} />
                  </div>
                  <CardTitle className="text-2xl mb-2">{business.name}</CardTitle>
                  <CardDescription className="text-base">
                    {business.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={() => scrollToSection(business.link)}
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Ver Detalles
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessUnits;
