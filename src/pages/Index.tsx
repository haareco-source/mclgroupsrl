import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import BusinessUnits from "@/components/BusinessUnits";
import WhyChooseUs from "@/components/WhyChooseUs";
import Projects from "@/components/Projects";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutUs />
      <BusinessUnits />
      <WhyChooseUs />
      <Projects />
      <Partners />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
