import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, ChevronLeft, ChevronRight, Wrench, HardHat, Lightbulb, Package, Settings, Hammer, Award, Shield, Users } from "lucide-react";
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    { icon: Award, label: "20+ Años", sublabel: "En el Mercado" },
    { icon: Shield, label: "5000+", sublabel: "Productos Disponibles" },
    { icon: Users, label: "1000+", sublabel: "Clientes Satisfechos" },
  ];

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
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        
        {/* Diagonal Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-secondary/5 to-transparent transform skew-x-12"></div>

        <div className="container mx-auto px-4 relative z-0">
          <div className="text-center animate-fade-in">
            {/* Título Principal */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent leading-tight">
              FERRENORT
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 font-light">
              Ferretería Industrial - Todo lo que necesitas para tu obra o industria
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                onClick={() => scrollToSection("contacto")}
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              >
                Consultar Disponibilidad
              </Button>
              <Button
                onClick={() => scrollToSection("productos")}
                size="lg"
                variant="outline"
                className="font-semibold text-lg px-8 py-6 border-2 hover:bg-muted"
              >
                Ver Productos
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="group bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon className="w-8 h-8 mx-auto mb-3 text-secondary group-hover:scale-110 transition-transform" />
                    <div className="text-3xl font-bold mb-1" style={{ color: "hsl(var(--foreground))" }}>
                      {stat.label}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Nuestros Productos
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
              Amplio catálogo de herramientas y materiales industriales
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

        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-24 bg-background">
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
