import React, { memo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import CTAButton from "./CTAButton";
import bgImage from "../assets/images/Hero.webp";

import client1 from "../assets/images/Nupat.png";
import client2 from "../assets/images/Automatedpro.png";
import client3 from "../assets/images/AmRealty.png";
import client4 from "../assets/images/AssetHaus.png";
import client5 from "../assets/images/Crestville.png";

const clients = [
  { name: "Nupat", logo: client1 },
  { name: "Automated Pro", logo: client2 },
  { name: "AM Realty", logo: client3 },
  { name: "Asset Haus", logo: client4 },
  { name: "Crestville", logo: client5 },
];

// 🔹 Reusable Buttons (desktop & mobile)
const HeroButtons = ({ onOpenBookCall }) => (
  <>
    <CTAButton text="Book a Call" onClick={onOpenBookCall} />
    <Link
      to="/portfolio"
      aria-label="View Portfolio"
      className="group flex items-center gap-8 font-generalsans text-btn text-neutral-default px-2 py-2 rounded-full border border-neutral-default transition-all hover:border-brand-primary hover:text-brand-primary"
    >
      Portfolio
      <span className="bg-neutral-default rounded-full p-2 flex items-center justify-center group-hover:bg-brand-primary transition-all duration-200">
        <ArrowRight className="w-4 h-4 text-background" />
      </span>
    </Link>
  </>
);

const Hero = ({ onOpenBookCall }) => {
  return (
    <section className="bg-background text-neutral-default pt-16 sm:pt-24 md:pt-36">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-0 flex flex-col lg:flex-row items-center justify-between">
        
        {/* Left / Text */}
        <div className="lg:w-7/12 text-center lg:text-left">
          {/* Subheading */}
          <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
            <div className="w-10 h-[2px] bg-brand-primary"></div>
            <p className="uppercase tracking-[0.2em] text-xs font-bold text-brand-primary">
              EA & People Management Expert
            </p>
          </div>

          {/* Heading */}
          <h1 className="font-satoshi text-[40px] md:text-h1 leading-[1.1] mb-6 text-balance font-bold">
            Helping Businesses Thrive Through{" "}
            <span className="text-brand-primary italic">People & Process</span> Excellence
          </h1>
          
         {/* Description */}
         <p className="text-bodyLg text-neutral-muted mb-10 max-w-[540px] mx-auto lg:mx-0 leading-relaxed">
            I streamline operations and provide strategic executive support, allowing founders to focus on what matters most—growth.
          </p>

          {/* Buttons (desktop) */}
          <div className="hidden lg:flex justify-between items-center w-full max-w-[356px] p-2 border border-neutral-default/20 bg-neutral-default/10 rounded-full">
            <HeroButtons onOpenBookCall={onOpenBookCall} />
          </div>

          {/* Quote */}
          <blockquote className="hidden lg:block max-w-[256px] mx-auto lg:mx-0">
            <span
              aria-hidden="true"
              className="text-brand-primary font-satoshi text-[100px] leading-[0] pt-[80px] block"
            >
              “
            </span>
            <p className="font-generalsans text-bodySm font-light">
              From streamlining processes to uplifting our workplace culture, Wasiu delivers results every time.
            </p>
          </blockquote>
        </div>

        {/* Right / Image */}
        <div className="relative lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={bgImage}
            alt="Professional HR and Executive Support consultant"
            loading="lazy"
            className="w-full max-w-[552px] h-auto"
          />

          {/* Buttons (mobile overlay) */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-between items-center w-full max-w-[356px] p-2 border border-neutral-default/20 bg-neutral-default/10 rounded-full lg:hidden">
            <HeroButtons onOpenBookCall={onOpenBookCall} />
          </div>
        </div>
      </div>

      {/* Client Logos */}
      <div className="bg-surface-muted/30 border-y border-surface-dim pt-24 pb-12 lg:pt-32 lg:pb-16 relative z-0">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
          {clients.map((client, index) => (
            <img
              key={index}
              src={client.logo}
              alt={`${client.name} logo`}
              className="h-6 sm:h-8 md:h-10 object-contain"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
