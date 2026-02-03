import React, { useState, useEffect } from "react";
import { Star, ArrowLeft, ArrowRight, Quote } from "lucide-react";
import avatar1 from "../assets/images/avatar1.png";
import avatar2 from "../assets/images/avatar2.png";

const testimonials = [
  {
    name: "Nnamdi Ugwu",
    company: "CEO, Napat Technologies",
    image: avatar1,
    rating: 5,
    text: "Working with Ayoola feels effortless. He anticipates needs before they even come up and always delivers with a smile."
  },
  {
    name: "Adebolu Mayowa",
    company: "CEO, Assethaus",
    image: avatar2,
    rating: 5,
    text: "We had no structure for two years and it was chaos across our subsidiaries. Ayoola fixed our people and operations structure from scratch! I am forever grateful."
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2);

  useEffect(() => {
    const handleResize = () => setCardsPerView(window.innerWidth < 1024 ? 1 : 2);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-background text-neutral-default py-24 font-generalsans overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-12 bg-brand-primary"></span>
              <span className="uppercase tracking-[0.2em] text-sm font-bold text-brand-primary">
                Trusted by Professionals
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-satoshi font-bold leading-tight">
              Stories that make me <span className="text-brand-primary">proud</span>
            </h2>
          </div>

          {/* Navigation (Desktop) */}
          <div className="hidden md:flex gap-4">
            <button 
              onClick={handlePrev} 
              className="w-14 h-14 rounded-full border border-surface-dim bg-surface-muted flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all duration-300"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={handleNext} 
              className="w-14 h-14 rounded-full bg-brand-primary text-white flex items-center justify-center hover:shadow-lg hover:shadow-brand-primary/40 transition-all duration-300"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.slice(currentIndex, currentIndex + cardsPerView).map((testimonial, idx) => (
            <div
              key={idx}
              className="relative bg-surface-muted border border-surface-dim rounded-[32px] p-8 md:p-12 transition-all duration-500"
            >
              {/* Decorative Quote Icon using your brand color with low opacity */}
              <Quote className="absolute top-10 right-10 w-16 h-16 text-brand-primary/5 -z-0" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Star Rating */}
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? "fill-brand-primary text-brand-primary" : "text-surface-dim"}`} 
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-xl md:text-2xl font-satoshi leading-relaxed text-neutral-default mb-10 italic">
                  "{testimonial.text}"
                </p>

                {/* Profile Section */}
                <div className="mt-auto flex items-center gap-5 pt-8 border-t border-surface-dim">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-primary/20">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-satoshi font-bold text-xl text-neutral-default">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-neutral-muted">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Nav */}
        <div className="flex md:hidden justify-center gap-6 mt-12">
           <button onClick={handlePrev} className="w-12 h-12 rounded-full border border-surface-dim bg-surface-muted flex items-center justify-center">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button onClick={handleNext} className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;