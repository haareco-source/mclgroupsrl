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
    <section id="nosotros" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Compromiso, Innovación y Resultados
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
                className="group hover:shadow-lg transition-all duration-300 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-secondary/20 transition-colors">
                    <Icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary to-primary/90 border-0 shadow-2xl animate-scale-in">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                MCL GROUP SRL es sinónimo de confianza, eficiencia y
                cumplimiento
              </h3>
              <p className="text-xl text-white/90 leading-relaxed">
                Con más de medio siglo de experiencia, nos consolidamos como
                referentes en soluciones metalúrgicas e industriales del norte
                argentino, ofreciendo calidad garantizada en cada proyecto.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
