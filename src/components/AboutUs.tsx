import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Target, Eye, Heart, Award } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="quienes-somos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Quiénes Somos
          </h2>
          <div className="max-w-5xl mx-auto space-y-4 text-lg text-muted-foreground font-light leading-relaxed">
            <p>
              Somos <span className="font-semibold text-foreground">Metalúrgica y Construcciones Ledesma (MCL)</span>, transformamos más de 50 años de experiencia familiar en soluciones sólidas, innovadoras y adaptadas a las necesidades de cada proyecto.
            </p>
            <p>
              Nacimos en el corazón del rubro metalúrgico y con el paso del tiempo, fuimos ampliando nuestras capacidades hacia el desarrollo de obras civiles y metalúrgicas de alta complejidad, consolidándonos como una empresa referente en la región.
            </p>
            <p>
              Hoy somos una empresa contratista integral, con un equipo técnico altamente capacitado, infraestructura propia y un firme compromiso con la calidad, seguridad y cumplimiento en cada trabajo que realizamos.
            </p>
            <p>
              Brindamos soluciones confiables a organismos públicos y empresas privadas, dentro y fuera de la provincia de Jujuy, construyendo relaciones duraderas basadas en la responsabilidad, la eficiencia y resultados comprobables.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="group hover:shadow-lg transition-all duration-300 animate-fade-in border-l-4 border-l-primary/20 hover:border-l-primary">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-primary/90 transition-all duration-300">
                <Target className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <CardTitle className="text-2xl mb-3 font-semibold text-foreground">Misión</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base font-light leading-relaxed">
                Brindar servicios, soluciones industriales y de construcción de alta calidad, superando las expectativas de nuestros clientes mediante la gestión eficiente, responsable y segura.
                <br /><br />
                Nos guiamos por la mejora continua, el trabajo en equipo y el uso responsable de los recursos, integrando tecnología, conocimiento y compromiso humano en cada proyecto.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 animate-fade-in border-l-4 border-l-primary/20 hover:border-l-primary" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-primary/90 transition-all duration-300">
                <Eye className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <CardTitle className="text-2xl mb-3 font-semibold text-foreground">Visión</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base font-light leading-relaxed">
                Ser reconocidos como una empresa referente en soluciones metalúrgicas y de obras civiles integrales del noroeste argentino, distinguidos por la excelencia, la innovación y el compromiso con la seguridad, la calidad y la sustentabilidad.
                <br /><br />
                Queremos liderar el crecimiento del sector, generando valor sostenible para nuestros clientes, colaboradores y comunidad.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="group hover:shadow-lg transition-all duration-300 animate-fade-in border-l-4 border-l-primary/20 hover:border-l-primary" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-primary/90 transition-all duration-300">
                <Heart className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <CardTitle className="text-2xl mb-3 font-semibold text-foreground">Valores</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base font-light leading-relaxed">
                Nuestros valores son la base de nuestra identidad y la fuerza que impulsa nuestro crecimiento:
                <ul className="mt-4 space-y-2 list-none">
                  <li><span className="font-semibold text-foreground">Integridad:</span> actuamos con ética, transparencia y compromiso en cada acción.</li>
                  <li><span className="font-semibold text-foreground">Calidad:</span> buscamos la excelencia en cada obra, servicio y relación.</li>
                  <li><span className="font-semibold text-foreground">Innovación:</span> incorporamos nuevas tecnologías y procesos para ofrecer soluciones eficientes y sostenibles.</li>
                  <li><span className="font-semibold text-foreground">Seguridad:</span> priorizamos el bienestar de las personas y el cuidado del entorno laboral.</li>
                  <li><span className="font-semibold text-foreground">Responsabilidad Social:</span> contribuimos al desarrollo de la comunidad y el respeto por el medioambiente.</li>
                  <li><span className="font-semibold text-foreground">Trabajo en Equipo:</span> valoramos el talento, la colaboración y el aprendizaje compartido.</li>
                  <li><span className="font-semibold text-foreground">Compromiso con el Cliente:</span> entendemos sus necesidades y construimos confianza a través de resultados.</li>
                </ul>
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 animate-fade-in border-l-4 border-l-primary/20 hover:border-l-primary" style={{ animationDelay: "0.3s" }}>
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-primary/90 transition-all duration-300">
                <Award className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <CardTitle className="text-2xl mb-3 font-semibold text-foreground">Objetivo Institucional</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base font-light leading-relaxed">
                Consolidarnos como una empresa de referencia en el desarrollo de soluciones metalúrgicas y de obras civiles, alcanzando un equilibrio sostenible entre calidad, eficiencia y competitividad.
                <br /><br />
                Buscamos superar las expectativas de nuestros clientes, generando relaciones de confianza a largo plazo, mediante una gestión basada en la innovación, mejora continua, la seguridad y el compromiso con las personas y el entorno.
                <br /><br />
                Nos enfocamos en crear valor compartido, impulsando el crecimiento de nuestros clientes, colaboradores y comunidades; contribuyendo al desarrollo industrial y constructivo de la región.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
