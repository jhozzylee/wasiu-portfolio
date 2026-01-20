import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // Added this
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import ServiceDetail from "./pages/ServiceDetail";

function App() {
  return (
    <HelmetProvider> 
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;