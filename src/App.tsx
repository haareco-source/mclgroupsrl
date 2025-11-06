import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MCLConstructoraGallery from "./pages/MCLConstructoraGallery";
import MetalurgicaGallery from "./pages/MetalurgicaGallery";
import FerrenortGallery from "./pages/FerrenortGallery";
import MontajeIndustrial from "./pages/MontajeIndustrial";
import SistemaPiping from "./pages/SistemaPiping";
import ObraCivil from "./pages/ObraCivil";
import AislamientoTermico from "./pages/AislamientoTermico";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mcl-constructora/galeria" element={<MCLConstructoraGallery />} />
          <Route path="/metalurgica/galeria" element={<MetalurgicaGallery />} />
          <Route path="/ferrenort/galeria" element={<FerrenortGallery />} />
          <Route path="/proyectos/montaje-industrial" element={<MontajeIndustrial />} />
          <Route path="/proyectos/sistema-piping" element={<SistemaPiping />} />
          <Route path="/proyectos/obra-civil" element={<ObraCivil />} />
          <Route path="/proyectos/aislamiento-termico" element={<AislamientoTermico />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
