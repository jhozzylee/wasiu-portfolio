import React from "react";
import SEO from "../components/SEO"; // Import your SEO helper
import Header from "../components/Header";
import About from "../components/AboutMe";
import Recognition from "../components/Recognition";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function AboutMe() {
  return (
    <>
      {/* Specific SEO for the About page */}
      <SEO 
        title="About Me | Strategic Operations & HR Expert" 
        description="Learn more about Wasiu Ayoola, a dedicated Executive Virtual Assistant and HR Strategist helping visionary leaders build sustainable systems."
      />
      
      <div>
        <Header />
        <About />
        <Recognition />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}