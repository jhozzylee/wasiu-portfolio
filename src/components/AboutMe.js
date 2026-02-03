import React, { memo } from "react";
import bgImage from "../assets/images/About-hero.png";

const About = () => (
  <section className="bg-background text-neutral-default font-generalsans py-20 lg:py-32">
    <div className="max-w-[1120px] mx-auto px-6 flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">
      
      {/* Left Section - Content */}
      <div className="lg:w-1/2">
        {/* Accent Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[2px] bg-brand-primary" />
          <p className="uppercase tracking-[0.2em] text-xs font-bold text-brand-primary">The Person Behind the Process</p>
        </div>

        <h2 className="font-satoshi text-[32px] md:text-h2 leading-tight mb-8">
          Meet Wasiu <span className="text-brand-primary italic">Ayoola</span>
        </h2>

        {/* Mobile Image Overlay */}
        <div className="flex justify-center mb-10 lg:hidden">
          <div className="relative">
            <div className="absolute inset-0 bg-brand-primary/10 blur-2xl rounded-full" />
            <img
              src={bgImage}
              alt="Wasiu Ayoola - Executive Partner"
              loading="lazy"
              className="relative z-10 w-full max-w-[400px] h-auto rounded-[32px] border border-surface-dim"
            />
          </div>
        </div>

        <div className="space-y-6 text-neutral-muted leading-relaxed">
          <p className="text-bodyLg">
            Wasiu has spent his career transforming how organizations manage people and processes 
            through his strategic thinking, people-first mindset, and hands-on expertise. 
          </p>
          <p className="text-body">
            With a background in Customer Experience, Marketing, and general business operations, 
            he has shaped his understanding of key and realistic business needs, especially in startup 
            environments. He is passionate about helping business executives and founders create workplace 
            systems that inspire trust, boost productivity, and keep teams engaged.
          </p>
        </div>

        {/* Second Heading with Margin */}
        <h2 className="font-satoshi text-[28px] md:text-h2 leading-tight mt-16 mb-8 border-l-4 border-brand-primary pl-6">
          From Admin Assistant to <br />
          <span className="text-brand-primary">Trusted Executive Partner.</span>
        </h2>

        <div className="space-y-6 text-neutral-muted leading-relaxed">
          <p className="text-body">
            Wasiu’s journey began as an Admin Assistant, where he quickly became known 
            for his ability to balance company goals with employee needs. Over time, his role expanded 
            into executive assistance and business operations, supporting senior leadership with 
            everything from scheduling to policy development.
          </p>
          <p className="text-body">
            By combining structure with empathy, Wasiu ensures that organizations not only run 
            smoothly but also foster environments where people can thrive.
          </p>
        </div>
      </div>

      {/* Right Section - Desktop Image */}
      <div className="hidden lg:sticky lg:top-32 lg:flex lg:w-1/2 justify-end">
        <div className="relative group">
          {/* Decorative Backing */}
          <div className="absolute -inset-4 border border-surface-dim rounded-[44px] -z-10 transition-transform group-hover:scale-[1.02]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/5 to-transparent rounded-[40px] -z-10" />
          
          <img
            src={bgImage}
            alt="Wasiu Ayoola Professional Portrait"
            loading="lazy"
            className="w-full max-w-[460px] h-auto rounded-[40px] shadow-2xl transition-all duration-500 group-hover:translate-y-[-8px]"
          />
        </div>
      </div>

    </div>
  </section>
);

export default memo(About);