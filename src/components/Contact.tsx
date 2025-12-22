import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor complete todos los campos requeridos",
        variant: "destructive",
      });
      return;
    }

    // Send via WhatsApp
    const whatsappMessage = `Hola, mi nombre es ${formData.name}. ${formData.message}. Mi email: ${formData.email}${formData.phone ? `, teléfono: ${formData.phone}` : ""}.`;
    const whatsappUrl = `https://wa.me/5493886011111?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirigiendo a WhatsApp",
      description: "Se abrirá una ventana con su mensaje",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Ubicación",
      content: "Av. 9 de Julio 250, L.G.S.M., Jujuy",
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: "+54 9 3886 011111",
      link: "tel:+5493886011111",
    },
    {
      icon: Mail,
      title: "Email Personal",
      content: "claudiolizarraga@gmail.com",
      link: "mailto:claudiolizarraga@gmail.com",
    },
    {
      icon: Mail,
      title: "Email Empresas",
      content: "empresas@mclgroupsrl.com.ar",
      link: "mailto:empresas@mclgroupsrl.com.ar",
    },
    {
      icon: Clock,
      title: "Horario",
      content: "Lunes a Viernes: 8:00 - 18:00",
    },
  ];

  return (
    <section id="contacto" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contactanos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos listos para atender su consulta y comenzar su proyecto
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="animate-fade-in-left">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nombre Completo *
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Juan Pérez"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="juan@empresa.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Teléfono
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+54 9 388 xxxxxxx"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Cuéntenos sobre su proyecto..."
                    rows={5}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-secondary hover:bg-secondary/90 text-foreground font-semibold"
                >
                  Enviar Consulta por WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-secondary transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.content}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* WhatsApp Direct Button */}
            <Card className="bg-gradient-to-br from-secondary to-secondary/90 border-0 shadow-xl">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-foreground text-lg mb-2">
                  Respuesta Inmediata
                </h3>
                <p className="text-foreground/80 mb-4">
                  Chatea con nosotros por WhatsApp
                </p>
                <Button
                  onClick={() =>
                    window.open("https://wa.me/5493886011111", "_blank")
                  }
                  size="lg"
                  className="w-full bg-foreground text-background hover:bg-foreground/90"
                >
                  Abrir WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Google Maps */}
            <Card className="overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.9!2d-65.3!3d-24.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDEwJzQ4LjAiUyA2NcKwMTgnMDAuMCJX!5e0!3m2!1ses!2sar!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Ubicación MCL GROUP SRL"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
