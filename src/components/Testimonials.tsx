import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      client: "Ledesma S.A.",
      project: "Ampliación de planta metalúrgica",
      testimonial:
        "Trabajo profesional y cumplimiento de plazos en un proyecto de gran envergadura.",
    },
    {
      client: "Ingenio La Esperanza",
      project: "Instalación de sistema de cañerías industriales",
      testimonial:
        "Excelente calidad en soldadura y acabado. Equipo altamente capacitado.",
    },
    {
      client: "Constructora del Norte",
      project: "Obra civil - Estructuras de hormigón",
      testimonial:
        "Confiabilidad y experiencia que marcó la diferencia en nuestro proyecto.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros Clientes Nos Eligen
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            La confianza de empresas líderes respalda nuestra trayectoria
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 animate-fade-in border-2 hover:border-secondary"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-secondary mb-4 opacity-50" />
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.testimonial}"
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-bold text-foreground text-lg">
                    {testimonial.client}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.project}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
