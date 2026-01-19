import React, { useState, useEffect } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import avatar1 from "../assets/images/avatar1.png";
import avatar2 from "../assets/images/avatar2.png";

const testimonials = [
  {
    name: "Nnamdi Ugwu",
    company: "CEO, Napat Technologies",
    image: avatar1,
    rating: 4,
    text: "Working with Ayoola feels effortless. He anticipates needs before they even come up and always delivers with a smile."
  },
  {
    name: "Adebolu Mayowa",
    company: "CEO, Assethaus",
    image: avatar2,
    rating: 4,
    text: "We had no structure for two years and it was a lot of chaos across our two subsidiaries. Ayoola came onboard and helped fixed our people and operations structure from the scratch! I am forever grateful to him."
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2); // default desktop

  // ✅ Detect screen size and update how many cards to show
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1); // mobile
      } else {
        setCardsPerView(2); // tablet and up
      }
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Navigation logic
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - cardsPerView : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev >= testimonials.length - cardsPerView ? 0 : prev + 1
    );
  };

  // ✅ Slice based on current index & cardsPerView
  const displayedTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + cardsPerView
  );

  return (
    <section className="bg-background text-neutral-default py-14 font-generalsans">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-0 flex flex-col items-center gap-6">
        {/* Header */}
        <div>
            <div className="flex items-center gap-2 justify-center">
              <div className="w-4 sm:w-6 md:w-8 h-1 bg-brand-primary" />
              <p className="uppercase tracking-wide text-center text-bodyLg">
                Trusted by Professionals
              </p>
            </div>

            <h2 className="text-h2 font-satoshi text-center lg:text-left">
              Stories that makes me{" "}
              <span className="text-brand-primary">proud</span>
            </h2>
          </div>

        {/* Testimonial Cards */}
        <div className="mt-12 flex flex-col sm:flex-row sm:flex-nowrap gap-6 justify-center w-full">
          {displayedTestimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-dark-muted border border-neutral-muted rounded-[16px] p-6 flex flex-col gap-6 text-surface w-full sm:basis-1/2 transition-all"
            >
                {/* Avatar + Name + Company */}
              <div className="flex items-center gap-4 mt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <h2 className="text-h2 font-filson">{testimonial.name}</h2>
                  <p className="text-bodySm text-neutral-muted">
                    {testimonial.company}
                  </p>
                  {/* Star Rating */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "fill-current text-brand-primary"
                        : "stroke-current text-brand-primary"
                    }`}
                  />
                ))}
              </div>
                </div>
              </div>
    

              {/* Testimonial Text */}
              <p className="text-bodyLg">{testimonial.text}</p>

            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 flex gap-4">
          <button
            onClick={handlePrev}
            className="bg-surface-muted text-surface p-3 rounded-full hover:scale-105 transition flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="bg-brand-primary text-surface p-3 rounded-full hover:scale-105 transition flex items-center justify-center"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
