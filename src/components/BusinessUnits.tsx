import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Wrench, Cog } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BusinessUnits = () => {
  const navigate = useNavigate();
  
  const businesses = [
    {
      icon: Building2,
      name: "MCL Constructora y Servicios",
      description: "Obras civiles, montajes industriales, reformas y mantenimiento",
      link: "/mcl-constructora/galeria",
    },
    {
      icon: Wrench,
      name: "FERRENORT",
      description: "Ferretería industrial con amplio stock de herramientas y suministros",
      link: "/ferrenort/galeria",
    },
    {
      icon: Cog,
      name: "Metalúrgica y Construcciones Ledesma",
      description: "Soluciones metalúrgicas y construcciones especializadas",
      link: "/metalurgica/galeria",
    },
  ];

  return (
    <section id="negocios" className="py-24 bg-background relative overflow-hidden">
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
                Nuestros Negocios
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light mt-4">
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
                className="group relative overflow-hidden transition-all duration-500 animate-fade-in bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary hover:shadow-2xl"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Vertical accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent group-hover:w-2 transition-all duration-300" />
                
                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/20 group-hover:border-primary transition-colors duration-300" />
                <div className="absolute top-2 right-2 w-2 h-2 bg-primary rotate-45" />
                
                <CardHeader className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-primary/90 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 border-2 border-foreground/10 group-hover:border-white/20 transition-colors" 
                       style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)' }} />
                  <Icon className="w-8 h-8 text-foreground group-hover:text-white transition-all duration-300 relative z-10 group-hover:rotate-12" />
                </div>
                
                {/* Horizontal line under icon */}
                <div className="w-12 h-0.5 bg-primary mb-3" />
                  
                  <CardTitle className="text-xl mb-2 font-bold uppercase tracking-tight">
                    {business.name}
                  </CardTitle>
                  <CardDescription className="text-sm font-light leading-relaxed">
                    {business.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <Button
                    onClick={() => navigate(business.link)}
                    className="w-full bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-bold uppercase tracking-wider border-2 border-transparent hover:border-primary relative overflow-hidden group"
                  >
                    <span className="relative z-10">Entrar</span>
                    <div className="absolute inset-0 bg-primary transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
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
