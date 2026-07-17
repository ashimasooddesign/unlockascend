import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ScrollToHash from "./components/ScrollToHash";
import NotFound from "./pages/NotFound";
import YogaSutraStudy from "./pages/YogaSutraStudy";
import NavratriSadhana from "./pages/NavratriSadhana";
import OneOnOneSessions from "./pages/OneOnOneSessions";
import Purushartha from "./pages/Purushartha";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/yoga-sutra-study" element={<YogaSutraStudy />} />
          <Route path="/navratri-sadhana" element={<NavratriSadhana />} />
          <Route path="/one-on-one" element={<OneOnOneSessions />} />
          <Route path="/purushartha" element={<Purushartha />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
