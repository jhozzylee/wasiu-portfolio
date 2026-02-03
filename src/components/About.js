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
    description: "Boosting trust, productivity, and engagement.",
  },
  {
    title: "Efficiency Ninja",
    description: "Streamlining schedules and operations.",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-background text-neutral-default py-20 lg:py-32 font-generalsans overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* DESKTOP IMAGE CONTAINER */}
          <div className="hidden lg:block w-full lg:w-[45%] sticky top-32">
            <div className="relative">
              {/* Decorative Luxury Element */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t border-l border-brand-primary/30" />
              <img
                src={aboutImage}
                alt="Wasiu Ayoola"
                className="relative z-10 w-full rounded-2xl grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b border-r border-brand-primary/30" />
            </div>
          </div>

          {/* CONTENT COLUMN */}
          <div className="flex-1 w-full">
            {/* 1. TOP HEADING */}
            <header className="mb-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="w-6 h-[1px] bg-brand-primary" />
                <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-brand-primary">
                  The Founder's Ally
                </span>
              </div>
              <h2 className="text-h2 md:text-h1 font-satoshi leading-[1.1] font-bold">
                Who is <br />
                <span className="text-brand-primary italic">Wasiu Ayoola?</span>
              </h2>
            </header>

            {/* 2. MOBILE IMAGE (Enhanced for luxury feel) */}
            <div className="block lg:hidden w-full mb-12 relative">
               <div className="relative z-10 bg-surface-muted/30 rounded-3xl p-4 border border-surface-dim">
                 <img
                    src={aboutImage}
                    alt="Wasiu Ayoola"
                    className="w-full max-w-sm mx-auto object-contain"
                  />
               </div>
               {/* Subtle background glow for depth */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-brand-primary/10 blur-[80px] -z-0" />
            </div>

            {/* 3. BIOGRAPHY */}
            <div className="space-y-6 mb-16">
              <p className="text-bodyLg font-satoshi text-neutral-default/80 leading-relaxed text-center lg:text-left">
                I’m Wasiu — your go-to Executive sidekick and HR problem solver. I make sure 
                businesses operate at their best. From boosting team happiness to keeping the 
                boss’s calendar running smoother than morning coffee.
              </p>
              <p className="text-bodyLg font-satoshi text-neutral-default/80 leading-relaxed text-center lg:text-left">
                Think of me as the bridge between big ideas and flawless execution.
              </p>
            </div>

            {/* 4. EXECUTIVE STATS/CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-y border-surface-dim/50">
              {aboutCards.map((card, index) => (
                <div key={index} className="space-y-2 text-center lg:text-left">
                  <span className="text-3xl font-satoshi font-bold text-brand-primary block">
                    {card.title}
                  </span>
                  <p className="text-[11px] uppercase tracking-widest font-bold text-neutral-default/40 leading-tight">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            {/* 5. ACTION AREA */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
              <a href="/Ayoola-Olanisebe-CV.pdf" download>
                <CTAButton text="Download CV" />
              </a>
              <div className="flex items-center gap-3">
                <span className="flex h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-default/50">
                  Open for new roles
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}