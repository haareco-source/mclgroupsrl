import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import logoConstructora from "@/assets/logo-constructora.jpg";
import work1 from "@/assets/gallery/work-1.jpg";
import work5 from "@/assets/gallery/work-5.jpg";
import work6 from "@/assets/gallery/work-6.jpg";
import work7 from "@/assets/gallery/work-7.jpg";
import work8 from "@/assets/gallery/work-8.jpg";

const MCLConstructoraGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { src: work1, title: "Trabajo en altura - Instalaciones industriales" },
    { src: work7, title: "Estructura metálica - Construcción de cobertizo" },
    { src: work8, title: "Estructura metálica terminada - Estacionamiento" },
    { src: work5, title: "Tanque de almacenamiento industrial" },
    { src: work6, title: "Instalaciones en taller industrial" },
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
      
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl blur-xl"></div>
                <img 
                  src={logoConstructora} 
                  alt="MCL Constructora y Servicios" 
                  className="relative h-20 w-auto object-contain filter brightness-110 contrast-110"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Nuestros Proyectos
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
              Galería de obras civiles, montajes industriales y estructuras metálicas realizadas
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

export default MCLConstructoraGallery;
