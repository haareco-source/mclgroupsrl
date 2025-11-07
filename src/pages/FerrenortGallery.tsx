import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Wrench,
  HardHat,
  Lightbulb,
  Package,
  Settings,
  Hammer,
  Award,
  Shield,
  Users,
  MapPin,
  Phone,
  Clock,
  Factory,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import logoFerrenort from "@/assets/logo-ferrenort-nuevo.jpeg";
import work9 from "@/assets/gallery/work-9.jpg";

const FerrenortGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    {
      icon: Wrench,
      title: "Herramientas",
      items: ["Herramientas manuales", "Herramientas eléctricas", "Herramientas neumáticas", "Medición y nivelación"],
    },
    {
      icon: Settings,
      title: "Máquinas y Equipos",
      items: ["Compresores", "Generadores", "Soldadoras", "Equipos de corte"],
    },
    {
      icon: Hammer,
      title: "Fijación y Sujeción",
      items: ["Tornillos y tuercas", "Pernos y arandelas", "Clavos y grapas", "Anclajes químicos"],
    },
    {
      icon: Package,
      title: "Materiales de Construcción",
      items: ["Hierros y aceros", "Perfiles estructurales", "Chapas y planchuelas", "Tubos y caños"],
    },
    {
      icon: HardHat,
      title: "Seguridad Industrial",
      items: ["EPP completo", "Cascos y guantes", "Arneses y líneas de vida", "Señalización"],
    },
    {
      icon: Lightbulb,
      title: "Suministros Varios",
      items: ["Iluminación industrial", "Cables y conectores", "Pinturas y revestimientos", "Abrasivos y consumibles"],
    },
  ];

  const images = [{ src: work9, title: "Transporte de maquinaria pesada - Equipos industriales" }];

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
    { icon: Wrench, label: "TOTAL TOOLS", sublabel: "Representante Oficial" },
  ];

  const brands = [
    "DeWalt",
    "Bosch",
    "Makita",
    "Stanley",
    "Black+Decker",
    "Truper",
    "Milwaukee",
    "Karcher",
    "Lincoln",
    "Irwin",
    "3M",
    "Bauker",
  ];

  const contactInfo = [
    { icon: MapPin, label: "Dirección", value: "Jujuy, Argentina" },
    { icon: Phone, label: "WhatsApp", value: "+54 9 388 123-4567" },
    { icon: Clock, label: "Horario", value: "Lun-Vie: 8:00-18:00, Sáb: 8:00-13:00" },
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
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-ferrenort-red/5 via-background to-ferrenort-green/5">
        {/* Diagonal Accents */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-ferrenort-yellow/10 to-transparent transform -skew-x-12"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-ferrenort-green/10 to-transparent transform skew-x-12"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center animate-fade-in">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <img src={logoFerrenort} alt="Ferrenort Logo" className="h-32 md:h-40 w-auto object-contain" />
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-6 font-light">
              One-Stop Tools Station
            </p>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              Tu ferretería industrial de confianza. Amplio stock de herramientas, materiales y equipos para la
              industria y construcción.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                onClick={() => scrollToSection("contacto")}
                size="lg"
                className="bg-ferrenort-red hover:bg-ferrenort-red/90 text-white font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              >
                Contactar Ahora
              </Button>
              <Button
                onClick={() => scrollToSection("productos")}
                size="lg"
                className="bg-ferrenort-green hover:bg-ferrenort-green/90 text-white font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              >
                Ver Catálogo
              </Button>
              <Button
                onClick={() => scrollToSection("marcas")}
                size="lg"
                variant="outline"
                className="font-semibold text-lg px-8 py-6 border-2 border-ferrenort-yellow hover:bg-ferrenort-yellow/10"
              >
                Nuestras Marcas
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                const colors = ["ferrenort-red", "ferrenort-green", "ferrenort-yellow"];
                const bgColor = colors[index % 3];
                return (
                  <div
                    key={index}
                    className="group bg-card/80 backdrop-blur-sm rounded-xl p-6 border-2 border-transparent hover:border-current transition-all duration-300 hover:shadow-lg animate-fade-in"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      borderColor:
                        index === 0
                          ? "hsl(var(--ferrenort-red) / 0.3)"
                          : index === 1
                            ? "hsl(var(--ferrenort-green) / 0.3)"
                            : "hsl(var(--ferrenort-yellow) / 0.3)",
                    }}
                  >
                    <Icon
                      className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform"
                      style={{
                        color:
                          index === 0
                            ? "hsl(var(--ferrenort-red))"
                            : index === 1
                              ? "hsl(var(--ferrenort-green))"
                              : "hsl(var(--ferrenort-yellow))",
                      }}
                    />
                    <div className="text-3xl font-bold mb-1 text-foreground">{stat.label}</div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-ferrenort-red via-ferrenort-green to-ferrenort-yellow bg-clip-text text-transparent">
              Nuestros Productos
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
              Amplio catálogo de herramientas y materiales industriales de las mejores marcas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {categories.map((category, index) => {
              const Icon = category.icon;
              const colors = ["ferrenort-red", "ferrenort-green", "ferrenort-yellow"];
              const color = colors[index % 3];
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 animate-fade-in border-l-4 hover:scale-105"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    borderLeftColor:
                      index % 3 === 0
                        ? "hsl(var(--ferrenort-red))"
                        : index % 3 === 1
                          ? "hsl(var(--ferrenort-green))"
                          : "hsl(var(--ferrenort-yellow))",
                  }}
                >
                  <CardHeader>
                    <div
                      className="w-12 h-12 rounded flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300"
                      style={{
                        backgroundColor:
                          index % 3 === 0
                            ? "hsl(var(--ferrenort-red) / 0.1)"
                            : index % 3 === 1
                              ? "hsl(var(--ferrenort-green) / 0.1)"
                              : "hsl(var(--ferrenort-yellow) / 0.1)",
                      }}
                    >
                      <Icon
                        className="w-6 h-6"
                        style={{
                          color:
                            index % 3 === 0
                              ? "hsl(var(--ferrenort-red))"
                              : index % 3 === 1
                                ? "hsl(var(--ferrenort-green))"
                                : "hsl(var(--ferrenort-yellow))",
                        }}
                      />
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{
                              backgroundColor:
                                index % 3 === 0
                                  ? "hsl(var(--ferrenort-red))"
                                  : index % 3 === 1
                                    ? "hsl(var(--ferrenort-green))"
                                    : "hsl(var(--ferrenort-yellow))",
                            }}
                          ></div>
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

      {/* Brands Section */}
      <section id="marcas" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Factory className="w-16 h-16 mx-auto mb-4 text-ferrenort-green" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-foreground">Marcas de Calidad</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
              Trabajamos con las marcas más reconocidas del mercado
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="group bg-card border-2 border-border hover:border-ferrenort-red rounded-lg p-6 flex items-center justify-center transition-all duration-300 hover:shadow-lg animate-fade-in hover:scale-105"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="font-bold text-lg text-center text-muted-foreground group-hover:text-ferrenort-red transition-colors">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-foreground">Galería de Equipos</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
              Equipos industriales y servicios especializados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg cursor-pointer animate-fade-in border-2 border-border hover:border-ferrenort-yellow transition-all duration-300"
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
                <div className="absolute inset-0 bg-gradient-to-t from-ferrenort-red/80 via-ferrenort-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-foreground">Contacto</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
              Visitanos o comunicate con nosotros para consultas y presupuestos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const colors = ["ferrenort-red", "ferrenort-green", "ferrenort-yellow"];
              return (
                <Card
                  key={index}
                  className="group text-center hover:shadow-xl transition-all duration-300 animate-fade-in border-2 hover:scale-105"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    borderColor:
                      index === 0
                        ? "hsl(var(--ferrenort-red) / 0.3)"
                        : index === 1
                          ? "hsl(var(--ferrenort-green) / 0.3)"
                          : "hsl(var(--ferrenort-yellow) / 0.3)",
                  }}
                >
                  <CardHeader>
                    <div
                      className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                      style={{
                        backgroundColor:
                          index === 0
                            ? "hsl(var(--ferrenort-red) / 0.1)"
                            : index === 1
                              ? "hsl(var(--ferrenort-green) / 0.1)"
                              : "hsl(var(--ferrenort-yellow) / 0.1)",
                      }}
                    >
                      <Icon
                        className="w-8 h-8"
                        style={{
                          color:
                            index === 0
                              ? "hsl(var(--ferrenort-red))"
                              : index === 1
                                ? "hsl(var(--ferrenort-green))"
                                : "hsl(var(--ferrenort-yellow))",
                        }}
                      />
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground">{info.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{info.value}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-ferrenort-red via-ferrenort-green to-ferrenort-yellow hover:opacity-90 text-white font-semibold text-lg px-12 py-6 shadow-lg hover:shadow-xl transition-all"
            >
              Enviar Consulta por WhatsApp
            </Button>
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
