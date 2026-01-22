import React from "react";
import SEO from "../components/SEO";
import Header from "../components/Header";
import PortfolioSection from "../components/Portfolio";
import TestimonialSection from "../components/Testemonial";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Portfolio() {
  return (
    <>
      {/* SEO for Portfolio page */}
      <SEO 
        title="Wasiu Ayoola Portfolio | HR & Operations Case Studies"
        description="Explore Wasiu Ayoola's portfolio showcasing HR frameworks and executive support systems built to optimize operations for visionary leaders."
        keywords="Portfolio, Case Studies, Executive Support, HR Systems, Operations"
        image="https://wasiu-portfolio-five.vercel.app/wasiu-ayoola-executive-assistant.jpg"
      />
      
      <div>
        <Header />
        <PortfolioSection />
        <TestimonialSection />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
