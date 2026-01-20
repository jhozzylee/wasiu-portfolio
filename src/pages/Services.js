import React from "react";
import SEO from "../components/SEO"; // Import your SEO helper
import Header from "../components/Header";
import ServiceSection from "../components/ServicesSection";
import ExperctSection from "../components/ExpertSection";
import WorkProcess from "../components/Process";
import TestimonialSection from "../components/Testemonial";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <>
      {/* Services Hub SEO: Focus on operational excellence and fractional support */}
      <SEO 
        title="Services & Operational Excellence" 
        description="Explore strategic EA & HR solutions, from Talent Acquisition to Customer Operations. Wasiu Ayoola helps businesses scale through people and process excellence."
      />
      
      <div>
        <Header />
        <ServiceSection />
        <ExperctSection />
        <WorkProcess />
        <TestimonialSection />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}