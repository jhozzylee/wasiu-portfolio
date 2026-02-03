"use client";

import React, { useState } from "react";
import CTAButton from "./CTAButton";
import BookCall from "./BookCall";

const ExpertSection = () => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  const features = [
    {
      title: "Proven Experience",
      description:
        "5+ years of HR and executive support — I’ve seen it all and know how to keep things running efficiently.",
    },
    {
      title: "People-First Approach",
      description:
        "I balance business goals with human needs, so teams stay motivated, happy, and productive.",
    },
    {
      title: "Adaptable & Reliable",
      description:
        "Whether it’s strategy or last-minute changes, I stay calm, organized, and focused under pressure.",
    },
    {
      title: "Big Picture + Details",
      description:
        "I bridge the gap between leadership’s big ideas and flawless execution, ensuring nothing falls through the cracks.",
    },
  ];

  return (
    <div className="bg-background">
      {/* Expertise Section */}
      <section className="py-24 max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-0">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-h2 font-satoshi text-neutral-default">
            Why Work With Me
          </h2>
          <p className="text-body text-neutral-default/60 max-w-[568px] mx-auto leading-relaxed">
            Working with me isn’t just about getting tasks done — it’s about creating a partnership 
            that makes your business run smoother, smarter, and with a lot less stress.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 rounded-[24px] border border-surface-dim bg-surface/5 hover:border-neutral-default/30 transition-all duration-300 flex flex-col gap-4 group"
            >
              <h3 className="text-xl font-satoshi font-bold text-neutral-default group-hover:text-brand-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-bodySm text-neutral-default/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24">
        <div className="max-w-[1120px] mx-auto px-4 text-center">
          <div className="bg-surface-muted/10 border border-surface-dim rounded-[32px] py-16 px-6 flex flex-col items-center gap-8">
            <div className="space-y-2">
              <h3 className="text-h3 font-satoshi text-neutral-default">Ready to streamline your operations?</h3>
              <p className="text-neutral-default/60 font-generalsans">Let’s find a time to discuss your goals.</p>
            </div>
            <CTAButton
              text="Book a Discovery Call"
              variant="primary"
              onClick={() => setIsBookCallOpen(true)}
            />
          </div>
        </div>
      </section>

      {/* BookCall Modal */}
      <BookCall
        isOpen={isBookCallOpen}
        onClose={() => setIsBookCallOpen(false)}
      />
    </div>
  );
};

export default ExpertSection;