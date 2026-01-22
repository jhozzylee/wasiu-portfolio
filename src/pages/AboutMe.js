import React from "react";
import SEO from "../components/SEO";
import Header from "../components/Header";
import About from "../components/AboutMe";
import Recognition from "../components/Recognition";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function AboutMe() {
  return (
    <>
      {/* SEO for About page */}
      <SEO 
        title="About Wasiu Ayoola | Executive Virtual Assistant & HR Strategist"
        description="Discover Wasiu Ayoola, an Executive Virtual Assistant and HR Strategist helping visionary leaders streamline operations and optimize processes."
        keywords="Executive Assistant, Virtual Assistant, HR Strategist, Operations, Business Optimization"
        image="https://wasiu-portfolio-five.vercel.app/wasiu-ayoola-executive-assistant.jpg"
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
