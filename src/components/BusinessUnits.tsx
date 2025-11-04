import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Wrench, Factory } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BusinessUnits = () => {
  const navigate = useNavigate();
  
  const businesses = [
    {
      icon: Building2,
      name: "MCL Constructora y Servicios",
      description: "Obras civiles, montajes industriales, reformas y mantenimiento",
      link: "/mcl-constructora/galeria",
      color: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Wrench,
      name: "FERRENORT",
      description: "Ferretería industrial con amplio stock de herramientas y suministros",
      link: "/ferrenort/galeria",
      color: "bg-secondary/10",
      iconColor: "text-secondary",
    },
    {
      icon: Factory,
      name: "Metalúrgica y Construcciones Ledesma",
      description: "Soluciones metalúrgicas y construcciones especializadas",
      link: "/metalurgica/galeria",
      color: "bg-accent/10",
      iconColor: "text-accent",
    },
  ];

  return (
    <section id="negocios" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Nuestros Negocios
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
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
                className="group hover:shadow-lg transition-all duration-300 animate-fade-in border-l-4 border-l-primary/20 hover:border-l-primary bg-card"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-primary/90 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-xl mb-2 font-semibold">{business.name}</CardTitle>
                  <CardDescription className="text-sm font-light">
                    {business.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={() => navigate(business.link)}
                    variant="outline"
                    className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
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
