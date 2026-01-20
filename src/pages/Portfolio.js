import React from "react";
import SEO from "../components/SEO"; // Import your SEO helper
import Header from "../components/Header";
import PortfolioSection from "../components/Portfolio";
import TestimonialSection from "../components/Testemonial";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Portfolio() {
  return (
    <>
      {/* Portfolio SEO: Focus on results, case studies, and proven expertise */}
      <SEO 
        title="Portfolio & Case Studies | Operational Success" 
        description="View the projects and operational systems Wasiu Ayoola has built for visionary leaders. From HR frameworks to executive support excellence."
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