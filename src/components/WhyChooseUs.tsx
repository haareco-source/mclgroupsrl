import { Card, CardContent } from "@/components/ui/card";
import { Award, Cog, Shield, Users, Leaf } from "lucide-react";

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: Award,
      title: "50+ años de experiencia",
      description: "Trayectoria familiar consolidada en el rubro",
    },
    {
      icon: Cog,
      title: "Tecnología y precisión",
      description: "Equipamiento moderno y procesos optimizados",
    },
    {
      icon: Shield,
      title: "Seguridad certificada",
      description: "Cumplimiento de normas y protocolos",
    },
    {
      icon: Users,
      title: "Equipo calificado",
      description: "Profesionales con formación técnica",
    },
    {
      icon: Leaf,
      title: "Responsabilidad social",
      description: "Compromiso con la sustentabilidad",
    },
  ];

  return (
    <section id="nosotros" className="py-24 bg-background relative overflow-hidden">
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
                Compromiso, Innovación y Resultados
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Nuestra experiencia y dedicación nos convierten en el socio ideal
            para sus proyectos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden transition-all duration-500 text-center animate-fade-in bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary hover:shadow-2xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Vertical accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent group-hover:w-2 transition-all duration-300" />
                
                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-primary/20 group-hover:border-primary transition-colors duration-300" />
                <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-primary rotate-45" />
                
                <CardContent className="p-6 relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-muted to-muted/50 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:from-primary group-hover:to-primary/90 transition-all duration-500 relative overflow-hidden border-2 border-border group-hover:border-white/20">
                    <Icon className="w-7 h-7 text-foreground group-hover:text-white transition-all duration-300 relative z-10 group-hover:rotate-12" />
                  </div>
                  
                  {/* Horizontal line under icon */}
                  <div className="w-8 h-0.5 bg-primary mb-3 mx-auto" />
                  
                  <h3 className="font-bold text-foreground mb-2 uppercase tracking-tight text-sm">
                    {advantage.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden border-2 border-primary shadow-2xl animate-scale-in bg-card/50 backdrop-blur-sm">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-white/20" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-white/20" />
            <div className="absolute top-2 left-2 w-2 h-2 bg-white rotate-45" />
            <div className="absolute bottom-2 right-2 w-2 h-2 bg-white rotate-45" />
            
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/90" />
            
            <CardContent className="p-12 text-center relative z-10">
              {/* Horizontal lines */}
              <div className="w-16 h-0.5 bg-white mb-6 mx-auto" />
              
              <h3 className="text-3xl font-bold text-white mb-4 uppercase tracking-tight">
                MCL GROUP SRL es sinónimo de confianza, eficiencia y
                cumplimiento
              </h3>
              <p className="text-xl text-white/90 leading-relaxed font-light">
                Con más de medio siglo de experiencia, nos consolidamos como
                referentes en soluciones metalúrgicas e industriales del norte
                argentino, ofreciendo calidad garantizada en cada proyecto.
              </p>
              
              {/* Bottom line */}
              <div className="w-16 h-0.5 bg-white mt-6 mx-auto" />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
