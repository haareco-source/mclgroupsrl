import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";
import piping1 from "@/assets/projects/piping-1.jpg";
import piping2 from "@/assets/projects/piping-2.jpg";
import piping3 from "@/assets/projects/piping-3.jpg";
import piping4 from "@/assets/projects/piping-4.jpg";
import piping5 from "@/assets/projects/piping-5.jpg";
import piping6 from "@/assets/projects/piping-6.jpg";

const SistemaPiping = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  
  const images = [
    { src: piping1, title: "Instalación de Tuberías Industriales" },
    { src: piping2, title: "Red Compleja de Piping" },
    { src: piping3, title: "Soldadura de Tuberías" },
    { src: piping4, title: "Vista Aérea del Sistema" },
    { src: piping5, title: "Pruebas de Presión" },
    { src: piping6, title: "Sistema de Piping Completado" },
  ];

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-primary/10 via-background to-background overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `repeating-linear-gradient(0deg, hsl(var(--foreground)) 0px, transparent 1px, transparent 40px),
                             repeating-linear-gradient(90deg, hsl(var(--foreground)) 0px, transparent 1px, transparent 40px)`
          }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <Link 
              to="/#proyectos" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-semibold">Volver a Proyectos</span>
            </Link>
            
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase tracking-tight">
                Sistema de Piping
              </h1>
              <div className="w-20 h-1 bg-primary mb-6" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                Instalación profesional de sistemas de cañerías industriales de alta complejidad. 
                Contamos con personal calificado y equipamiento de última generación para garantizar instalaciones de precisión y durabilidad.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className="group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-border hover:border-primary cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/50 z-10" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/50 z-10" />
                  
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="w-12 h-0.5 bg-white mb-3" />
                      <h3 className="text-lg font-bold uppercase tracking-tight">{image.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {selectedImageIndex !== null && (
          <ImageLightbox
            images={images}
            currentIndex={selectedImageIndex}
            onClose={() => setSelectedImageIndex(null)}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6 uppercase tracking-tight">
              ¿Necesita un sistema de piping?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Consúltenos sobre su proyecto de instalación de cañerías industriales
            </p>
            <Link
              to="/#contacto"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 font-bold uppercase tracking-wide hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Solicitar Cotización
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SistemaPiping;