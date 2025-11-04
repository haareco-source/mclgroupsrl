import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Factory } from "lucide-react";

const Metalurgica = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="metalurgica" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <Factory className="w-10 h-10 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Metalúrgica y Construcciones Ledesma
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluciones metalúrgicas especializadas con más de 50 años de experiencia
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Servicios Metalúrgicos</CardTitle>
              <CardDescription className="text-lg">
                Brindamos soluciones integrales en el área metalúrgica con tecnología de punta
                y personal altamente capacitado
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center pt-6">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                Solicitar Información
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Metalurgica;
