import { Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">MCL GROUP SRL</h3>
            <p className="text-white/80 mb-4 max-w-md">
              Metalúrgica y Construcciones Ledesma. Más de 50 años brindando
              soluciones industriales integrales en el norte argentino.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-white/80 hover:text-secondary transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("quienes-somos")}
                  className="text-white/80 hover:text-secondary transition-colors"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("negocios")}
                  className="text-white/80 hover:text-secondary transition-colors"
                >
                  Negocios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("proyectos")}
                  className="text-white/80 hover:text-secondary transition-colors"
                >
                  Proyectos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="text-white/80 hover:text-secondary transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <ul className="space-y-2 text-white/80">
              <li>Av. 9 de Julio 250</li>
              <li>L.G.S.M., Jujuy</li>
              <li>
                <a
                  href="tel:+5493886011111"
                  className="hover:text-secondary transition-colors"
                >
                  +54 9 3886 011111
                </a>
              </li>
              <li>
                <a
                  href="mailto:claudiolizarraga@gmail.com"
                  className="hover:text-secondary transition-colors"
                >
                  claudiolizarraga@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:empresas@mclgroupsrl.com.ar"
                  className="hover:text-secondary transition-colors"
                >
                  empresas@mclgroupsrl.com.ar
                </a>
              </li>
              <li className="pt-2">
                <strong>Horario:</strong>
                <br />
                Lunes a Viernes
                <br />
                8:00 - 18:00 hs
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60">
            © 2025 MCL GROUP SRL - Todos los derechos reservados.
          </p>
          <p className="text-white/40 text-sm mt-2">
            Director: Claudio Lizárraga
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
