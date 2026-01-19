import React from "react";
import aboutImage from "../assets/images/About-img.png";
import CTAButton from "./CTAButton";

const aboutCards = [
  {
    title: "5+ Years",
    description: "HR and executive support that drives success.",
  },
  {
    title: "Results Driven",
    description: "Boosting trust,  productivity, keeping teams engaged.",
  },
  {
    title: "Efficiency Ninja",
    description: "Streamlining schedules, projects, and operations.",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-background text-neutral-default py-14 font-generalsans">
      <div className="max-w-[1120px] mx-auto flex flex-col lg:flex-row gap-12 items-center px-4 sm:px-6">
        
        {/* LEFT / IMAGE */}
        <div className="w-full lg:w-[480px] order-2 lg:order-1">
          <img
            src={aboutImage}
            alt="About Wasiu"
            className="w-full max-w-full object-contain mx-auto"
          />
        </div>

        {/* RIGHT / CONTENT */}
        <div className="flex-1 space-y-6 order-1 lg:order-2">
          
          {/* Heading */}
          <div>
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <div className="w-4 sm:w-6 md:w-8 h-1 bg-brand-primary" />
              <p className="uppercase tracking-wide text-bodyLg">
                About Me
              </p>
            </div>

            <h2 className="text-h2 font-satoshi text-center lg:text-left">
              Who is{" "}
              <span className="text-brand-primary">Wasiu Ayoola?</span>
            </h2>
          </div>

          {/* Paragraph */}
          <p className="text-bodyLg font-satoshi max-w-2xl text-center lg:text-left">
          I’m Wasiu — your go-to Executive sidekick and HR problem solver. I make sure 
          businesses operate at their best. From boosting team happiness to keeping the 
          boss’s calendar running smoother than morning coffee. Think of me as the bridge 
          between big ideas and flawless execution.
          </p>

          {/* IMAGE ON MOBILE (moves under paragraph) */}
          <div className="block lg:hidden">
            <img
              src={aboutImage}
              alt="About Wasiu"
              className="w-full max-w-sm mx-auto mt-6"
            />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-8">
            {aboutCards.map((card, index) => (
              <div key={index} className="w-full text-center lg:text-left">
                <h3 className="text-h3 text-neutral-muted font-satoshi mb-2">
                  {card.title}
                </h3>
                <p className="text-neutral-muted text-bodySm">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 flex justify-center lg:justify-start">
          <a href="/Ayoola-Olanisebe-CV.pdf" download="Ayoola-Olanisebe-CV.pdf">
            <CTAButton text="Download CV" />
          </a>
          </div>
        </div>
      </div>
    </section>
  );
}
