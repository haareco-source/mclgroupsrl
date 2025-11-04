import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const Projects = () => {
  const projects = [
    {
      image: project1,
      title: "Montaje Industrial",
      description: "Estructuras metálicas y soldadura especializada",
    },
    {
      image: project2,
      title: "Sistema de Piping",
      description: "Instalación de cañerías industriales",
    },
    {
      image: project3,
      title: "Obra Civil",
      description: "Construcción de estructuras de hormigón",
    },
    {
      image: project4,
      title: "Aislamiento Térmico",
      description: "Revestimiento de equipos industriales",
    },
  ];

  return (
    <section id="proyectos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros Proyectos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experiencia comprobable en obras industriales y civiles de gran
            escala
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-white/90">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground italic">
            Cada proyecto refleja nuestro compromiso con la excelencia y la
            seguridad
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
