import { Link } from "react-router-dom";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
const Projects = () => {
  const projects = [{
    image: project1,
    title: "Montaje Industrial",
    description: "Estructuras metálicas y soldadura especializada",
    link: "/proyectos/montaje-industrial"
  }, {
    image: project2,
    title: "Sistema de Piping",
    description: "Instalación de cañerías industriales",
    link: "/proyectos/sistema-piping"
  }, {
    image: project3,
    title: "Obra Civil",
    description: "Construcción de estructuras de hormigón",
    link: "/proyectos/obra-civil"
  }, {
    image: project4,
    title: "Aislamiento Térmico",
    description: "Revestimiento de equipos industriales",
    link: "/proyectos/aislamiento-termico"
  }];
  return <section id="proyectos" className="py-24 bg-muted/30 relative overflow-hidden">
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
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight uppercase">PROYECTOS DESTACADOS</h2>
              <div className="w-12 h-0.5 bg-primary" />
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Experiencia comprobable en obras industriales y civiles de gran
            escala
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => <Link key={index} to={project.link} className="group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-scale-in border-2 border-border hover:border-primary" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/50 z-10" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/50 z-10" />
              
              <div className="aspect-[4/3] overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  {/* Horizontal line */}
                  <div className="w-12 h-0.5 bg-white mb-3" />
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">{project.title}</h3>
                  <p className="text-sm text-white/90">{project.description}</p>
                </div>
              </div>
            </Link>)}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block px-6 py-3 border-2 border-primary/30 bg-card/50 backdrop-blur-sm">
            <p className="text-lg text-muted-foreground italic font-light">
              Cada proyecto refleja nuestro compromiso con la excelencia y la
              seguridad
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default Projects;