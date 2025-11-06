import logoConstructora from "@/assets/logo-constructora.jpg";
import logoFerrenort from "@/assets/logo-ferrenort.jpg";
import logoMcl3d from "@/assets/logo-mcl-3d.png";
import logoMclGroup from "@/assets/logo-mcl-group.jpg";
import logoMetalurgica from "@/assets/logo-metalurgica.jpg";
import logoLedesma from "@/assets/partners/logo-ledesma.png";
import logoSullair from "@/assets/partners/logo-sullair.png";
import logoSulvy from "@/assets/partners/logo-sulvy.png";
import logoSantander from "@/assets/partners/logo-santander.png";
import logoPluspetrol from "@/assets/partners/logo-pluspetrol.png";
import logoMacro from "@/assets/partners/logo-macro.png";
import logoEjesa from "@/assets/partners/logo-ejesa.png";
import logoEjesedsa from "@/assets/partners/logo-ejesedsa.png";
import logoLaMendieta from "@/assets/partners/logo-la-mendieta.png";
import logoSanMartin from "@/assets/partners/logo-san-martin.png";
import logoEcos from "@/assets/partners/logo-ecos.png";
import logoRiverPlate from "@/assets/partners/logo-river-plate.png";
import logoPalmaSola from "@/assets/partners/logo-palma-sola.png";
import logoDiocesisJujuy from "@/assets/partners/logo-diocesis-jujuy.png";

const Partners = () => {
  const partners = [
    { name: "MCL Constructora", logo: logoConstructora },
    { name: "Ferrenort", logo: logoFerrenort },
    { name: "MCL 3D", logo: logoMcl3d },
    { name: "MCL Group", logo: logoMclGroup },
    { name: "Metalúrgica", logo: logoMetalurgica },
    { name: "Ledesma", logo: logoLedesma },
    { name: "Sullair Argentina", logo: logoSullair },
    { name: "Sulvy", logo: logoSulvy },
    { name: "Banco Santander", logo: logoSantander },
    { name: "Pluspetrol", logo: logoPluspetrol },
    { name: "Banco Macro", logo: logoMacro },
    { name: "EJESA", logo: logoEjesa },
    { name: "EJESEDSA", logo: logoEjesedsa },
    { name: "La Mendieta", logo: logoLaMendieta },
    { name: "Municipalidad Libertador Gral. San Martín", logo: logoSanMartin },
    { name: "ECOS SA", logo: logoEcos },
    { name: "Fundación River Plate", logo: logoRiverPlate },
    { name: "Palma Sola", logo: logoPalmaSola },
    { name: "Diócesis de Jujuy", logo: logoDiocesisJujuy },
  ];

  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2">
              <div className="w-12 h-0.5 bg-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight uppercase">
                NUESTROS PARTNERS
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empresas y organizaciones que confían en nuestra experiencia
          </p>
        </div>

        {/* Infinite scroll banner */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-64 mx-8 flex flex-col items-center justify-center"
              >
                <div className="bg-card border border-border rounded-lg p-6 h-32 flex items-center justify-center w-full hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-20 max-w-full object-contain"
                  />
                </div>
                <p className="mt-4 text-sm font-medium text-muted-foreground text-center">
                  {partner.name}
                </p>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-64 mx-8 flex flex-col items-center justify-center"
              >
                <div className="bg-card border border-border rounded-lg p-6 h-32 flex items-center justify-center w-full hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-20 max-w-full object-contain"
                  />
                </div>
                <p className="mt-4 text-sm font-medium text-muted-foreground text-center">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
