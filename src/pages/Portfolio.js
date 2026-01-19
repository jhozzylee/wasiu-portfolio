import React from "react";
import Header from "../components/Header";
import PortfolioSection from "../components/Portfolio";
import TestimonialSection from "../components/Testemonial";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Portfolio() {
  return (
    <>
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
