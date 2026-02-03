import React from "react";
import SEO from "../components/SEO";
import Header from "../components/Header";
import ServiceSection from "../components/ServicesSection";
import ExpertSection from "../components/ExpertSection";
import WorkProcess from "../components/Process";
import TestimonialSection from "../components/Testemonial";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <>
      {/* SEO for Services Hub */}
      <SEO 
        title="Services | Executive Virtual Assistant & HR Solutions"
        description="Discover Wasiu Ayoola's strategic EA & HR services, helping businesses scale through people and process excellence. From Talent Acquisition to Customer Operations."
        keywords="Executive Assistant, HR Solutions, Operational Excellence, Talent Acquisition, Customer Operations"
        image="https://wasiu-portfolio-five.vercel.app/wasiu-ayoola-executive-assistant.jpg"
      />
      
      <div>
        <Header />

        <main>

          <ServiceSection />
          <ExpertSection />
          <WorkProcess />
          <TestimonialSection />
          <ContactForm />
        </main>

        <Footer />
      </div>
    </>
  );
}
