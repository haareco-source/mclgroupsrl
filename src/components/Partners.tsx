import logoConstructora from "@/assets/logo-constructora.jpg";
import logoFerrenort from "@/assets/logo-ferrenort.jpg";
import logoMcl3d from "@/assets/logo-mcl-3d.png";
import logoMclGroup from "@/assets/logo-mcl-group.jpg";
import logoMetalurgica from "@/assets/logo-metalurgica.jpg";

const Partners = () => {
  const partners = [
    { name: "MCL Constructora", logo: logoConstructora },
    { name: "Ferrenort", logo: logoFerrenort },
    { name: "MCL 3D", logo: logoMcl3d },
    { name: "MCL Group", logo: logoMclGroup },
    { name: "Metalúrgica", logo: logoMetalurgica },
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
