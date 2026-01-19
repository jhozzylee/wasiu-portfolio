import React from "react";
import Header from "../components/Header";
import TestimonialSection from "../components/Testemonial";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Blog() {
  return (
    <>
      <div>
        <Header />
        <TestimonialSection />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
