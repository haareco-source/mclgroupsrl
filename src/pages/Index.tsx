import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BusinessUnits from "@/components/BusinessUnits";
import MCLConstructora from "@/components/MCLConstructora";
import Ferrenort from "@/components/Ferrenort";
import Metalurgica from "@/components/Metalurgica";
import WhyChooseUs from "@/components/WhyChooseUs";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <BusinessUnits />
      <MCLConstructora />
      <Ferrenort />
      <Metalurgica />
      <WhyChooseUs />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
