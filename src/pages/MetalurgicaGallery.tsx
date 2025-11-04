import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { X, ChevronLeft, ChevronRight, Building, Container, Cable, Award, Shield, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import logoMetalurgica from "@/assets/logo-mcl-3d.png";
import work2 from "@/assets/gallery/work-2.jpg";
import work3 from "@/assets/gallery/work-3.jpg";
import work4 from "@/assets/gallery/work-4.jpg";
import work10 from "@/assets/gallery/work-10.jpg";
const MetalurgicaGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const services = [{
    icon: Building,
    title: "Estructura Metálica para Planta Industrial",
    description: "Fabricación e instalación de estructura de 500 toneladas"
  }, {
    icon: Container,
    title: "Tanques de Almacenamiento Industrial",
    description: "Fabricación de tanques de acero inoxidable para industria química"
  }, {
    icon: Cable,
    title: "Puente Grúa Industrial",
    description: "Fabricación y montaje de puente grúa de 20 toneladas"
  }];
  const images = [{
    src: work2,
    title: "Instalación de tuberías industriales"
  }, {
    src: work3,
    title: "Montaje de sistemas de tuberías"
  }, {
    src: work4,
    title: "Fabricación de tuberías especiales"
  }, {
    src: work10,
    title: "Montaje con grúa - Proyectos de gran envergadura"
  }];
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
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
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Main Landing */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-primary/5 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(0deg, hsl(var(--foreground)) 0px, transparent 1px, transparent 50px),
                            repeating-linear-gradient(90deg, hsl(var(--foreground)) 0px, transparent 1px, transparent 50px)`
        }} />
        
        {/* Diagonal accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        
        <div className="container mx-auto px-4 py-20 relative z-0">
          <div className="max-w-6xl mx-auto text-center">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 animate-fade-in uppercase tracking-tight" style={{ animationDelay: '0.1s' }}>
              Metalúrgica y<br />Construcciones Ledesma
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in font-light leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Más de 50 años de excelencia en soluciones metalúrgicas, 
              construcciones industriales y montajes de alta complejidad
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button 
                onClick={scrollToContact} 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-10 py-6 uppercase tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Solicitar Cotización
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="font-bold text-lg px-10 py-6 uppercase tracking-wide hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => {
                  document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Ver Proyectos
              </Button>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="relative p-8 bg-card/60 backdrop-blur-sm border border-border hover:border-primary transition-all duration-300 group">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors" />
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-black text-foreground mb-2">50+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide font-semibold">Años de Experiencia</div>
              </div>
              
              <div className="relative p-8 bg-card/60 backdrop-blur-sm border border-border hover:border-primary transition-all duration-300 group">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors" />
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-black text-foreground mb-2">100%</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide font-semibold">Calidad Garantizada</div>
              </div>
              
              <div className="relative p-8 bg-card/60 backdrop-blur-sm border border-border hover:border-primary transition-all duration-300 group">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors" />
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-black text-foreground mb-2">500+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide font-semibold">Proyectos Completados</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background relative overflow-hidden">
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
              <div className="flex items-center gap-3">
                <div className="w-16 h-1 bg-primary" />
                <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight uppercase">
                  Capacidades Principales
                </h2>
                <div className="w-16 h-1 bg-primary" />
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-medium mt-4">
              Soluciones integrales para la industria con tecnología de vanguardia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => {
            const Icon = service.icon;
            return <Card key={index} className="group relative overflow-hidden transition-all duration-500 animate-fade-in bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary hover:shadow-2xl" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  {/* Vertical accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent group-hover:w-2 transition-all duration-300" />
                  
                  {/* Corner decoration */}
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/20 group-hover:border-primary transition-colors duration-300" />
                  <div className="absolute top-2 right-2 w-2 h-2 bg-primary rotate-45" />
                  
                  <CardHeader className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center mb-6 group-hover:from-primary group-hover:to-primary/90 transition-all duration-500 relative overflow-hidden">
                      <div className="absolute inset-0 border-2 border-foreground/10 group-hover:border-white/20 transition-colors" style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)'
                  }} />
                      <Icon className="w-10 h-10 text-foreground group-hover:text-white transition-all duration-300 relative z-10 group-hover:rotate-12" />
                    </div>
                    
                    {/* Horizontal line under icon */}
                    <div className="w-12 h-0.5 bg-primary mb-3" />
                    
                    <CardTitle className="text-lg mb-2 font-bold uppercase tracking-tight">{service.title}</CardTitle>
                    <CardDescription className="text-sm font-light leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>;
          })}
          </div>

          <div className="text-center">
            <Button onClick={scrollToContact} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-black text-xl px-12 py-8 uppercase tracking-wider shadow-2xl hover:shadow-primary/50 transition-all duration-300 border-2 border-primary hover:scale-105">
              Solicitar Cotización Personalizada
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="proyectos" className="py-24 bg-muted/30 relative overflow-hidden">
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
              <div className="flex items-center gap-3">
                <div className="w-16 h-1 bg-primary" />
                <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight uppercase">
                  Proyectos Destacados
                </h2>
                <div className="w-16 h-1 bg-primary" />
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-medium mt-4">
              Experiencia comprobada en obras de alta complejidad y exigencia técnica
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {images.map((image, index) => <div key={index} className="group relative overflow-hidden cursor-pointer animate-fade-in border-2 border-border hover:border-primary hover:shadow-2xl transition-all duration-500" style={{
            animationDelay: `${index * 0.1}s`
          }} onClick={() => openImage(index)}>
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/50 z-10 group-hover:border-white transition-colors duration-300" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/50 z-10 group-hover:border-white transition-colors duration-300" />
                <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-primary rotate-45 z-10" />
                <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-primary rotate-45 z-10" />
                
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={image.src} alt={image.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    {/* Horizontal line */}
                    <div className="w-12 h-0.5 bg-white mb-3" />
                    <p className="text-white font-bold text-sm uppercase tracking-wide">{image.title}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      <Dialog open={selectedImage !== null} onOpenChange={closeImage}>
        <DialogContent className="max-w-7xl w-full p-0 bg-black/95 border-none">
          <Button variant="ghost" size="icon" className="absolute top-4 right-4 z-50 text-white hover:bg-white/20" onClick={closeImage}>
            <X className="h-6 w-6" />
          </Button>
          
          {selectedImage !== null && <>
              <Button variant="ghost" size="icon" className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20" onClick={prevImage}>
                <ChevronLeft className="h-8 w-8" />
              </Button>
              
              <Button variant="ghost" size="icon" className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20" onClick={nextImage}>
                <ChevronRight className="h-8 w-8" />
              </Button>
              
              <div className="relative w-full h-[80vh] flex items-center justify-center p-8">
                <img src={images[selectedImage].src} alt={images[selectedImage].title} className="max-w-full max-h-full object-contain" />
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <p className="text-white font-semibold">{images[selectedImage].title}</p>
                  <p className="text-white/70 text-sm mt-1">
                    {selectedImage + 1} / {images.length}
                  </p>
                </div>
              </div>
            </>}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>;
};
export default MetalurgicaGallery;