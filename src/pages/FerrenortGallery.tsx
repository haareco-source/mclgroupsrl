import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, ChevronLeft, ChevronRight, Wrench, HardHat, Lightbulb, Package, Settings, Hammer } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import logoFerrenort from "@/assets/logo-ferrenort.jpg";
import work9 from "@/assets/gallery/work-9.jpg";

const FerrenortGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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

  const images = [
    { src: work9, title: "Transporte de maquinaria pesada - Equipos industriales" },
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
      
      <section className="py-24 bg-muted/30">
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

          <div className="text-center mb-24">
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

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Galería de Equipos
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
              Equipos industriales y servicios especializados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg cursor-pointer animate-fade-in border border-border/50 hover:border-secondary/50 transition-all duration-300"
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

          <div className="text-center mt-12">
            <p className="text-muted-foreground">Más imágenes próximamente</p>
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

export default FerrenortGallery;
