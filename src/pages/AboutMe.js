import React from "react";
import Header from "../components/Header";
import About from "../components/AboutMe";
import Recognition from "../components/Recognition";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function AboutMe() {
  return (
    <>
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
