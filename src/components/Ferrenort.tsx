import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Wrench, 
  HardHat, 
  Lightbulb, 
  Package,
  Settings,
  Hammer
} from "lucide-react";
import logoFerrenort from "@/assets/logo-ferrenort.jpg";

const Ferrenort = () => {
  const categories = [
    {
      icon: Wrench,
      title: "Herramientas",
      items: [
        "Herramientas manuales",
        "Herramientas eléctricas",
        "Herramientas neumáticas",
        "Medición y nivelación"
      ],
    },
    {
      icon: Settings,
      title: "Máquinas y Equipos",
      items: [
        "Compresores",
        "Generadores",
        "Soldadoras",
        "Equipos de corte"
      ],
    },
    {
      icon: Hammer,
      title: "Fijación y Sujeción",
      items: [
        "Tornillos y tuercas",
        "Pernos y arandelas",
        "Clavos y grapas",
        "Anclajes químicos"
      ],
    },
    {
      icon: Package,
      title: "Materiales de Construcción",
      items: [
        "Hierros y aceros",
        "Perfiles estructurales",
        "Chapas y planchuelas",
        "Tubos y caños"
      ],
    },
    {
      icon: HardHat,
      title: "Seguridad Industrial",
      items: [
        "EPP completo",
        "Cascos y guantes",
        "Arneses y líneas de vida",
        "Señalización"
      ],
    },
    {
      icon: Lightbulb,
      title: "Suministros Varios",
      items: [
        "Iluminación industrial",
        "Cables y conectores",
        "Pinturas y revestimientos",
        "Abrasivos y consumibles"
      ],
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="ferrenort" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent rounded-xl blur-xl"></div>
              <img 
                src={logoFerrenort} 
                alt="FERRENORT Ferretería Industrial" 
                className="relative h-16 w-auto object-contain filter brightness-110 contrast-110"
              />
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
            Ferretería Industrial - Todo lo que necesitas para tu obra o industria
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 animate-fade-in border-l-4 border-l-secondary/20 hover:border-l-secondary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded flex items-center justify-center mb-4 group-hover:from-secondary group-hover:to-secondary/90 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6 text-secondary group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
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

        <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => window.location.href = '/ferrenort/galeria'}
            size="lg"
            variant="outline"
            className="border-secondary/30 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary font-semibold"
          >
            Ver Equipos
          </Button>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold shadow-md hover:shadow-lg transition-all"
          >
            Consultar Disponibilidad
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Ferrenort;
