import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Expertise from "../components/Expertise";
import ProjectsSection from "../components/ ProjectsSection";
import TestimonialSection from "../components/Testemonial";
import Contact from "../components/ContactForm";
import Footer from "../components/Footer";
import BookCall from "../components/BookCall";

export default function Home() {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  const handleOpenBookCall = () => setIsBookCallOpen(true);
  const handleCloseBookCall = () => setIsBookCallOpen(false);

  return (
    <>
      <Header />
      <Hero onOpenBookCall={handleOpenBookCall} />
      <About />
      <Expertise />
      <ProjectsSection />
      <TestimonialSection />
      <Contact />
      <Footer />

      {/* Book a Call Modal */}
      <BookCall isOpen={isBookCallOpen} onClose={handleCloseBookCall} />
    </>
  );
}
