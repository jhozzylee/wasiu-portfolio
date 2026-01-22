import React from "react";
import SEO from "../components/SEO";
import Header from "../components/Header";
import TestimonialSection from "../components/Testemonial";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import BlogIntro from "../components/Blogs";

export default function Blog() {
  return (
    <>
      {/* SEO for Blog page */}
      <SEO 
        title="Wasiu Ayoola Blog | HR & Operations Insights"
        description="Read expert articles by Wasiu Ayoola on HR strategy, executive support, and building efficient business systems for visionary leaders."
        keywords="Blog, HR Strategy, Executive Support, Operations, Business Systems"
        image="https://wasiu-portfolio-five.vercel.app/wasiu-ayoola-executive-assistant.jpg"
      />
      
      <div>
        <Header />
        <BlogIntro />
        <TestimonialSection />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
