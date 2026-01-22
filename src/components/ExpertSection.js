import React, { useState } from "react";
import CTAButton from "./CTAButton";
import BookCall from "./BookCall";

const ExperctSection = ({ onOpenBookCall }) => {
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
    <div className="bg-background text-dark">
      {/* Expertise Section */}
      <section className="bg-background text-neutral-default pt-20 font-generalsans py-10 max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-0 lg:px-0">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-satoshi">Why Work With Me</h2>
          <p className="text-body max-w-[568px] mx-auto">
          Working with me isn’t just about getting tasks done — it’s about creating a partnership 
          that makes your business run smoother, smarter, and with a lot less stress. Here’s why clients 
          choose me
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[32px] justify-items-center">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="w-[256px] px-4 py-6 rounded-[16px] border border-surface-dim flex flex-col gap-3"
            >
              <h2 className="text-h2 font-satoshi">
                {feature.title}
              </h2>
              <p className="text-bodySm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>


      {/* CTA Section */}
      <section className="pb-20 text-center flex flex-col gap-6 px-4 sm:px-6 lg:px-0 bg-surface">
        <div className="flex justify-center">
          <CTAButton
            text="Book a Call"
            variant="primary"
            onClick={() => setIsBookCallOpen(true)}
          />
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

export default ExperctSection;
