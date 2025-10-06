import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ServicePigeons from "./pages/ServicePigeons";
import ServiceMoustiques from "./pages/ServiceMoustiques";
import ServiceTermites from "./pages/ServiceTermites";
import Devis from "./pages/Devis";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./ScrollToTop";
import { FloatingCallButton } from "@/components/FloatingCallButton";
import Confirmation from "@/pages/Confirmation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<><Header /><Services /><Footer /></>} />
          <Route path="/services/depigeonnage" element={<><Header /><ServicePigeons /><Footer /></>} />
          <Route path="/services/desinsectisation-moustiques" element={<><Header /><ServiceMoustiques /><Footer /></>} />
          <Route path="/services/desinsectisation-termites" element={<><Header /><ServiceTermites /><Footer /></>} />
          <Route path="/devis" element={<Devis />} />
          <Route path="/a-propos" element={<><Header /><About /><Footer /></>} />
          <Route path="/confirmation" element={<><Confirmation /></>} />
          <Route path="/contact" element={<><Header /><Contact /><Footer /></>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingCallButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
