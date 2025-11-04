import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Target, Eye, Heart, Award } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="quienes-somos" className="relative py-24 bg-gradient-to-b from-background via-background to-muted/20 overflow-hidden">
      {/* Grid pattern industrial background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary-rgb),0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary-rgb),0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-bold tracking-[0.3em] text-primary uppercase">Nuestra Empresa</span>
              <div className="h-px w-12 bg-primary" />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8 tracking-tight uppercase">
            Quiénes Somos
          </h2>
          <div className="max-w-5xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p className="relative pl-6 border-l-2 border-primary/50">
              Somos <span className="font-bold text-foreground">Metalúrgica y Construcciones Ledesma (MCL)</span>, transformamos más de 50 años de experiencia familiar en soluciones sólidas, innovadoras y adaptadas a las necesidades de cada proyecto.
            </p>
            <p className="relative pl-6 border-l-2 border-primary/30">
              Nacimos en el corazón del rubro metalúrgico y con el paso del tiempo, fuimos ampliando nuestras capacidades hacia el desarrollo de obras civiles y metalúrgicas de alta complejidad, consolidándonos como una empresa referente en la región.
            </p>
            <p className="relative pl-6 border-l-2 border-primary/50">
              Hoy somos una empresa contratista integral, con un equipo técnico altamente capacitado, infraestructura propia y un firme compromiso con la calidad, seguridad y cumplimiento en cada trabajo que realizamos.
            </p>
            <p className="relative pl-6 border-l-2 border-primary/30">
              Brindamos soluciones confiables a organismos públicos y empresas privadas, dentro y fuera de la provincia de Jujuy, construyendo relaciones duraderas basadas en la responsabilidad, la eficiencia y resultados comprobables.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Misión */}
          <Card className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 animate-fade-in hover:shadow-2xl hover:shadow-primary/10">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary via-primary/50 to-primary/20" />
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-primary/10 border-2 border-primary/30 group-hover:border-primary flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Target className="w-8 h-8 text-primary transition-transform duration-500 group-hover:scale-110" strokeWidth={2.5} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-3xl font-bold text-foreground uppercase tracking-tight">Misión</CardTitle>
                  <div className="h-1 w-20 bg-primary/50 mt-2" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed text-muted-foreground">
                Brindar servicios, soluciones industriales y de construcción de alta calidad, superando las expectativas de nuestros clientes mediante la gestión eficiente, responsable y segura.
                <br /><br />
                Nos guiamos por la mejora continua, el trabajo en equipo y el uso responsable de los recursos, integrando tecnología, conocimiento y compromiso humano en cada proyecto.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Visión */}
          <Card className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 animate-fade-in hover:shadow-2xl hover:shadow-primary/10" style={{ animationDelay: "0.1s" }}>
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary via-primary/50 to-primary/20" />
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-primary/10 border-2 border-primary/30 group-hover:border-primary flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Eye className="w-8 h-8 text-primary transition-transform duration-500 group-hover:scale-110" strokeWidth={2.5} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-3xl font-bold text-foreground uppercase tracking-tight">Visión</CardTitle>
                  <div className="h-1 w-20 bg-primary/50 mt-2" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed text-muted-foreground">
                Ser reconocidos como una empresa referente en soluciones metalúrgicas y de obras civiles integrales del noroeste argentino, distinguidos por la excelencia, la innovación y el compromiso con la seguridad, la calidad y la sustentabilidad.
                <br /><br />
                Queremos liderar el crecimiento del sector, generando valor sostenible para nuestros clientes, colaboradores y comunidad.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Valores */}
          <Card className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 animate-fade-in hover:shadow-2xl hover:shadow-primary/10" style={{ animationDelay: "0.2s" }}>
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary via-primary/50 to-primary/20" />
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-primary/10 border-2 border-primary/30 group-hover:border-primary flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Heart className="w-8 h-8 text-primary transition-transform duration-500 group-hover:scale-110" strokeWidth={2.5} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-3xl font-bold text-foreground uppercase tracking-tight">Valores</CardTitle>
                  <div className="h-1 w-20 bg-primary/50 mt-2" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed text-muted-foreground">
                Nuestros valores son la base de nuestra identidad y la fuerza que impulsa nuestro crecimiento:
                <ul className="mt-4 space-y-3 list-none">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary mt-2 flex-shrink-0" />
                    <span><span className="font-bold text-foreground uppercase text-sm">Integridad:</span> actuamos con ética, transparencia y compromiso en cada acción.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary mt-2 flex-shrink-0" />
                    <span><span className="font-bold text-foreground uppercase text-sm">Calidad:</span> buscamos la excelencia en cada obra, servicio y relación.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary mt-2 flex-shrink-0" />
                    <span><span className="font-bold text-foreground uppercase text-sm">Innovación:</span> incorporamos nuevas tecnologías y procesos para ofrecer soluciones eficientes y sostenibles.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary mt-2 flex-shrink-0" />
                    <span><span className="font-bold text-foreground uppercase text-sm">Seguridad:</span> priorizamos el bienestar de las personas y el cuidado del entorno laboral.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary mt-2 flex-shrink-0" />
                    <span><span className="font-bold text-foreground uppercase text-sm">Responsabilidad Social:</span> contribuimos al desarrollo de la comunidad y el respeto por el medioambiente.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary mt-2 flex-shrink-0" />
                    <span><span className="font-bold text-foreground uppercase text-sm">Trabajo en Equipo:</span> valoramos el talento, la colaboración y el aprendizaje compartido.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary mt-2 flex-shrink-0" />
                    <span><span className="font-bold text-foreground uppercase text-sm">Compromiso con el Cliente:</span> entendemos sus necesidades y construimos confianza a través de resultados.</span>
                  </li>
                </ul>
              </CardDescription>
            </CardContent>
          </Card>

          {/* Objetivo Institucional */}
          <Card className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 animate-fade-in hover:shadow-2xl hover:shadow-primary/10" style={{ animationDelay: "0.3s" }}>
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary via-primary/50 to-primary/20" />
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-primary/10 border-2 border-primary/30 group-hover:border-primary flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Award className="w-8 h-8 text-primary transition-transform duration-500 group-hover:scale-110" strokeWidth={2.5} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-3xl font-bold text-foreground uppercase tracking-tight">Objetivo Institucional</CardTitle>
                  <div className="h-1 w-20 bg-primary/50 mt-2" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed text-muted-foreground">
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
