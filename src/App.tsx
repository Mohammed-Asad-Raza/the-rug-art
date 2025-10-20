import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import WhatsAppContact from "./components/WhatsAppContact";
import Index from "./pages/Index";
import About from "./pages/About";
import CustomRugs from "./pages/CustomRugs";
import NewsEvents from "./pages/NewsEvents";
import Infrastructure from "./pages/Infrastructure";
import Contact from "./pages/Contact";
import ProductCategories from "./pages/ProductCategories";
import RugMakingProcess from "./pages/RugMakingProcess";
// Product subcategory pages
import HandKnotted from "./pages/products/HandKnotted";
import HandTufted from "./pages/products/HandTufted";
import IndoNepali from "./pages/products/IndoNepali";
import HandloomBroadloom from "./pages/products/HandloomBroadloom";
import Flatweave from "./pages/products/Flatweave";
import BerberRugs from "./pages/products/BerberRugs";
import PrintedRugs from "./pages/products/PrintedRugs";
import JuteRugs from "./pages/products/JuteRugs";
import LeatherRugs from "./pages/products/LeatherRugs";
import RoundRugs from "./pages/products/RoundRugs";
import Pouf from "./pages/products/Pouf";
import CushionCover from "./pages/products/CushionCover";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import UnshapedRugs from "./pages/products/UnshapedRugs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/product-categories" element={<ProductCategories />} />
            <Route path="/rug-making-process" element={<RugMakingProcess />} />
            <Route path="/custom-rugs" element={<CustomRugs />} />
            <Route path="/news-events" element={<NewsEvents />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/contact" element={<Contact />} />

            {/* Product subcategory routes */}
            <Route path="/products/hand-knotted" element={<HandKnotted />} />
            <Route path="/products/hand-tufted" element={<HandTufted />} />
            <Route path="/products/indo-nepali" element={<IndoNepali />} />
            <Route
              path="/products/handloom-broadloom"
              element={<HandloomBroadloom />}
            />
            <Route path="/products/flatweave" element={<Flatweave />} />
            <Route path="/products/berber-rugs" element={<BerberRugs />} />
            <Route path="/products/printed-rugs" element={<PrintedRugs />} />
            <Route path="/products/jute-rugs" element={<JuteRugs />} />
            <Route path="/products/leather-rugs" element={<LeatherRugs />} />
            <Route path="/products/round-rugs" element={<RoundRugs />} />
            <Route path="/products/unshaped-rugs" element={<UnshapedRugs />} />
            <Route path="/products/pouf" element={<Pouf />} />
            <Route path="/products/cushion-cover" element={<CushionCover />} />

            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <WhatsAppContact />
          <ScrollToTop />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
