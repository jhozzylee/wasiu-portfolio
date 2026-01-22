import React, { useState } from "react";
import SEO from "../components/SEO"; // Import the SEO component
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
      {/* SEO */}
      <SEO 
        title="Executive Virtual Assistant | Wasiu Ayoola"
        description="Strategic Executive Assistant & HR solutions helping visionary leaders optimize processes and thrive."
        keywords="Executive Assistant, Virtual Assistant, EA, HR Strategist, Business Optimization"
        image="https://wasiu-portfolio-five.vercel.app/wwasiu-ayoola-executive-assistant.jpg"
      />

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