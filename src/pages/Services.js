import React from "react";
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
