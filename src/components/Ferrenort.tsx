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
          <div className="inline-flex items-center gap-3 mb-4">
            <Wrench className="w-10 h-10 text-secondary" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              FERRENORT
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ferretería Industrial - Todo lo que necesitas para tu obra o industria
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-all">
                    <Icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
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

        <div className="text-center">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-foreground font-semibold"
          >
            Consultar Disponibilidad
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Ferrenort;
