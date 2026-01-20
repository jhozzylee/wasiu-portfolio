import React from "react";
import SEO from "../components/SEO"; // Import your SEO helper
import Header from "../components/Header";
import TestimonialSection from "../components/Testemonial";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import BlogIntro from "../components/Blogs";

export default function Blog() {
  return (
    <>
      {/* Blog Page SEO: Focus on thought leadership and industry insights */}
      <SEO 
        title="Blog & Insights | Operational Excellence" 
        description="Explore articles on HR strategy, executive support, and building efficient business systems by Wasiu Ayoola."
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