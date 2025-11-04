import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { X, ChevronLeft, ChevronRight, Building, Container, Cable } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import logoMetalurgica from "@/assets/logo-mcl-3d.png";
import work2 from "@/assets/gallery/work-2.jpg";
import work3 from "@/assets/gallery/work-3.jpg";
import work4 from "@/assets/gallery/work-4.jpg";
import work10 from "@/assets/gallery/work-10.jpg";

const MetalurgicaGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const services = [
    {
      icon: Building,
      title: "Estructura Metálica para Planta Industrial",
      description: "Fabricación e instalación de estructura de 500 toneladas",
    },
    {
      icon: Container,
      title: "Tanques de Almacenamiento Industrial",
      description: "Fabricación de tanques de acero inoxidable para industria química",
    },
    {
      icon: Cable,
      title: "Puente Grúa Industrial",
      description: "Fabricación y montaje de puente grúa de 20 toneladas",
    },
  ];

  const images = [
    { src: work2, title: "Instalación de tuberías industriales" },
    { src: work3, title: "Montaje de sistemas de tuberías" },
    { src: work4, title: "Fabricación de tuberías especiales" },
    { src: work10, title: "Montaje con grúa - Proyectos de gran envergadura" },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openImage = (index: number) => setSelectedImage(index);
  const closeImage = () => setSelectedImage(null);
  
  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };
  
  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl blur-xl"></div>
                <img 
                  src={logoMetalurgica} 
                  alt="Metalúrgica y Construcciones Ledesma" 
                  className="relative h-20 w-auto object-contain filter brightness-110 contrast-110"
                />
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
              Soluciones metalúrgicas especializadas con más de 50 años de experiencia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 animate-fade-in border-l-4 border-l-primary/20 hover:border-l-primary"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-primary/90 transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-xl mb-2 font-semibold text-foreground">{service.title}</CardTitle>
                    <CardDescription className="text-sm font-light">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          <div className="text-center mb-24">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-all"
            >
              Solicitar Información
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Galería de Proyectos
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
              Trabajos especializados en estructuras metálicas, tanques y montajes industriales
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg cursor-pointer animate-fade-in border border-border/50 hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openImage(index)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold text-sm">{image.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={selectedImage !== null} onOpenChange={closeImage}>
        <DialogContent className="max-w-7xl w-full p-0 bg-black/95 border-none">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
            onClick={closeImage}
          >
            <X className="h-6 w-6" />
          </Button>
          
          {selectedImage !== null && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
                onClick={prevImage}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
                onClick={nextImage}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
              
              <div className="relative w-full h-[80vh] flex items-center justify-center p-8">
                <img
                  src={images[selectedImage].src}
                  alt={images[selectedImage].title}
                  className="max-w-full max-h-full object-contain"
                />
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <p className="text-white font-semibold">{images[selectedImage].title}</p>
                  <p className="text-white/70 text-sm mt-1">
                    {selectedImage + 1} / {images.length}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default MetalurgicaGallery;
